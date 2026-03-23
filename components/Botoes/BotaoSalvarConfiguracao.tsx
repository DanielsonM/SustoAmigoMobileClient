import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from 'react-native';
import { imagens } from '../../Imagens';
import {
  salvarConfig,
  ConfigProps,
} from '../../modulos/SalvarCarregarDadosLocais';
import { validarIp, validarPorta, fetchComTimeout } from '../../utils/validacoes';

interface BotoesProps {
  ip: string;
  porta: string;
  intervalo: string;
  tempoExibicao: string;
  modo: boolean;
}

export default function BotaoSalvarConfiguracao({
  ip,
  porta,
  intervalo,
  tempoExibicao,
  modo,
}: BotoesProps) {
  const salvarConfigServidorELocal = async () => {
    try {
      if (!validarIp(ip) || !validarPorta(porta)) {
        Alert.alert('Erro', 'IP ou porta inválidos');
        return;
      }

      // 1. Salvar no servidor
      await fetchComTimeout(`http://${ip}:${porta}/config`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          IntervaloExecucao: parseInt(intervalo),
          TempoExibicao: parseInt(tempoExibicao),
          ModoRede: modo,
          Porta: parseInt(porta),
          IpServidor: ip,
          ImagemSelecionada: 'foto.jpg',
          SomSelecionado: 'grito.mp3',
        }),
      });

      // 2. Salvar localmente
      const configLocal: ConfigProps = {
        ip,
        porta,
        intervalo,
        tempoExibicao,
        modo: modo ? 'rede' : 'automatico',
      };
      await salvarConfig(configLocal);

      Alert.alert('Configuração salva com sucesso!');
    } catch (error: any) {
      Alert.alert('Erro ao salvar configuração:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.container}
        onPress={salvarConfigServidorELocal}
        activeOpacity={0.7}
      >
        <ImageBackground
          source={imagens.salvarConfig}
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
