import React from "react";
import { StyleSheet } from "react-native";
import Main from "./components/MainComponent";

export default class App extends React.Component {
  render() {
    return <Main style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f91717",
    alignItems: "center",
    justifyContent: "center"
  }
});
