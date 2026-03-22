import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
} from 'react-native';
import { imagens } from '../../Imagens';

interface InputsTempoProps {
  intervalo: string;
  setIntervalo: (intervalo: string) => void;
  tempoExibicao: string;
  setTempoExibicao: (tempo: string) => void;
  modoRede: boolean;
}

export default function InputsTempo({
  intervalo,
  setIntervalo,
  tempoExibicao,
  setTempoExibicao,
  modoRede,
}: InputsTempoProps) {
  return (
    <View style={styles.container}>
      {/* TEMPO */}
      <View style={styles.viwInput}>
        <Text style={styles.txtDescricaoInput}>Tempo de execução:</Text>

        <ImageBackground
          source={imagens.input}
          style={styles.bgInput}
          imageStyle={styles.imageStyle}
        >
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            value={tempoExibicao}
            placeholder="0"
            placeholderTextColor="#999"
            onFocus={() => {
              if (tempoExibicao === '0') setTempoExibicao('');
            }}
            onBlur={() => {
              if (tempoExibicao === '') setTempoExibicao('0');
            }}
            onChangeText={setTempoExibicao}
          />
        </ImageBackground>
      </View>

      {/* INTERVALO */}
      <View style={styles.viwInput}>
        <Text style={styles.txtDescricaoInput}>Intervalo (segundos):</Text>

        <ImageBackground
          source={imagens.input}
          style={styles.bgInput}
          imageStyle={styles.imageStyle}
        >
          {!modoRede && <View style={styles.overlay} />}

          <TextInput
            editable={modoRede}
            style={[styles.textInput, !modoRede && styles.condicaoCorModoRede]}
            keyboardType="numeric"
            value={intervalo}
            placeholder="0"
            placeholderTextColor="#999"
            onFocus={() => {
              if (intervalo === '0') setIntervalo('');
            }}
            onBlur={() => {
              if (intervalo === '') setIntervalo('0');
            }}
            onChangeText={setIntervalo}
          />
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },

  viwInput: {
    width: '48%',
    paddingLeft: 5,
  },

  txtDescricaoInput: {
    color: '#200701',
    fontFamily: 'Nunito-VariableFont_wght',
    fontWeight: 'bold',
    paddingVertical: 6,
    paddingLeft: 3,
  },

  bgInput: {
    width: '98%',
    height: 35,
    justifyContent: 'center',
  },

  imageStyle: {
    borderRadius: 2,
  },

  textInput: {
    height: '100%',
    paddingHorizontal: 12,
    color: '#000',
    backgroundColor: 'transparent',
    paddingLeft: 10,
    marginTop: 3,
  },
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(133, 132, 132, 0.5)',
    width: 176, // 👈 escurece
    height: 30,
    marginLeft: 5,
    marginTop: 3,
  },
  condicaoCorModoRede: {
    color: '#646464',
  },
});
