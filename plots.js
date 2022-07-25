// Take the ID number and provide as dropdown menu options with init func
function init() {
  var selector = d3.select("#selDataset");

  d3.json("samples.json").then((data) => {
    console.log(data);
    var sampleNames = data.names;
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });
})}

init();

// call the option change function with html
function optionChanged(newSample) {
  console.log(newSample);
  buildMetadata(newSample);
  buildCharts(newSample);
}

// Metadata function within html.  Set array equal to [0] since results are returned in array
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    var resultsArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultsArray[0];
    var PANEL = d3.select("#sample-metadata");

    //Before another ID gets call, must clear current content
    PANEL.html(""); 
    PANEL.append("h6").text(`ID: ${result.id}`);
    PANEL.append("h6").text(`Ethnicity: ${result.ethnicity}`);
    PANEL.append("h6").text(`Gender: ${result.gender}`);
    PANEL.append("h6").text(`Age: ${result.age}`);
    PANEL.append("h6").text(`Location: ${result.location}`);
    PANEL.append("h6").text(`BBtype: ${result.bbtype}`);
    PANEL.append("h6").text(`Washing/week: ${result.wfreq}`);
  });
}
