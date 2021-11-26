d3.csv('data.csv').then((loadedData) => {
  let data = [];
  let labels = [];

  for (let i = 0; i < loadedData.length; i++) {
    console.log(loadedData[i]);
  }
});
