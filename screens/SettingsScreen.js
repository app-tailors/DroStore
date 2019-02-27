import React from "react";
import { SectionList, Text } from "react-native";

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: "app.json"
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <SectionList
        renderItem={({ item, index, section, separators }) => (
          <Text key={index}>{item}</Text>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={{ fontWeight: "bold" }}>{title}</Text>
        )}
        sections={[
          { title: "Title1", data: ["item1", "item2"] },
          { title: "Title2", data: ["item3", "item4"] },
          { title: "Title3", data: ["item5", "item6"] }
        ]}
        keyExtractor={(item, index) => item + index}
      />
    );
  }
}
