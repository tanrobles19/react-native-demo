import { Pressable, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/Colors";

function OutlinedButton({ onPress, iconName, children, color }) {
  const buttonStyle = ({ pressed }) => [
    styles.button,
    pressed && styles.pressed,
  ];

  return (
    <Pressable style={buttonStyle} onPress={onPress}>
      <Ionicons style={styles.icon} name={iconName} size={18} color={color} />
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

export default OutlinedButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: Colors.primary500,
  },
  pressed: {
    opacity: 0.7,
  },
  icon: {
      marginRight: 6
  },
  text: {
    color: Colors.primary500,
  },
});
