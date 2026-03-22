import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import Switches from './components/Switches';
import InputsRede from './components/InputsRede';
import InputsTempo from './components/InputsTempo';
import { imagens } from './components/Imagens';
import Botoes from './components/Botoes';

function App() {
  const [modo, setModo] = useState<'rede' | 'automatico' | null>('rede');
  const [ip, setIp] = useState('000.00.0.0');
  const [porta, setPorta] = useState('0000');
  const [intervalo, setIntervalo] = useState('0');
  const [tempoExibicao, setTempoExibicao] = useState('0');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={imagens.fundo}
          style={styles.background}
          resizeMode="cover"
        >
          <Text style={styles.title}>Susto Amigo</Text>
          <Switches modo={modo} setModo={setModo} />
          <InputsRede ip={ip} setIp={setIp} porta={porta} setPorta={setPorta} />
          <InputsTempo
            intervalo={intervalo}
            setIntervalo={setIntervalo}
            tempoExibicao={tempoExibicao}
            setTempoExibicao={setTempoExibicao}
          />
          <Botoes></Botoes>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    marginTop: 20,
    fontFamily: 'Creepster-Regular',
    color: '#910000',
    alignSelf: 'center',
    marginBottom: 10,
  },
});

export default App;
