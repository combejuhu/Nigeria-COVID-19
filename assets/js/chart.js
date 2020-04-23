anychart.onDocumentReady(function () {

    // create a data set
    var data = anychart.data.set([
      ["City 1", 1],
      ["City 2", 2],
      ["City 3", 3],
      ["City 4", 4],
      ["City 5", 5],
      ["City 6", 6],
      ["City 7", 7],
      ["City 8", 8],
      ["City 9", 9],
      ["City 10", 10],
      ["City 11", 11],
      ["City 12", 12],
      ["City 13", 13],
      ["City 14", 14],
      ["City 15", 15],
      ["City 16", 16],
      ["City 17", 27],
      ["City 18", 32],
      ["City 19", 44],
      ["City 20", 51],
      ["City 21", 53],
      ["City 22", 65],
      ["City 23", 87],
      ["City 24", 96],
      ["City 25", 120]
    ]);

    // create a chart
    var chart = anychart.column();

    // create a bar series and set the data
    var series = chart.column(data);

    // set the chart title
    chart.title("Nigeria - City's");

    // set the titles of the axes
    chart.xAxis().title("Number of infected");

    /* chart.xAxis().labels().rotation(-90) */
    var xAxis = chart.xAxis();
    var yAxis = chart.yAxis();
    yAxis.title("Number of infected");

    /* chart.xAxis().labels().rotation(-90) */
    xAxis.overlapMode("allowOverlap");

    // set the container id
    chart.container("chartContainer");

    // initiate drawing the chart
    chart.draw();
});