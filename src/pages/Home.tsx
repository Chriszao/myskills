import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

interface SkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greetings, setGreetings] = useState('');

  const handleNewSkill = () => {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }
    setMySkills(prevState => [...prevState, data]);
  };

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreetings('Good Morning!');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreetings('Good Afternoon!');
    } else {
      setGreetings('Good night!');
    }
  }, []);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Welcome, Christofer!
      </Text>

      <Text style={styles.greetings}>
        {greetings}
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

      <FlatList
      scrollIndicatorInsets={{right: 0}}
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>
        (
          <Card skill={item.name} />
        )}
      />
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
  greetings: {
    color: '#fff',
  },
});
