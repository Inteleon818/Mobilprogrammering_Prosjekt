/*Claude chat som forklarer hvordan man navigerer mellom sider gjennom Pressable: https://claude.ai/share/b9bcfa63-8997-4e41-b591-bdabbbd7a6f0*/

import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { useForm } from "@tanstack/react-form";
import type { User } from "@/types/user";
import { useState } from "react";
import { useRouter } from "expo-router";
import { styles } from "@/styles/styles";

export default function CreateUserPage() {
  const router = useRouter();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const form = useForm({
    defaultValues: {
      id: (Math.floor(Math.random() * 1000000)).toString(),
      username: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      console.log("User data: ", value);
      router.replace({
        pathname: "/userpage",
        params: {
          id: value.id,
          username: value.username,
        }
      });
    }
  })

  return (
    <View style={styles.container}>
      <form.Field
        name="username"
        children={(field) => (
          <View>
            <Text style={styles.mainText}>Username:</Text>
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
          <View>
            <Text style={styles.mainText}>Password:</Text>
            <TextInput
              style={styles.fieldInput}
              value={field.state.value}
              onChangeText={(value) => field.handleChange(value)}
              placeholder="Create a password"
            />
          </View>
        )}
      />

      <Pressable onPress={() => form.handleSubmit()}>
        <Text style={styles.fieldInput} >Create account</Text>
      </Pressable>
    </View>
  );
}

