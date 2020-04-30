import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './Header'
import Body from './Body'

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.body}>
        <Body />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#629CEC',
  },

  header: {
    flex: 2,
    backgroundColor: '#629CEC',
    alignItems: 'flex-start',
    marginLeft: 30

  },

  body: {
    flex: 8,
    width: '100%',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    alignItems: 'center',
    backgroundColor: 'white'

  }
});
