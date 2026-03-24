import { StyleSheet, View, Switch, Text } from 'react-native';
import { useState } from 'react';

interface SwitchesProps {
  modo: 'rede' | 'automatico' | null;
  setModo: (modo: 'rede' | 'automatico' | null) => void;
}

export default function SwitchsModo({ modo, setModo }: SwitchesProps) {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <View style={styles.viwSwitch}>
      <View style={{ flexDirection: 'row', paddingLeft: 5 }}>
        <Text style={[styles.txtSwitch, { paddingLeft: 5 }]}>Modo Rede</Text>
        <Switch
          style={[styles.swt, { marginTop: 5 }]}
          trackColor={{ false: '#767577', true: '#be0606' }}
          thumbColor={'#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          value={modo === 'rede'}
          onValueChange={v => {
            if (v) setModo('rede');
            else setModo('automatico');
          }}
        />
      </View>
      <View style={styles.viwSwitch}>
        <View style={[{ flexDirection: 'row' }]}>
          <Text style={styles.txtSwitch}>Modo automático</Text>
          <Switch
            style={[styles.swt, { paddingLeft: 45, marginTop: 2 }]}
            trackColor={{ false: '#767577', true: '#be0606' }}
            thumbColor={'#f4f3f3'}
            ios_backgroundColor="#3e3e3e"
            value={modo === 'automatico'}
            onValueChange={v => {
              if (v) setModo('automatico');
              else setModo('rede');
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  swt: {
    flex: 1,
    backgroundColor: 'transparent',
    alignSelf: 'flex-start',
  },
  viwSwitch: {
    backgroundColor: 'transparent',
    alignSelf: 'flex-start',
    paddingBottom: 5,
    paddingLeft: 9,
    marginBottom: 1,
  },
  txtSwitch: {
    fontSize: 15,
    color: '#200701',
    fontWeight: 'bold',
    paddingTop: 5,
    paddingRight: 8,
    fontFamily: 'Nunito-VariableFont_wght',
  },
});
