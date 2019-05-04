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
  TouchableRipple
} from "react-native-paper";
import MainHeader from "../components/MainHeader";
import Colors from "../constants/Colors";

const { Entypo, AntDesign } = Icon;
const WINDOW_WIDTH = Dimensions.get("window").width;

export default class AddArticle extends React.Component {
  static navigationOptions = {
    header: props => {
      return null; //<MainHeader hasBack title="Add Articles" />;
    }
  };

  state = {
    hasPermission: false,
    showCamera: true,
    flashMode: Camera.Constants.FlashMode.off,
    firstImages: [],
    cameraType: Camera.Constants.Type.back
  };

  render() {
    const { showCamera, hasPermission } = this.state;
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {hasPermission ? (
          showCamera && this._displayCamera()
        ) : (
          <Button onPress={this._askPermissions}>Accept the permissions</Button>
        )}
      </View>
    );
  }

  async componentDidMount() {
    this._askPermissions();
  }

  _askPermissions = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    if (status === "granted") {
      const cameraRollState = await Permissions.askAsync(
        Permissions.CAMERA_ROLL
      );
      if (cameraRollState.status === "granted") {
        this.setState({ hasPermission: true }, async () => {
          const firstImages = await this._getMediaImages();

          this.setState({ firstImages });
        });
      }
    }
  };

  _getMediaImages = async () => {
    const images = await MediaLibrary.getAssetsAsync({
      first: 10,
      mediaType: MediaLibrary.MediaType.photo
    });

    return images.assets.map(image => ({ ...image, key: image.id }));
  };

  _takeAPicture = async () => {};
  _switchFlash = async () => {
    const { FlashMode } = Camera.Constants;
    this.setState({
      flashMode:
        this.state.flashMode === FlashMode.off ? FlashMode.torch : FlashMode.off
    });
  };
  _switchCamType = async () => {
    const { Type, FlashMode } = Camera.Constants;
    this.setState({
      cameraType: this.state.cameraType === Type.back ? Type.front : Type.back,
      flashMode: FlashMode.off
    });
  };
  _openLibrary = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [1, 1],
      quality: 0.7,
      allowsEditing: true
    });

    console.log(result);
  };

  _displayCamera = () => {
    const { camera, cameraBottom, cameraBottomActions } = style;
    const { firstImages, flashMode, cameraType } = this.state;
    const { FlashMode } = Camera.Constants;

    return (
      <View style={camera}>
        <View>
          <IconButton
            onPress={() => this.props.navigation.goBack()}
            icon="close"
            size={32}
            color="#ededed"
          />
        </View>
        <Camera
          style={{ width: WINDOW_WIDTH, height: WINDOW_WIDTH }}
          ratio="1:1"
          type={cameraType}
          flashMode={flashMode}
          ref={cam => (this.cam = cam)}
        />
        <View style={cameraBottom}>
          <View style={cameraBottomActions}>
            <IconButton
              color={flashMode === FlashMode.torch ? Colors.red : "white"}
              onPress={this._switchFlash}
              size={25}
              icon={({ size, color }) => (
                <Entypo name="flash" color={color} size={size} />
              )}
            />
            <IconButton
              onPress={this._takeAPicture}
              style={{
                backgroundColor: "white",
                width: 60,
                height: 60,
                borderRadius: 30
              }}
              color="black"
              size={20}
              icon="photo-camera"
              // icon={({ size, color }) => (
              //   <Entypo name="circle" color={color} size={size} />
              // )}
            />
            <IconButton
              color="white"
              onPress={this._switchCamType}
              size={25}
              icon={({ size, color }) => (
                <AntDesign name="sync" color={color} size={size} />
              )}
            />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <IconButton
              color="white"
              onPress={this._openLibrary}
              size={25}
              icon={({ size, color }) => (
                <Entypo name="images" color={color} size={size} />
              )}
            />
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={firstImages}
              renderItem={({ item }) => (
                <TouchableRipple
                  onPress={() => {
                    console.log(item);
                  }}
                >
                  <Image
                    source={{ uri: item.uri }}
                    resizeMode="cover"
                    style={{ width: 80, height: 80, marginRight: 1 }}
                  />
                </TouchableRipple>
              )}
            />
          </View>
        </View>
      </View>
    );
  };
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
