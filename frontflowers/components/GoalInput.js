import { useState } from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Modal,
  Image,
} from "react-native";
const lightGreenColor = "#B9EE97";
const lightGreenColor2 = "#C8F0AD";

function GoalInput(props) {
  const [txt, setTxt] = useState("");

  function goalInputHandler(enteredText) {
    setTxt(enteredText);
  }
  function addGoalHandler() {
    props.addGoalHandler(txt);
    setTxt("");
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/logo-planta.png")}
        ></Image>
        <TextInput
          onChangeText={goalInputHandler}
          placeholder="your course gol"
          value={txt}
          style={{
            width: "100%",
            borderWidth: 1,
            backgroundColor: "#e4d0ff",
            color: "#120438",
            borderColor: "#e4d0ff",
            borderRadius: "5px",
            marginRight: 8,
            padding: 14,
            placeholderColor: "#cccccc",
          }}
        ></TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              color="#f31282"
              onPress={props.hideModalHandler}
              title="Cancel"
            ></Button>
          </View>
          <View style={styles.button}>
            <Button
              color="#0531F7"
              onPress={addGoalHandler}
              title="Add Goal"
            ></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    padding: 16,
    backgroundColor: "#C8F0AD",
  },
  image: {
    width: 100,
    height: 100,
    margin: 30,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 14,
  },
  button: {
    width: "40%",
    marginHorizontal: 2,
  },
});
