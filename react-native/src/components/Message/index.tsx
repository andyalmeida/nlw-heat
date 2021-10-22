import React from 'react';

import { Text, View } from 'react-native';
import { UserPhoto } from '../UserPhoto';

import { styles } from './styles';

export function Message() {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>
        Texto da mensagem
      </Text>

      <View style={styles.footer}>
        <UserPhoto
          size="SMALL"
          imageUri="https://github.com/andyalmeida.png"
        />

        <Text style={styles.userName}>
          Nome do usuário
        </Text>
      </View>
    </View>
  );
}