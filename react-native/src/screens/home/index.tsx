import React from 'react';
import { View } from 'react-native';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { MessageList } from '../../components/MessageList';
import { COLORS } from '../../theme';

import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <MessageList />
      <Button
        title="ENTRAR COM O GITHUB"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        icon="github"
      />
    </View>
  );
}