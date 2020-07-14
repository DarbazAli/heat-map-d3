
const container = d3.select('.container')

// Title
container.append('h2')
    .attr('id', 'title')
    .text("Monthly Global Land-Surface Temperature")

// Description
container.append('p')
    .attr('id', 'description')
    .text("1753 - 2015: base temperature 8.66℃")



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