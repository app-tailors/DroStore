import React, { Component } from "react";
import { View, StyleSheet, ScrollView, FlatList } from "react-native";
import { Icon } from "expo";
import {
  Text,
  IconButton,
  Card,
  Subheading,
  Surface,
  Button
} from "react-native-paper";
import { AreaChart, XAxis } from "react-native-svg-charts";
import * as shape from "d3-shape";

import Colors from "../constants/Colors";
import { Months } from "../i18n";
import MainHeader from "../components/MainHeader";
import SalesChart from "../components/HomeScreen/SalesChart";

const chartConfiguration = [50, 30, 40, 95, 85, 91];

class HomeScreen extends Component {
  static navigationOptions = {
    header: props => {
      return <MainHeader title="Dashboard" />;
    }
  };

  state = {
    chartConfiguration,
    articles: [
      {
        key: "shoes",
        icon: "flower",
        name: "Air Max Nike 2018",
        category: "Shoes",
        img: require("../assets/images/shoes.jpeg")
      },
      {
        key: "food",
        icon: "drink",
        name: "Goffres a la francaise",
        category: "food",
        img: require("../assets/images/food.jpeg")
      }
    ],
    categories: [
      {
        key: "Computer",
        icon: "app-store",
        name: "Computers"
      },
      {
        key: "Food",
        icon: "drink",
        name: "Food"
      },
      {
        key: "Game",
        icon: "game-controller",
        name: "Game"
      },
      {
        key: "Courses",
        icon: "graduation-cap",
        name: "Courses"
      },
      {
        key: "Printer",
        icon: "print",
        name: "Printer"
      }
    ]
  };

  render() {
    const { screen } = styles;

    const { chartConfiguration, categories, articles } = this.state;
    return (
      <View style={screen}>
        <ScrollView style={{ paddingHorizontal: 20 }}>
          <Subheading style={{ paddingVertical: 10 }}>Sales Summary</Subheading>
          <SalesChart chartConfiguration={chartConfiguration} />
          <Subheading style={{ paddingTop: 10 }}>Categories</Subheading>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={[{ key: "addCategory" }, ...categories]}
            renderItem={({ item: { name, icon }, index }) =>
              index === 0 ? (
                <View
                  style={{
                    padding: 10,
                    width: 70,
                    height: 130,
                    marginRight: 20,
                    borderRadius: 5,
                    marginVertical: 10,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <IconButton
                    icon="add"
                    color={Colors.primary}
                    style={{
                      width: 50,
                      height: 50,
                      borderColor: Colors.primary,
                      borderStyle: "solid",
                      borderWidth: 1
                    }}
                  />
                </View>
              ) : (
                <Surface
                  style={{
                    padding: 10,
                    elevation: 1,
                    width: 130,
                    height: 130,
                    marginRight: 20,
                    borderRadius: 5,
                    marginVertical: 10,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "rgba(81, 72, 255, 0.1)",
                      borderRadius: 10,
                      padding: 15,
                      width: 50,
                      height: 50
                    }}
                  >
                    <Icon.Entypo name={icon} size={20} color={Colors.primary} />
                  </View>
                  <Text style={{ marginTop: 10 }}>{name}</Text>
                </Surface>
              )
            }
          />
          <Subheading style={{ paddingVertical: 10 }}>
            Recents Articles
          </Subheading>
          {articles.length > 0 ? (
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={articles}
              renderItem={({ item: { name, icon, category, img } }) => (
                <Card style={{ width: 270, marginRight: 10, marginBottom: 10 }}>
                  <Card.Cover
                    source={img}
                    resizeMode="cover"
                    width={270}
                    height={270}
                  />
                  <Card.Title
                    titleStyle={{ fontFamily: "regular" }}
                    left={() => (
                      <View
                        style={{
                          backgroundColor: "rgba(81, 72, 255, 0.1)",
                          borderRadius: 10,
                          padding: 15,
                          width: 50,
                          height: 50
                        }}
                      >
                        <Icon.Entypo
                          name={icon}
                          size={20}
                          color={Colors.primary}
                        />
                      </View>
                    )}
                    title={name}
                    subtitle={category}
                  />
                </Card>
              )}
            />
          ) : (
            <Button
              mode="outlined"
              style={{
                flex: 1,
                borderColor: Colors.primary,
                borderStyle: "dashed"
              }}
              onPress={() => alert("ok")}
              icon="add"
            >
              Add an article
            </Button>
          )}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.background,
    flex: 1
  }
});

export default HomeScreen;
