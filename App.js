import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import {AppNavigation} from './src/navigation/AppNavigation'
export default function App() {
  return <AppNavigation></AppNavigation>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
    height: '100%',
    alignItems: 'center',
  },
  wrap: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '50%',
  },
  h1: {
    fontSize: 21,
    fontWeight: '600',
    margin: 8.5,
  },
  span: {
    textAlign: 'center',
    color: '#818C99'
  },
  btn: {
    backgroundColor: '#4986CC',
    width: 133,
    height: 36,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 24,
    alignSelf: 'center',
  },
  btn_text: {
    color: '#FFFFFF',
  },
  hr: {
    height: 0.33,
    backgroundColor: '#D7D8D9',
    paddingRight: 12,
    paddingLeft: 12,
    marginTop: 13.5,
    width: '90%',
  }
});
