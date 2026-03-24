import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { imagens } from '../../Imagens';
import TelaMensagem from '../../modulos/Mensagem/TelaMensagem';
import React, { useState } from 'react';
import {
  validarIp,
  validarPorta,
  fetchComTimeout,
} from '../../utils/validacoes';
import { pick, types } from '@react-native-documents/picker';

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

      // Abrir seletor de arquivos de áudio
      const result = await pick({
        type: [types.audio],
      });

      // Se o usuário cancelou ou não selecionou nada
      if (!result || result.length === 0) return;

      const file = result[0];
      const tiposPermitidos = ['audio/wav', 'audio/mpeg', 'audio/mp3'];

      if (!file.type || !tiposPermitidos.includes(file.type)) {
        setMensagem('Selecione apenas mp3 ou wav');
        setMensagemVisivel(true);
        return;
      }

      const formData = new FormData();
      formData.append('file', {
        uri: file.uri,
        type: file.type,
        name: file.name || `upload.${file.type?.split('/')[1]}`,
      } as any);

      await fetchComTimeout(`http://${ip}:${porta}/upload/audio`, {
        method: 'POST',
        body: formData,
      });

      setMensagem('Áudio enviado com sucesso!');
      setMensagemVisivel(true);
    } catch (err: any) {
      // Se houve erro inesperado
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
    marginTop: 8,
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
