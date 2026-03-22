import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { imagens } from './Imagens';

interface BotoesProps {
  onPress?: () => void;
}

export default function Botoes({ onPress }: BotoesProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <ImageBackground
          source={imagens.salvarConfig}
          style={styles.bgButton}
          imageStyle={styles.imageStyle}
          resizeMode="cover"
        ></ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <ImageBackground
          source={imagens.enviarImagem}
          style={styles.bgButton}
          imageStyle={styles.imageStyle}
          resizeMode="cover"
        ></ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <ImageBackground
          source={imagens.enviarSom}
          style={styles.bgButton}
          imageStyle={styles.imageStyle}
          resizeMode="cover"
        ></ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <ImageBackground
          source={imagens.enviarSusto}
          style={styles.bgButton}
          imageStyle={styles.imageStyle}
          resizeMode="cover"
        ></ImageBackground>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '70%',
    alignItems: 'center',
    marginTop: 15,
  },
  txtSalvar: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007413',
  },
  bgButton: {
    width: '100%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchable: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    borderRadius: 8,
  },
});
