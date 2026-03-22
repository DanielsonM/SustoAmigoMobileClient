import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
} from 'react-native';
import { imagens } from '../components/Imagens';
import { useState } from 'react';

interface InputsRedeProps {
  ip: string;
  setIp: (ip: string) => void;
  porta: string;
  setPorta: (porta: string) => void;
}

export default function InputsRede({
  ip,
  setIp,
  porta,
  setPorta,
}: InputsRedeProps) {
  return (
    <View style={styles.container}>
      {/* IP */}
      <View style={styles.viwInput}>
        <Text style={styles.txtDescricaoInput}>IP da vítima:</Text>

        <ImageBackground
          source={imagens.input}
          style={styles.bgInput}
          imageStyle={styles.imageStyle}
        >
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            maxLength={15}
            value={ip}
            placeholder="000.00.0.0"
            placeholderTextColor="#999"
            onFocus={() => {
              if (ip === '000.00.0.0') setIp('');
            }}
            onBlur={() => {
              if (ip === '') setIp('000.00.0.0');
            }}
            onChangeText={setIp}
          />
        </ImageBackground>
      </View>

      {/* PORTA */}
      <View style={styles.viwInput}>
        <Text style={styles.txtDescricaoInput}>Porta da vítima:</Text>

        <ImageBackground
          source={imagens.input}
          style={styles.bgInput}
          imageStyle={styles.imageStyle}
        >
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            maxLength={5}
            value={porta}
            placeholder="0000"
            placeholderTextColor="#999"
            onFocus={() => {
              if (porta === '0000') setPorta('');
            }}
            onBlur={() => {
              if (porta === '') setPorta('0000');
            }}
            onChangeText={setPorta}
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
    paddingVertical: 4,
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
  },
});
