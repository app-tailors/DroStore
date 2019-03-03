import React from "react";
import { ScrollView } from "react-native";
import {
  Text,
  TextInput,
  Headline,
  Chip,
  Caption,
  Surface,
  Button
} from "react-native-paper";
import SectionedMultiSelect from "react-native-sectioned-multi-select";

import Colors from "../constants/Colors";

export default class AddCategoryScreen extends React.Component {
  static navigationOptions = {
    title: "Add Category",
    headerTitleStyle: { fontFamily: "regular" },
    headerTintColor: Colors.text
  };

  state = {
    selectedItems: [],
    items: [
      {
        name: "Apple",
        id: 10,
        icon: "info"
      },
      {
        name: "Strawberry",
        id: 17
      },
      {
        name: "Pineapple",
        id: 13
      },
      {
        name: "Banana",
        id: 14
      },
      {
        name: "Watermelon",
        id: 15
      },
      {
        name: "Kiwi fruit",
        id: 16
      }
    ]
  };

  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });
  };

  render() {
    const { items, selectedItems } = this.state;

    return (
      <ScrollView>
        <Surface
          style={{ margin: 10, padding: 10, elevation: 2, borderRadius: 5 }}
        >
          <Caption style={{ paddingHorizontal: 10 }}>Select a category</Caption>
          <SectionedMultiSelect
            selectText="Select categories"
            onSelected
            showCancelButton
            showDropDowns={false}
            items={items}
            selectedItems={selectedItems}
            uniqueKey="id"
            onSelectedItemsChange={this.onSelectedItemsChange}
            styles={{
              selectToggle: { paddingHorizontal: 10 },
              button: { backgroundColor: Colors.primary },
              chipText: { fontFamily: "regular" },
              searchTextInput: { fontFamily: "regular" },
              confirmText: { fontFamily: "regular" },
              scrollView: { paddingHorizontal: 0 },
              itemText: {
                fontFamily: "regular",
                paddingVertical: 5,
                fontSize: 16
              },
              item: {
                paddingHorizontal: 10
              },
              chipText: { color: "white" },
              chipContainer: {
                backgroundColor: Colors.text,
                marginLeft: 0,
                marginTop: 5,
                marginRight: 10
              },
              chipsWrapper: { paddingHorizontal: 10 }
            }}
          />
        </Surface>

        <Button
          contentStyle={{ padding: 10 }}
          style={{ marginHorizontal: 10 }}
          onPress={() => alert("ok")}
          mode="contained"
        >
          Save
        </Button>
      </ScrollView>
    );
  }
}
