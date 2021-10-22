import React from 'react';
import { View } from 'react-native';
import { Header } from '../../components/Header';
import { Message } from '../../components/Message';

import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Message />
      <Message />
      <Message />
    </View>
  );
}