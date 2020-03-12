import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './components/Navigation'

export default function App() {
  return (
    <Navigation></Navigation>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b4ed15',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
