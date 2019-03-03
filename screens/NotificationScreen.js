import React from "react";
import MainHeader from "../components/MainHeader";
import { Text } from "react-native-paper";

export default class NotificationsScreen extends React.Component {
  static navigationOptions = {
    header: props => {
      return <MainHeader hasBack title="Notifications" />;
    }
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <Text>Working on</Text>;
  }
}
