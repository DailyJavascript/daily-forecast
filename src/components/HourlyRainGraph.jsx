import React from 'react';
import { displayHour } from '../utils';

function responsivefy(svg) {
  // get container + svg aspect ratio
  var container = window.d3.select(svg.node().parentNode),
      width = parseInt(svg.style("width")),
      height = parseInt(svg.style("height")),
      aspect = width / height;

  // add viewBox and preserveAspectRatio properties,
  // and call resize so that svg resizes on inital page load
  svg.attr("viewBox", "0 0 " + width + " " + height)
      .attr("preserveAspectRatio", "xMinYMid")
      .call(resize);

  // to register multiple listeners for same event type,
  // you need to add namespace, i.e., 'click.foo'
  // necessary if you call invoke this function for multiple svgs
  // api docs: https://github.com/mbostock/d3/wiki/Selections#on
  window.d3.select(window).on("resize." + container.attr("id"), resize);

  // get width of container and resize svg to fit it
  function resize() {
      var targetWidth = parseInt(container.style("width"));
      svg.attr("width", targetWidth);
      svg.attr("height", Math.round(targetWidth / aspect));
  }
}


class HourlyRainGraph extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    var margin = { top: 10, right: 10, bottom: 30, left: 40 };
    var width = 800 - margin.left - margin.right;
    var height = 565 - margin.top - margin.bottom;
    const { data } = this.props;
    var dateData = data.slice(0, 24).map( (d) => {
      return new Date(d.time * 1000);
    }); 
  
    data.slice(0, 24).forEach( (d) => {
      d.time = new Date(d.time * 1000);
      d.precipProbability = d.precipProbability;
    });
  
    var yScale = window.d3.scaleLinear()
      .domain([0, 1])
      .range([height, 0]);

    var xScale = window.d3.scaleTime()
      .domain(window.d3.extent(dateData))
      .range([0, width])

    var yAxis = window.d3.axisLeft(yScale).ticks(4, '%');
    var xAxis = window.d3.axisBottom(xScale).ticks(window.d3.timeHour.every(1));

    var svg = window.d3
      .select('.chart')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .call(responsivefy)
      .append('g')
        .attr('transform', `translate(${40}, ${20})`)

    svg.append('rect')
      .attr('width', width)
      .attr('height', height)
      .style('fill', 'lightblue')
      .style('stroke', 'green')
    svg.call(yAxis)

    svg.append('g').attr('transform', `translate(0, ${height})`).call(xAxis)
    var area = window.d3.area()
      .x(d => xScale(d.time))
      .y0(yScale(yScale.domain()[0]))
      .y1(d => yScale(d.precipProbability))

    svg.selectAll('.area')
      .data(data)
      .enter()
      .append('path')
      .attr('class', 'area')
      .attr('d', area(data))
      .style('stroke', (d, i) => ['#FF9900', '#3369E8'][i])
      .style('stroke-width', 2)
      .style('fill', (d, i) => ['#FF9900', '#3369E8'][i])
      .style('fill-opacity', 0.5);
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {    
    return (
      <div className="chart">
      </div>
    )
  }

} 
export default HourlyRainGraph;
