import React from 'react';
import {Cards,Chart,CountryPicker,Cases} from './Components'  //we can do like this if we add index file in components
import styles from './App.module.css';
import {fetchData} from './api'; //dont need to specify index ,it automatically searches for index file whenever there is index file.  
import image from './images/image.png';

class App extends React.Component {

state={
  data:{},
  countrypicked:'',
}

async componentDidMount(){
  const fetchedData= await fetchData();
  this.setState({data : fetchedData});
}

handleCountryChange = async (country) => {   //the country slelcted in list, that country data is displayed
  const fetchedData= await fetchData(country);  //fetch data of that specific country
  console.log(fetchedData);
  this.setState({data : fetchedData, countrypicked : country});
}

render(){
  const {data,countrypicked}=this.state;
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="COVID-19" />
             <Cards data={data}/>
             <CountryPicker handleCountryChange={this.handleCountryChange}/>
             <Chart data={data} country={countrypicked}/>
             <Cases/>
    </div>
  );
}
}
export default App;
