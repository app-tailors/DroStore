import React, { Component } from "react";
import { Icon } from "expo";
import { Animated } from "react-native";
import * as Animatable from "react-native-animatable";
import { List, Text, IconButton } from "react-native-paper";

const { EvilIcons } = Icon;

class Todo extends Component {
  state = {
    opacity: new Animated.Value(0)
  };
  componentDidMount() {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 1000
    }).start();

    // const { title, description, _key, deleteTodo } = this.props;
    // console.log({ title, description, _key, deleteTodo });
  }
  componentWillUnmount() {
    Animated.timing(this.state.opacity, {
      toValue: 0,
      duration: 1000
    }).start();

    // const { title, description, _key, deleteTodo } = this.props;
    // console.log({ title, description, _key, deleteTodo });
  }

  render() {
    const { opacity } = this.state;
    const { title, description, _key, deleteTodo } = this.props;
    return (
      <Animatable.View animation="bounceInUp">
        <List.Item
          style={{
            borderBottomColor: "#eee",
            borderBottomWidth: 1,
            borderStyle: "solid"
          }}
          title={title}
          description={description}
          left={props => (
            <IconButton
              {...props}
              size={24}
              icon={({ size, color }) => (
                <EvilIcons name="star" size={size} color={color} />
              )}
            />
          )}
          right={props => (
            <IconButton
              {...props}
              onPress={() => deleteTodo(_key)}
              color="red"
              size={30}
              icon={({ size, color }) => (
                <EvilIcons name="trash" size={size} color={color} />
              )}
            />
          )}
        />
      </Animatable.View>
    );
  }
}

export default Todo;
