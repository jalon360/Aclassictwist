import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CateringScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catering Page</Text>
      {/* Add more content as needed */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e293b',
  },
});
