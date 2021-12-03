import React, { useState } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);


  const handleNewSkill = () => {
    setMySkills(prevState => [...prevState, newSkill]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome, Christofer!
      </Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#666"
        onChangeText={setNewSkill}
      />

      <Button onPress={handleNewSkill} />

      <Text style={[styles.title, { marginVertical: 50 }]}>
        My Skills
      </Text>

      {
        mySkills.map(skill => (
          <Card key={skill} skill={skill} />
        ))
      }


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
});
