import React from 'react'
import { withFauxDOM } from 'react-faux-dom'
import * as d3 from 'd3'
interface Props {
  connectFauxDOM: any,
  chart?: any
}
class MyChart extends React.Component<Props> {

  componentDidMount() {
    const faux = this.props.connectFauxDOM('div', 'chart')

    d3.select(faux)
      .append('svg')
      .attr('viewBox', '0 0 300 300')
  }

  render() {
    return (
      <div>
        <h2>This is my chart</h2>
        <div className="chart">
          {this.props.chart}
        </div>
      </div>
    )
  }
}

export default withFauxDOM(MyChart)