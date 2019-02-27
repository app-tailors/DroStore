import React, { Component, Fragment } from "react";
import { Icon } from "expo";
import { withNavigation } from "react-navigation";
import { Appbar, Badge, IconButton, Avatar } from "react-native-paper";
import Colors from "../constants/Colors";

class MainHeader extends Component {
  render() {
    return (
      <Appbar.Header style={{ backgroundColor: "white", elevation: 0 }}>
        <Appbar.Action
          onPress={this.props.navigation.openDrawer}
          color={Colors.primary}
          icon={({ size, color }) => (
            <Icon.Feather name="menu" color={color} size={size} />
          )}
        />
        <Appbar.Content title={this.props.title} />
        <Appbar.Action
          color={Colors.fade}
          icon={({ size, color }) => (
            <Fragment>
              <Icon.Feather name="bell" color={color} size={size} />
              <Badge
                size={9}
                style={{
                  position: "absolute",
                  top: 0
                }}
              />
            </Fragment>
          )}
        />
        <IconButton
          style={{ marginRight: 15 }}
          icon={({ size }) => <Avatar.Text label="FT" size={size + 10} />}
        />
      </Appbar.Header>
    );
  }
}

export default withNavigation(MainHeader);
