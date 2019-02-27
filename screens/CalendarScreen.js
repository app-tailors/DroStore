import React, { Component, Fragment } from "react";
import { StyleSheet, ScrollView, View, SectionList } from "react-native";
import { Icon } from "expo";
import CalendarPicker from "react-native-calendar-picker";

const { Feather } = Icon;

import Colors from "../constants/Colors";
import MainHeader from "../components/MainHeader";
import {
  Surface,
  Text,
  Headline,
  Caption,
  Title,
  Card,
  IconButton
} from "react-native-paper";

class CalendarScreen extends Component {
  static navigationOptions = {
    header: props => {
      return <MainHeader />;
    }
  };

  render() {
    const { screen, sectionHeader, selectedDateStyle } = styles;

    return (
      <View style={screen}>
        <Surface
          style={{
            elevation: 10,
            zIndex: 10,
            paddingBottom: 10
          }}
        >
          <CalendarPicker
            allowRangeSelection
            selectedDayTextColor="white"
            selectedRangeStyle={selectedDateStyle}
            selectedDayStyle={selectedDateStyle}
            textStyle={{ color: Colors.text, fontFamily: "regular" }}
            todayBackgroundColor={Colors.text}
          />
        </Surface>

        <View style={{ flex: 1 }}>
          <SectionList
            showsVerticalScrollIndicator={false}
            sections={[
              { title: "Title1", data: ["Meeting with july", "item2"] },
              { title: "Title2", data: ["item3", "item4"] },
              { title: "Title3", data: ["item5", "item6"] }
            ]}
            renderItem={({ item }) => (
              <Card.Title
                style={{
                  backgroundColor: "#EFF5FF",
                  borderColor: "#d1e1fc",
                  borderWidth: 1,
                  borderStyle: "solid",
                  marginVertical: 10,
                  marginHorizontal: 20,
                  borderRadius: 10
                }}
                left={() => (
                  <Caption
                    style={{
                      fontFamily: "medium",
                      fontSize: 10,
                      color: "black"
                    }}
                  >
                    14:00
                  </Caption>
                )}
                titleStyle={{
                  color: Colors.primary,
                  fontSize: 14
                }}
                title={item}
                subtitle="Kyoto, JP"
                right={() => {
                  return (
                    <View style={{ flexDirection: "row" }}>
                      <IconButton
                        size={18}
                        icon={({ size, color }) => (
                          <Feather name="edit-2" size={size} color={color} />
                        )}
                        color={Colors.text}
                        style={{ margin: 0 }}
                      />
                      <IconButton
                        size={18}
                        icon={({ size, color }) => (
                          <Feather name="trash-2" size={size} color={color} />
                        )}
                        color={Colors.red}
                        style={{ margin: 0 }}
                      />
                    </View>
                  );
                }}
              />
            )}
            renderSectionHeader={({ item }) => (
              <View style={sectionHeader}>
                <Caption style={{ color: Colors.primary }}>
                  Monday 20 June 2018
                </Caption>
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.background,
    flex: 1
  },
  sectionHeader: {
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: Colors.background
  },
  selectedDateStyle: {
    backgroundColor: Colors.primary,
    shadowColor: Colors.primary,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 5
  }
});

export default CalendarScreen;
