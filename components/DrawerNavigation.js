import React, { Component, Fragment } from "react";
import { ScrollView } from "react-native";
import { withNavigation } from "react-navigation";
import { Drawer, Headline } from "react-native-paper";
import { Constants, Icon } from "expo";
import Colors from "../constants/Colors";

class DrawerNavigation extends Component {
  state = {
    activedLink: "Home",
    links: [
      { key: "Home", icon: "home" },
      { key: "Account", icon: "user" },
      { key: "Settings", icon: "settings" },
      { key: "Credits", icon: "info" }
    ]
  };

  changeLocation = e => {
    this.setState({ activedLink: e }, () => {
      this.props.navigation.navigate(e);
    });
  };

  render() {
    const { activedLink, links } = this.state;
    return (
      <Fragment>
        <Headline
          style={{
            marginTop: 10,
            padding: 10,
            paddingVertical: 70,
            textAlign: "center",
            color: Colors.primary,
            fontFamily: "bold",
            backgroundColor: Colors.background
          }}
        >
          DroStore
        </Headline>

        <ScrollView>
          {links.map(({ key, icon }) => (
            <Drawer.Item
              key={key}
              onPress={() => this.changeLocation(key)}
              active={activedLink === key}
              icon={({ color }) => (
                <Icon.Feather name={icon} size={18} color={color} />
              )}
              label={key}
            />
          ))}
        </ScrollView>
      </Fragment>
    );
  }
}

export default withNavigation(DrawerNavigation);
