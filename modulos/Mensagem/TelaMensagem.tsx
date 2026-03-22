import React from 'react';
import { Modal, View, Text, StyleSheet, Button } from 'react-native';

interface TelaMensagemProps {
  visivel: boolean;
  tipo: string;
  descricao: string;
  onFechar: () => void;
}

export default function TelaMensagem({
  visivel,
  tipo,
  descricao,
  onFechar,
}: TelaMensagemProps) {
  return (
    <Modal
      visible={visivel}
      transparent={true}
      animationType="fade"
      onRequestClose={onFechar}
    >
      <View style={styles.overlay}>
        <View style={styles.modalView}>
          <Text style={styles.titulo}>{tipo}</Text>
          <Text style={styles.descricao}>{descricao}</Text>
          <Button title="Fechar" onPress={onFechar} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descricao: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
});
