import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from 'react-native';
import { imagens } from '../../Imagens';
import {
  validarIp,
  validarPorta,
  fetchComTimeout,
} from '../../utils/validacoes';

interface BotoesProps {
  ip: string;
  porta: string;
}

export default function BotaoEnviarSusto({ ip, porta }: BotoesProps) {
  const enviarSusto = async () => {
    try {
      if (!validarIp(ip) || !validarPorta(porta)) {
        Alert.alert('Erro', 'IP ou porta inválidos');
        return;
      }

      await fetchComTimeout(`http://${ip}:${porta}/comando`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ acao: 'SUSTO' }),
      });

      Alert.alert('Susto enviado!');
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
    marginTop: 8,
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
