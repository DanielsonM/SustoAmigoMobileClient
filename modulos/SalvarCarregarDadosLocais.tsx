import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export interface ConfigProps {
  ip: string;
  porta: string;
  intervalo: string;
  tempoExibicao: string;
  modo: 'rede' | 'automatico' | null;
}

// Função para salvar
export const salvarConfig = async (
  config: ConfigProps,
): Promise<string | null> => {
  try {
    await AsyncStorage.setItem('config', JSON.stringify(config));
    return null; // sucesso → sem erro
  } catch (err: any) {
    return err?.message ?? String(err); // retorna mensagem de erro
  }
};

// Função para carregar
export const carregarConfig = async (): Promise<ConfigProps | null> => {
  try {
    const dados = await AsyncStorage.getItem('config');
    if (dados) {
      return JSON.parse(dados);
    }
    return null;
  } catch (err: any) {
    Alert.alert('Erro ao carregar config local', err?.message ?? String(err));
    return null;
  }
};
