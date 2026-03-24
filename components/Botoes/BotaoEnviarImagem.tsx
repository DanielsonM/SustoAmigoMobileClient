import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from 'react-native';
import { imagens } from '../../Imagens';
import { launchImageLibrary } from 'react-native-image-picker';
import {
  validarIp,
  validarPorta,
  fetchComTimeout,
} from '../../utils/validacoes';
import TelaMensagem from '../../modulos/Mensagem/TelaMensagem';

interface BotoesProps {
  ip: string;
  porta: string;
}

export default function BotaoEnviarImagem({ ip, porta }: BotoesProps) {
  const enviarImage = async () => {
    try {
      if (!validarIp(ip) || !validarPorta(porta)) {
        Alert.alert('Erro', 'IP ou porta inválidos');
        return;
      }

      const result = await launchImageLibrary({
        mediaType: 'photo',
      });

      if (!result.assets) return;

      const file = result.assets[0];
      const tiposPermitidos = ['image/jpeg', 'image/png'];

      if (!file.type || !tiposPermitidos.includes(file.type)) {
        Alert.alert('Erro', 'Selecione apenas JPG ou PNG');
        return;
      }

      const formData = new FormData();
      formData.append('file', {
        uri: file.uri,
        type: file.type,
        name: file.fileName || `upload.${file.type?.split('/')[1]}`,
      } as any);

      await fetchComTimeout(`http://${ip}:${porta}/upload/${'photo'}`, {
        method: 'POST',
        body: formData,
      });

      Alert.alert('Imagem enviada com sucesso');
    } catch (err: any) {
      Alert.alert('Erro', err.message);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.container}
        onPress={enviarImage}
        activeOpacity={0.7}
      >
        <ImageBackground
          source={imagens.enviarImagem}
          style={styles.bgButton}
          imageStyle={styles.imageStyle}
          resizeMode="cover"
        />
      </TouchableOpacity>
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
