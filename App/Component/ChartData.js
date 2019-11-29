export const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 2) => `rgba(255, 0, 0, ${opacity})`, // for changing graph color
      strokeWidth: 0.5, // optional
    },
  ],
};

export const chartConfigue = {
  backgroundGradientFromOpacity: '#add8e6',
  backgroundGradientFrom: '#20b2aa', //Defines the first color in the linear gradient of a chart's background
  backgroundGradientTo: '#000080', //Defines the second color in the linear gradient of a chart
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, //changing text color
};



