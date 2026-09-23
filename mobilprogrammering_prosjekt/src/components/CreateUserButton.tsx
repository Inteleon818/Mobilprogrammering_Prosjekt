import { Text, View, StyleSheet } from "react-native";
import { Link, useRouter } from 'expo-router';

export function CreateUserButton() {
  const router = useRouter();

  return (
    <View>
      <Link href="/createuserpage" style={styles.button}>
        <Text>Create user</Text>
      </Link>
    </View>
  );
}
 
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ffffff",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 10,
    padding: 5,
  }
})