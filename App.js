
const container = d3.select('.container')

// Title
container.append('h2')
    .attr('id', 'title')
    .text("Monthly Global Land-Surface Temperature")

// Description
container.append('p')
    .attr('id', 'description')
    .text("1753 - 2015: base temperature 8.66℃")