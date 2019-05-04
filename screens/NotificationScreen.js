import React from "react";
import { List, Text } from "react-native-paper";
import { FlatList } from "react-native";
import MainHeader from "../components/MainHeader";

export default class NotificationsScreen extends React.Component {
  static navigationOptions = {
    header: props => {
      return <MainHeader hasBack title="Notifications" />;
    }
  };

  render() {
    return (
      <FlatList
        data={[{ key: "1", name: "a" }, { key: "3", name: "b" }]}
        renderItem={({ item }) => (
          <List.Item
            title="First Item"
            description="Item description"
            left={props => <List.Icon {...props} icon="folder" />}
          />
        )}
      />
    );
  }
}
