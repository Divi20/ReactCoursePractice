import './Chart.css'
import ChartBar from './ChartBar'
function Chart(props) {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);

    const totalMaximum = Math.max(...dataPointValues); // to find max element of array
return <div className="chart">
{props.dataPoints.map((dataPoint, i) =>{
    return <ChartBar 
    key = {i}
    value = {dataPoint.value}
    maxValue ={totalMaximum}
    label = {dataPoint.label}/>

})}
</div>
}

export default Chart;