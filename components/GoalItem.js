import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const GoalItem = ({ item, deleteHandler }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        pressed ? styles.pressedStyle : null,
        styles.goalItem,
      ]}
      onPress={deleteHandler.bind(this, item.key)}
    >
      <Text style={styles.text}>{item.text}</Text>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white',
  },
  text: {
    color: 'white',
    textTransform: 'capitalize',
    padding: 10,
  },
  pressedStyle: {
    opacity: 0.5,
  },
});
