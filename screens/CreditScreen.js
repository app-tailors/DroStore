import React from "react";
import MainHeader from "../components/MainHeader";
import { Text } from "react-native-paper";

export default class CreditScreen extends React.Component {
  static navigationOptions = {
    header: props => {
      return <MainHeader title="Credits" />;
    }
  };

  render() {
    return <Text>Working on</Text>;
  }
}
