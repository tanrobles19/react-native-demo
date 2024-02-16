import { View, Text, Input, StyleSheet, TextInput } from "react-native";
import { Colors } from "../../constants/Colors";

function TextInputComponent({ children, changeTitleHandler, enteredValue }) {
  return (
    <View>
      <Text style={styles.label}>{children}</Text>
      <TextInput
        style={styles.input}
        onChangeText={changeTitleHandler}
        value={enteredValue}
      ></TextInput>
    </View>
  );
}

export default TextInputComponent;

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: Colors.primary500
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    paddingLeft: 4,
    // margin: 4,
    borderWidth: 1,
    borderColor: Colors.primary500
  },
});
