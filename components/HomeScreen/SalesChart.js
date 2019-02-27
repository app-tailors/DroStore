import React, { Component } from "react";
import { Icon } from "expo";
import { Card, IconButton } from "react-native-paper";
import { AreaChart, XAxis } from "react-native-svg-charts";
import * as shape from "d3-shape";

import Colors from "../../constants/Colors";
import { Months } from "../../i18n";
const axesSvg = { fontSize: 10, fill: "#fff", fontFamily: "font" };

class SalesChart extends Component {
  render() {
    const { chartConfiguration } = this.props;
    return (
      <Card>
        <Card.Title
          left={props => (
            <IconButton
              {...props}
              size={30}
              color={Colors.primary}
              icon={({ color, size }) => (
                <Icon.Feather name="shopping-bag" size={size} color={color} />
              )}
            />
          )}
          title="Sales"
          subtitle="sales every month"
        />
        <AreaChart
          data={chartConfiguration}
          style={{ height: 60 }}
          contentInset={{ top: 10, bottom: 10 }}
          curve={shape.curveNatural}
          svg={{
            stroke: Colors.primary,
            fill: Colors.primary,
            strokeWidth: 2
          }}
        />
        <XAxis
          style={{
            height: 30,
            paddingVertical: 10,
            backgroundColor: Colors.primary,
            overflow: "hidden",
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5
          }}
          data={chartConfiguration}
          formatLabel={(value, index) => Months.en[index]}
          contentInset={{ left: 10, right: 10 }}
          svg={axesSvg}
        />
      </Card>
    );
  }
}

export default SalesChart;
