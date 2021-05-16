import axios from 'axios';

const url='https://covid19.mathdro.id/api';

export const fetchData = async (country)=>{  //if we get country as parameter it fetches that countries data else it fetches global data

  let changeableURL=url;
  if(country){
    changeableURL='https://covid19.mathdro.id/api/countries/'+country;   //template literals is not working in this pc so i wrote like this
  }
try{
 // const result= await axios.get(url);
 const {data : {confirmed , recovered , deaths , lastUpdate} } = await axios.get(changeableURL);
 const modifiedData={
  confirmed ,
   recovered ,
    deaths , 
    lastUpdate,
 }
  return modifiedData;
}
catch(err){
    console.log(err);
}
}

export const fetchDailyData=async()=>{
  try{
    const {data}=await axios.get('https://covid19.mathdro.id/api/daily');

    const modifiedData=data.map((d)=> ({
      confirmed : d.confirmed.total,
      deaths : d.deaths.total,
      date : d.reportDate,
    })) ;

   // console.log(data);
    return modifiedData;
  }
  catch(err){
    console.log(err);
  }
}

export const AllCountries=async()=>{
try{
  const response=await axios.get('https://covid19.mathdro.id/api/countries');
  console.log(response);
  return response.data.countries.map((country)=>country.name);
}
catch(err){
  console.log(err);
}
}

export const casesSorted=async()=>{
  try{
    const response=await axios.get("https://disease.sh/v3/covid-19/countries?sort=cases");
    console.log(response);
    return response;
  }
  catch(err){
    console.log(err);
  }
  }