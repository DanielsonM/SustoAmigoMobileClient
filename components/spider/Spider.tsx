import React, { useRef, useEffect, useState } from 'react';
import { Animated, Image, StyleSheet, Dimensions } from 'react-native';
import { imagens } from '../../Imagens';

const { width, height } = Dimensions.get('window');

const Spider = () => {
  const position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const [target, setTarget] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Função para mover a aranha até o ponto alvo
    const moveSpider = (newTarget: { x: number; y: number }) => {
      Animated.timing(position, {
        toValue: newTarget,
        duration: 10,
        useNativeDriver: true,
      }).start();
    };

    // Primeira animação
    moveSpider(target);

    // A cada 30 segundos, muda o alvo para um ponto aleatório
    const interval = setInterval(() => {
      const newTarget = {
        x: Math.random() * (width - 50),
        y: Math.random() * (height - 50),
      };
      setTarget(newTarget);
      moveSpider(newTarget);
    }, 30000);

    return () => clearInterval(interval);
  }, [position]); // não precisa colocar target aqui

  return (
    <Animated.View style={{ transform: position.getTranslateTransform() }}>
      <Image source={imagens.aranha} style={styles.spider} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  spider: {
    width: 30,
    height: 30,
    backgroundColor: 'transparent',
  },
});

export default Spider;
