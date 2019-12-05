import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';
import {data} from '../Component/ChartData';
import {chartConfigue} from '../Component/ChartData';

const LinChart = () => {
  const {chartStyle} = container;
  return (
    <View>
      <LineChart
        data={data}
        width={Dimensions.get('window').width}
        height={310}
        chartConfig={chartConfigue}
        style={chartStyle}
        bezier
      />
    </View>
  );
};

export default LinChart;
const container = StyleSheet.create({
  chartStyle: {
    margin: 10,
    borderRadius: 5,
  },
});
