import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItems}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={{ color: "#fff", fontSize: 14, padding: 10 }}>
          {props.text}
        </Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;
const styles = StyleSheet.create({
  goalItems: {
    margin: 8,
    borderRadius: 16,
    backgroundColor: "#000000",
  },
  pressedItem: {
    opacity: 0.5,
  },
});
