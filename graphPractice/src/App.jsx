import { useState } from 'react'
import './App.css'
import Chart from 'react-apexcharts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   {/*Bar Graph*/ }   
   <Chart type='bar'
       width={900}
       height={500}
       series={[
        {
        name:"Social Media Subscriber",
        data:[6578,6787,2893,5678,3298,9843]
      }
       ]}

       options={{
       title:{text:"Bar Chart for practice",
       style:{fontSize:30}},colors:['#f90000','#000000'],theme:{mode:'light'},
      subtitle:{
        text:"This is barchart graph"
      },
       xaxis: {
        type: 'category', 
        tickPlacement: "on", 
        categories: ["Facebook", "Twitter", "Instagram", "Youtube", "Linkedin", "Github"],
        title: {
            text: "Social Media User",
            style: {
                color: "#f90000",
                fontSize: '30px' 
            }
        }
    }
    , 
      yaxis:{
        labels:{
          formatter:(val)=>{return `$${val}`},
          style:{colors:"#f90000",fontSize:'15'}
        },
        title:{
          text:"User in K",
          style:{fontSize:"15",color:"#f90000"}
         }
       },
      
       dataLabels:{
        formatter:(val)=>{return `$${val}`},
        style:{colors:["#ffffff"],
          fontSize:'15'
        }
       }
       
       }}
      >
   </Chart>
    </>
  )
}

export default App
