import React from "react";
import MainHeader from "../components/MainHeader";
import { Text } from "react-native-paper";

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: props => {
      return <MainHeader title="Settings" />;
    }
  };

  render() {
    return <Text>Working on</Text>;
  }
}
