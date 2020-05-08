import React from 'react'
import { withFauxDOM } from 'react-faux-dom'
import * as d3 from 'd3'
interface Props {
  connectFauxDOM: any
  chart?: any
  dataSet?: any
}
interface State {
}
class MyChart extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      // faux: this.props.connectFauxDOM('svg', 'chart'),
    }
  }

  componentDidUpdate() {
    this.updateChart()
    console.log(this.props.dataSet)
  }

  updateChart() {
    const faux = this.props.connectFauxDOM('svg', 'chart')
    const svg = d3.select(faux)
    svg
      .selectAll('rect')
      .data(this.props.dataSet)
      .enter()
      .append('rect')
      .attr('width', 40)
      .attr('height', (d:any) => d.high * 10000)
      .attr('fill', 'red')
      .attr('x', (d, i) => 40 * i + i * 20)
    
  }

  render() {
    return (
      <div>
        <h2>This is my chart</h2>
        <div className='chart'>{this.props.chart}</div>
      </div>
    )
  }
}

export default withFauxDOM(MyChart)
