import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import { AppLoading, Asset, Font, Icon } from "expo";
import AppNavigator from "./navigation/AppNavigator";
import Colors from "./constants/Colors";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.background,
    primary: Colors.primary,
    text: Colors.text
  },
  roundness: 5,
  fonts: {
    regular: "regular",
    medium: "medium",
    light: "light",
    thin: "thin"
  }
};

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <PaperProvider theme={theme}>
          <View style={styles.container}>
            {Platform.OS === "ios" && <StatusBar barStyle="default" />}
            <AppNavigator />
          </View>
        </PaperProvider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require("./assets/images/robot-dev.png"),
        require("./assets/images/robot-prod.png")
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Feather.font,
        ...Icon.Entypo.font,
        ...Icon.AntDesign.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        regular: require("./assets/fonts/Work_Sans/WorkSans-Regular.ttf"),
        medium: require("./assets/fonts/Work_Sans/WorkSans-Medium.ttf"),
        bold: require("./assets/fonts/Work_Sans/WorkSans-Bold.ttf"),
        black: require("./assets/fonts/Work_Sans/WorkSans-Black.ttf"),
        light: require("./assets/fonts/Work_Sans/WorkSans-Light.ttf"),
        thin: require("./assets/fonts/Work_Sans/WorkSans-Thin.ttf")
      })
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  }
});
