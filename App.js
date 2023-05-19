import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, TextInput, View, FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [goals, setGoals] = useState([]);
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = () => {
    setGoals((prev) => [
      ...prev,
      { text: enteredGoal, key: Math.random().toString() },
    ]);
    setModalIsVisible(false);
  };
  const deleteHandler = (key) => {
    deleteGoals = goals.filter((goal) => goal.key !== key);
    setGoals(deleteGoals);
    console.log('dlete');
  };
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };
  const hideModalHandler = () => {
    setModalIsVisible((prev) => !prev);
  };
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button
          title="Add New Goal"
          color="#a57bdd"
          onPress={startAddGoalHandler}
        />
        {modalIsVisible && (
          <GoalInput
            addGoalHandler={addGoalHandler}
            goalInputHandler={goalInputHandler}
            visible={modalIsVisible}
            hideModalHandler={hideModalHandler}
          />
        )}

        <View style={styles.gaolsContainer}>
          <FlatList
            data={goals}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <GoalItem item={item} deleteHandler={deleteHandler} />
            )}
            showsVerticalScrollIndicator={false}
            always
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingVertical: 16,
    flex: 1,
  },

  gaolsContainer: {
    flex: 5,
    marginHorizontal: 10,
  },
});
