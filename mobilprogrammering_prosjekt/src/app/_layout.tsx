import { CreateUserButton } from "@/components/CreateUserButton";
import { Stack, useRouter } from "expo-router";

export default function RootLayout() {
  const router = useRouter();

  return <Stack
    screenOptions={{
      
    }}
  >
    <Stack.Screen
      name="index"
      options = {{
        title: "CheckPoint",
        headerRight: () => <CreateUserButton />,
      }}
    />
    <Stack.Screen 
      name="userpage"
      options = {{
        title: "User page",
      }}
    />
    <Stack.Screen 
      name="createuserpage"
      options = {{
        title: "Create user"
      }}
    />
    <Stack.Screen 
      name="changepasswordpage"
      options = {{
        title: "Change password"
      }}
    />
    <Stack.Screen 
      name="selectuser"
      options = {{
        title: "Select user"
      }}
    />
  </Stack>;
}
