import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";

function Item({ item }) {
  return (
    <View style={[styles.item, { backgroundColor: item.color }]}>
      <Text>
        {item.index} {item.word}
      </Text>
    </View>
  );
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getData(offset = 0) {
  const words = ["Hello", "World", "Random", "Sample", "Corona", "Good", "Bad"];
  const colors = ["#ffd", "#dff", "#fdf", "#ddf", "#dfd", "#fdd"];
  const data = [];
  for (let i = 0; i < 10; i++) {
    const word = words[getRandomInt(words.length)];
    const color = colors[getRandomInt(colors.length)];
    data.push({
      index: offset + i,
      word,
      color,
    });
  }
  return data;
}

export default function App() {
  const [data, setData] = useState(getData());

  function handleEndReached() {
    const newData = getData(data.length);
    setData(data.concat(newData));
  }

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(d) => d.index.toString()}
        renderItem={Item}
        data={data}
        onEndReached={handleEndReached}
        getItemLayout={(data, index) => ({
          length: 150,
          offset: 150 * index,
          index,
        })}
      />
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
  item: {
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width,
    height: 150,
  },
});
