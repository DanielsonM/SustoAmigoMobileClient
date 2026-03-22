import { StyleSheet, Text, View } from 'react-native';

export default function TesteFontes() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Teste de Fontes</Text>
      
      {/* Teste Nosifer com diferentes nomes */}
      <Text style={styles.text}>Nosifer-Regular:</Text>
      <Text style={[styles.fontTest, { fontFamily: 'Nosifer-Regular' }]}>
        Susto Amigo
      </Text>
      
      <Text style={styles.text}>Nosifer (sem -Regular):</Text>
      <Text style={[styles.fontTest, { fontFamily: 'Nosifer' }]}>
        Susto Amigo
      </Text>
      
      {/* Teste Creepster */}
      <Text style={styles.text}>Creepster-Regular:</Text>
      <Text style={[styles.fontTest, { fontFamily: 'Creepster-Regular' }]}>
        Susto Amigo
      </Text>
      
      {/* Teste Nunito (que funciona) */}
      <Text style={styles.text}>Nunito-VariableFont_wght:</Text>
      <Text style={[styles.fontTest, { fontFamily: 'Nunito-VariableFont_wght' }]}>
        Susto Amigo
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 14,
    marginTop: 15,
    color: '#666',
  },
  fontTest: {
    fontSize: 24,
    color: '#910000',
  },
});
