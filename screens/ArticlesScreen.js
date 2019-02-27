import React, { Component, Fragment } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Icon } from "expo";
import { Appbar, Badge, Avatar, IconButton } from "react-native-paper";

import Colors from "../constants/Colors";
import MainHeader from "../components/MainHeader";

class ArticlesScreen extends Component {
  static navigationOptions = {
    header: props => {
      return <MainHeader />;
    }
  };

  render() {
    const { screen } = styles;

    return <ScrollView style={screen} />;
  }
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.background,
    flex: 1
  }
});

export default ArticlesScreen;
