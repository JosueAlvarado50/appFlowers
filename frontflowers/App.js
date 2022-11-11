import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import GoalItem from "./components/GoalItem";

import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [listOfGoals, setListOfGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  function addGoalHandler(enteredGoalText) {
    setListOfGoals((currentListOfGoals) => [
      ...currentListOfGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }
  function deleteGoalHandler(id) {
    setListOfGoals((currentListOfGoals) => {
      return currentListOfGoals.filter((goal) => goal.id !== id);
    });
  }
  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  function hideModalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <StatusBar style="dark"></StatusBar>
      <View style={styles.appContainer}>
        <Button
          color="#5e0acc"
          title="add new Goal"
          onPress={startAddGoalHandler}
        ></Button>

        <GoalInput
          visible={modalIsVisible}
          addGoalHandler={addGoalHandler}
          hideModalHandler={hideModalHandler}
        ></GoalInput>

        <View style={styles.goalsContainer}>
          <Text style={{ fontSize: 20 }}>Goals List</Text>
          <FlatList
            data={listOfGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                ></GoalItem>
              );
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}
/*
style={{ width: "50%" }} 
*/
const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "#C8F0AD",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  goalsContainer: {
    flex: 3,
    backgroundColor: "B9EE97",
    marginTop: 60,
  },
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
    padding: 14,
  },

  title: {
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    width: "100%",
    margin: "5%",
    borderRadius: "25px",
  },
  button: {
    backgroundColor: "#61dafb",
    color: "#fff",
  },
  goalItems: {
    margin: 5,
    padding: 8,
    borderRadius: 16,
    backgroundColor: "#000000",
  },
});
