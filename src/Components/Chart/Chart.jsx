import React,{useState,useEffect} from 'react'
import {fetchDailyData} from '../../api'
import {Line , Bar} from 'react-chartjs-2'
import styles from './Chart.module.css';
 
function Chart({ data: { confirmed, recovered, deaths }, country }) {
    const [dailyData , setDailyData] = useState([]); //global data

    useEffect(()=>{
        const fetchApi = async () =>{
           setDailyData(await fetchDailyData());
        }
        fetchApi();
    },[])
    
    const barChart = (
        confirmed ? (
          <Bar
            data={{
              labels: ['Infected', 'Recovered', 'Deaths'],
              datasets: [
                {
                  label: 'People',
                  backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                  data: [confirmed.value, recovered.value, deaths.value],
                },
              ],
            }}
            options={{
              legend: { display: false },
              title: { display: true, text: 'Current state in '+country },
            }}
          />
        ) : null
      );

    const lineChart=(
        dailyData.length!=0 ? (        //async await takes time so if data is loaded only shoe chart else null;
          <Line  
            data={{
                labels: dailyData.map( ({date}) => date),      // ?? map over all dates in dailyData
                datasets:  [{
                   data: dailyData.map( ({confirmed}) => confirmed),
                   label:'Infected',
                   borderColor:'#3333ff',
                   fill:"true",
                },{
                    data: dailyData.map( ({deaths}) => deaths),
                   label:'Deaths',
                   borderColor:'red',
                   backgroundColor:'rgba(255,0,0,0.5)',
                   fill:"true",
                }],
            }}
          />)
           : null
       );

    return (
        <div className={styles.container}>
             {country ? barChart :lineChart }
        </div>
    )
}

export default Chart
