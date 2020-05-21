import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import * as Font from "expo-font";

export default function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      "gilroy-bold": require("./assets/fonts/Gilroy-Bold.ttf"),
    }).then(() => {
      setReady(true);
    });
  }, []);

  return (
    <View style={styles.container}>
      {ready ? (
        <View style={styles.inner}>
          <Text style={styles.text}>Hello world</Text>
        </View>
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inner: {
    width: 120,
  },
  text: {
    fontFamily: "gilroy-bold",
    fontSize: 24,
    lineHeight: 25,
  },
});
