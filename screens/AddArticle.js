import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  Dimensions
} from "react-native";
import {
  Camera,
  Permissions,
  Constants,
  Icon,
  MediaLibrary,
  ImagePicker
} from "expo";
import {
  Text,
  IconButton,
  Surface,
  Button,
  TouchableRipple,
  TextInput,
  HelperText
} from "react-native-paper";
import MainHeader from "../components/MainHeader";
import Colors from "../constants/Colors";

const { Entypo, AntDesign } = Icon;
const WINDOW_WIDTH = Dimensions.get("window").width;

export default class AddArticle extends React.Component {
  static navigationOptions = {
    header: props => {
      return <MainHeader hasBack title="Add Articles" />;
    }
  };

  state = {
    category: null,
    form: {
      name: {
        value: "",
        placeholder: "",
        message: ""
      },
      price: {
        value: 0,
        keyboardType: "number-pad",
        placeholder: "",
        message: ""
      },
      quantity: {
        value: 0,
        keyboardType: "number-pad",
        placeholder: "",
        message: ""
      },
      category: {
        value: "ici",
        type: "picker",
        data: ["ici", "labas", "tjrs"],
        placeholder: "",
        message: ""
      }
    }
  };

  displayForm = () => {
    const { form } = this.state;
  };

  render() {
    return (
      <ScrollView style={{ padding: 10 }}>
        <TextInput
          inlineImageLeft="search_icon"
          style={{ backgroundColor: "#f5f5f5" }}
          label="Name"
          placeholder="Enter the name of the product"
        />
        <HelperText type="error">Email address is invalid!</HelperText>
      </ScrollView>
    );
  }
}

const style = {
  camera: {
    ...StyleSheet.absoluteFill,
    paddingTop: Constants.statusBarHeight,
    justifyContent: "space-between",
    backgroundColor: "black"
  },
  cameraBottom: { paddingBottom: 5 },
  cameraBottomActions: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 10
  }
};
