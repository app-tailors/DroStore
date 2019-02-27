import React, { Component, Fragment } from "react";
import { StyleSheet, View, KeyboardAvoidingView } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { Icon } from "expo";
import {
  Appbar,
  Badge,
  Avatar,
  IconButton,
  DataTable,
  Caption,
  FAB,
  Subheading,
  Portal,
  Text,
  Searchbar,
  Drawer
} from "react-native-paper";

import Colors from "../constants/Colors";
import MainHeader from "../components/MainHeader";

const { Feather } = Icon;

class ArticlesScreen extends Component {
  static navigationOptions = {
    header: props => {
      return <MainHeader title="Articles" />;
    }
  };

  state = {
    open: false,
    firstQuery: "",
    openedCell: null,
    active: "first",
    listViewData: [
      {
        key: "shoes",
        icon: "flower",
        name: "Air Max Nike 2018",
        price: 12,
        quantity: 2,
        category: "Shoes",
        img: require("../assets/images/shoes.jpeg")
      },
      {
        key: "food",
        icon: "drink",
        name: "Goffres a la francaise",
        price: 12000,
        quantity: 5,
        category: "Food",
        img: require("../assets/images/food.jpeg")
      }
    ]
  };

  rowOpenHandler = e => {
    this.setState({ openedCell: e });
  };
  rowCloseHandler = e => {
    this.setState({ openedCell: null });
  };

  componentDidMount() {
    // this.props.navigation.openDrawer();
  }

  render() {
    const { screen, btnStyle } = styles;
    const { openedCell, open, listViewData, firstQuery, active } = this.state;

    return (
      <View style={screen}>
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <Searchbar
            placeholder="Search"
            onChangeText={query => {
              this.setState({ firstQuery: query });
            }}
            value={firstQuery}
          />
          <DataTable>
            <DataTable.Header>
              <DataTable.Title sortDirection="ascending">Name</DataTable.Title>
              <DataTable.Title numeric>Category</DataTable.Title>
              <DataTable.Title numeric>Price</DataTable.Title>
              <DataTable.Title numeric>Quantity</DataTable.Title>
            </DataTable.Header>
            <SwipeListView
              useFlatList
              onRowOpen={this.rowOpenHandler}
              onRowClose={this.rowCloseHandler}
              data={listViewData}
              renderItem={({ item }, rowMap) => {
                const openStyle =
                  item.key === openedCell
                    ? {
                        backgroundColor: "white",
                        shadowColor: "black",
                        shadowOffset: { width: 0, height: 10 },
                        shadowOpacity: 0.2,
                        shadowRadius: 10,
                        zIndex: 10
                      }
                    : {};

                return (
                  <DataTable.Row
                    style={{
                      backgroundColor: Colors.background,
                      height: 50,
                      ...openStyle
                    }}
                  >
                    <DataTable.Cell>{item.name}</DataTable.Cell>
                    <DataTable.Cell numeric>{item.category}</DataTable.Cell>
                    <DataTable.Cell numeric>{item.price}</DataTable.Cell>
                    <DataTable.Cell numeric>{item.quantity}</DataTable.Cell>
                  </DataTable.Row>
                );
              }}
              renderHiddenItem={(data, rowMap) => (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    backgroundColor: "white",
                    borderBottomColor: "#ebebeb",
                    borderBottomWidth: 1,
                    borderStyle: "solid"
                  }}
                >
                  <IconButton
                    size={20}
                    icon={({ size, color }) => (
                      <Feather name="eye" size={size} color={color} />
                    )}
                    color={Colors.success}
                    style={btnStyle}
                  />
                  <View style={{ flexDirection: "row" }}>
                    <IconButton
                      size={20}
                      icon={({ size, color }) => (
                        <Feather name="edit-2" size={size} color={color} />
                      )}
                      color={Colors.primary}
                      style={btnStyle}
                    />
                    <IconButton
                      size={20}
                      icon={({ size, color }) => (
                        <Feather name="trash-2" size={size} color={color} />
                      )}
                      color={Colors.red}
                      style={btnStyle}
                    />
                  </View>
                </View>
              )}
              leftOpenValue={50}
              rightOpenValue={-100}
            />

            {/* change table pages */}
            <DataTable.Pagination
              page={1}
              numberOfPages={3}
              onPageChange={page => {
                console.log(page);
              }}
              label="1-2 of 6"
            />
          </DataTable>

          {/* add element */}
          <FAB.Group
            fabStyle={{ backgroundColor: Colors.primary }}
            open={open}
            icon={open ? "close" : "add"}
            actions={[
              {
                icon: "layers",
                label: "Add Article",
                onPress: () => console.log("Pressed Articles")
              },
              {
                icon: "folder",
                label: "Add Category",
                onPress: () => console.log("Pressed Category")
              },
              {
                icon: "today",
                label: "Create Order",
                onPress: () => console.log("Pressed Orders")
              }
            ]}
            onStateChange={data => this.setState({ open: data.open })}
            onPress={() => {
              if (open) {
                // do something if the speed dial is open
              }
            }}
          />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.background,
    flex: 1
  },
  btnStyle: {
    margin: 0,
    height: 50,
    width: 50,
    borderRadius: 0
  }
});

export default ArticlesScreen;
