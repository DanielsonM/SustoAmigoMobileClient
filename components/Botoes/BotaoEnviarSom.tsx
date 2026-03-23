import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from 'react-native';
import { imagens } from '../../Imagens';
import { launchImageLibrary } from 'react-native-image-picker';
import TelaMensagem from '../../modulos/Mensagem/TelaMensagem';
import React, { useState } from 'react';
import { validarIp, validarPorta, fetchComTimeout } from '../../utils/validacoes';

interface BotoesProps {
  ip: string;
  porta: string;
}

export default function BotaoEnviarSom({ ip, porta }: BotoesProps) {
  const [mensagemVisivel, setMensagemVisivel] = useState(false);
  const [mensagem, setMensagem] = useState('');

  const enviarSom = async () => {
    try {
      if (!validarIp(ip) || !validarPorta(porta)) {
        setMensagem('IP ou porta inválidos');
        setMensagemVisivel(true);
        return;
      }

      const result = await launchImageLibrary({
        mediaType: 'mixed',
      });

      if (!result.assets) return;

      const file = result.assets[0];
      const tiposPermitidos = ['audio/wav', 'audio/mp3'];

      if (!file.type || !tiposPermitidos.includes(file.type)) {
        setMensagem('Selecione apenas mp3 ou wav');
        setMensagemVisivel(true);
        return;
      }

      const formData = new FormData();
      formData.append('file', {
        uri: file.uri,
        type: file.type,
        name: file.fileName || `upload.${file.type?.split('/')[1]}`,
      } as any);

      await fetchComTimeout(`http://${ip}:${porta}/upload/audio`, {
        method: 'POST',
        body: formData,
      });

      setMensagem('Áudio enviado com sucesso!');
      setMensagemVisivel(true);
    } catch (err: any) {
      setMensagem(`Erro: ${err.message}`);
      setMensagemVisivel(true);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.container}
        onPress={enviarSom}
        activeOpacity={0.7}
      >
        <ImageBackground
          source={imagens.enviarSom}
          style={styles.bgButton}
          imageStyle={styles.imageStyle}
          resizeMode="cover"
        />
      </TouchableOpacity>

      <TelaMensagem
        visivel={mensagemVisivel}
        tipo="Aviso"
        descricao={mensagem}
        onFechar={() => setMensagemVisivel(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '75%',
    alignItems: 'center',
    marginTop: 15,
  },
  bgButton: {
    width: '100%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    borderRadius: 8,
  },
});
