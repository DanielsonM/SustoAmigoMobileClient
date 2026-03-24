import { StyleSheet, View, Switch, Text } from 'react-native';
import { useState } from 'react';

interface SwitcheTipoEnvioProps {
  booApenasSom: boolean;
  setApenasSom: (v: boolean) => void;
  booApenasImagem: boolean;
  setApenasImagem: (v: boolean) => void;
}

export default function SwitchsTipoEnvio({
  booApenasSom,
  setApenasSom,
  booApenasImagem,
  setApenasImagem,
}: SwitcheTipoEnvioProps) {
  return (
    <View style={[styles.viwSwitch]}>
      <Text style={[styles.txtSwitch]}>Apenas som</Text>
      <Switch
        style={[styles.swt]}
        trackColor={{ false: '#767577', true: '#be0606' }}
        thumbColor={'#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        value={booApenasSom}
        onValueChange={v => {
          setApenasSom(v);
          if (v) setApenasImagem(false);
        }}
      />

      <Text style={styles.txtSwitch}>Apenas imagem</Text>
      <Switch
        style={[styles.swt]}
        trackColor={{ false: '#767577', true: '#be0606' }}
        thumbColor={'#f4f3f3'}
        ios_backgroundColor="#3e3e3e"
        value={booApenasImagem}
        onValueChange={v => {
          setApenasImagem(v);
          if (v) setApenasSom(false);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  swt: {
    flex: 1,
    paddingBottom: 30,
  },
  viwSwitch: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    height: 40,
    marginTop: 15,
    marginRight: 20,
    width: 350,
  },
  txtSwitch: {
    fontSize: 15,
    color: '#200701',
    fontWeight: 'bold',
    paddingTop: 8,
    paddingLeft: 20,
    fontFamily: 'Nunito-VariableFont_wght',
  },
});
