import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({ 
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 50,
  },
  mainText: {
     fontWeight: "bold",
     fontSize: 30,
     margin: 10,
  },
  fieldInput: {
    fontWeight: "bold",
    fontSize: 30,
    borderStyle: "solid",
    borderColor: "#000000",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
})