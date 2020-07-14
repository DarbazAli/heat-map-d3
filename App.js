
const container = d3.select('.container')

// Title
container.append('h2')
    .attr('id', 'title')
    .text("Monthly Global Land-Surface Temperature")

// Description
container.append('p')
    .attr('id', 'description')
    .text("1753 - 2015: base temperature 8.66℃")

// margins
const margin = {
    top: 20,
    left: 20,
    bottom: 20,
    right: 50
}

// dimentions
const width = 800 - margin.left - margin.right;
const height = 400 - margin.top - margin.bottom;



// create canvas
// canvas is the main container for all svg elements
const canvas = container.append('svg')
    .attr('viewBox', `0 0 ${width + margin.left + margin.right} ${hight + margin.top + margin.bottom}`);


// Create Group Container
const group = canvas.append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`)




const drawHeatMap = data => {

    // {
    //     "baseTemperature": 8.66,
    //     "monthlyVariance": [
    //       {
    //         "year": 1753,
    //         "month": 1,
    //         "variance": -1.366
    //       },
    //       {
    //         "year": 1753,
    //         "month": 2,
    //         "variance": -2.223
    //       },
    //     }





}



const api_url = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json";


// fetch data 
fetch( api_url )
.then( res => res.json())
.then( json => {
    const data = json["monthlyVariance"];

    drawHeatMap(data)
})