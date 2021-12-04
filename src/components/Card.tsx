import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface CardProps extends TouchableOpacityProps {
  skill: string;
}

export const Card = ({ skill, ...rest }: CardProps) => {
  return (
    <TouchableOpacity style={styles.buttonSkill}>
      <Text 
        style={styles.textSkill}
        {...rest}
      >
        {skill}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textSkill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  buttonSkill: {
    padding: 15,
    backgroundColor: '#1f1e25',
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 8,
  },
});
