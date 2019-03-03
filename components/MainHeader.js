import React, { Component, Fragment } from "react";
import { Icon } from "expo";
import { withNavigation } from "react-navigation";
import { Appbar, Badge, IconButton, Avatar } from "react-native-paper";
import Colors from "../constants/Colors";

class MainHeader extends Component {
  render() {
    const { navigation, title, hasBack } = this.props;
    const { navigate, goBack, openDrawer, popToTop } = navigation;
    return (
      <Appbar.Header style={{ backgroundColor: "white", elevation: 0 }}>
        {hasBack ? (
          <Appbar.BackAction
            onPress={() => {
              console.log(goBack);
              popToTop();
            }}
          />
        ) : (
          <Appbar.Action
            onPress={openDrawer}
            color={Colors.primary}
            icon={({ size, color }) => (
              <Icon.Feather name="menu" color={color} size={size} />
            )}
          />
        )}

        <Appbar.Content title={title} />
        <Appbar.Action
          onPress={() => navigate("Notifications")}
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
          onPress={() => navigate("Account")}
          style={{ marginRight: 15 }}
          icon={({ size }) => <Avatar.Text label="FT" size={size + 10} />}
        />
      </Appbar.Header>
    );
  }
}

export default withNavigation(MainHeader);
