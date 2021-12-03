import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export function Button({ onPress }) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.button}>
      <Text style={styles.buttonText}>
        Add
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
