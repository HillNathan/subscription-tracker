import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Cell,
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/3Leoa7f4/';

  render() {
    return (
      <PieChart width={400} height={200} onMouseEnter={this.onPieEnter}>
        <Pie
          data={this.props.data}
          cx={175}
          cy={200}
          startAngle={180}
          endAngle={0}
          innerRadius={90}
          outerRadius={150}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="cost"
        >
          {
            this.props.data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart>
    );
  }
}
