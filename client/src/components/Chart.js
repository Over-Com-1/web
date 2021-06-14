import React, {component} from 'react';
import Chart from "react-google-charts";


function charts(){
    return(
        <>
        <h2 style={{marginLeft:'500px'}}>Number of crowds in NBA</h2>

<Chart
    style={{margin:'0 auto'}}
  width={'900px'}
  height={'600px'}
  chartType="LineChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['x', '만명'],
    [2015, 2192],
    [2016, 2197],
    [2017, 2199],
    [2018, 2212],
    
  ]}
  options={{
    hAxis: {
      title: '년도',
    },
    vAxis: {
      title: '관중 수',
    },
  }}
  rootProps={{ 'data-testid': '1' }}
/>
</>
    )
}
export default charts