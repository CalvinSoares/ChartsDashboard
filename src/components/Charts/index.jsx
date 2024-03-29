import ReactEcharts from "echarts-for-react"; 

function SalesChart() {  
const option = {

  tooltip: {
    trigger: 'item'
  },
  legend: {
    left: '70%',
    top: '35%',
    orient: "vertical",
    itemHeight: 16,
    itemWidth: 20,
    textStyle: {
      color: "rgba(255, 255, 255, 1)",
      fontSize: 14
    },
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 10,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 5000, name: 'cartão' },
        { value: 3000, name: 'pix' },
        { value: 2000, name: 'boleto' },
      ],
      height: "90%",
      width: "75%",
      top: "4%"
    }
  ]
}; 
return <ReactEcharts option={option} className="w-[300px] my-12 "/>;
} 
export default SalesChart;