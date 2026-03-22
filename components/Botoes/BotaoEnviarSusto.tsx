import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from 'react-native';
import { imagens } from '../../Imagens';
import { launchImageLibrary } from 'react-native-image-picker';

interface BotoesProps {
  ip: string;
  porta: string;
}

export default function BotaoEnviarSusto({ ip, porta }: BotoesProps) {
  const enviarSusto = async () => {
    try {
      await fetch(`http://${ip}:${porta}/comando`, {
        method: 'POST',
        body: JSON.stringify({ acao: 'SUSTO' }),
      });

      Alert.alert('Susto enviado');
    } catch (err: any) {
      Alert.alert('Erro', err.message);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.container}
        onPress={enviarSusto}
        activeOpacity={0.7}
      >
        <ImageBackground
          source={imagens.enviarSusto}
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
    width: '74%',
    alignItems: 'center',
    marginTop: 15,
  },
  bgButton: {
    width: '100%',
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    borderRadius: 8,
  },
});
