import { View, Text, TextInput, StyleSheet } from "react-native";
import { useForm } from "@tanstack/react-form";
import type { User } from "@/types/user";

export default function CreateUserPage() {
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      console.log("User data: ", value);
    }
  })

  return (
    <View style={styles.container}>
      <form.Field
        name="username"
        children={(field) => (
          <View style={styles.field}>
            <Text style={styles.fieldTitle}>Username:</Text>
            <TextInput
              style={styles.fieldInput}
              value={field.state.value}
              onChangeText={(value) => field.handleChange(value)}
              placeholder="Create a username"
            />
          </View>
        )}
      />
      <form.Field
        name="password"
        children={(field) => (
          <View style={styles.field}>
            <Text style={styles.fieldTitle}>Password:</Text>
            <TextInput
              style={styles.fieldInput}
              value={field.state.value}
              onChangeText={(value) => field.handleChange(value)}
              placeholder="Create a password"
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 50,
  },
  field: {
    marginBottom: 20,
  },
  fieldTitle: {
     fontWeight: "bold",
     fontSize: 30,
  },
  fieldInput: {
    fontSize: 30,
    borderStyle: "solid",
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 10,
  }
})