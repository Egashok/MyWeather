import { useState,useEffect } from "react";
import SelectorCity from "./SelectorCity";
import axios from 'axios';
import { CSSTransition } from "react-transition-group";
import Loader from "./Loader";
import DayItem from "./DayItem";


const Weather = () => {
    const [city,setCity]=useState(' ')
    const [selectCity,setSelectCity]=useState(false)
    const [isLoading,setIsLoading]=useState(false)
    
 let apiKey = "d534827b10e29f9120e67c09ef66c470";
 var url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ru&units=metric&appid=${apiKey}`;
 const[day1,setDay1]=useState()
 const[day2,setDay2]=useState()
 const[day3,setDay3]=useState()
 const[day4,setDay4]=useState()
 
 const [weather,setWeather]=useState([])
const fetchData=async()=>{
    setIsLoading(true)
    url =await `http://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ru&units=metric&appid=${apiKey}`;
    const result=await fetch(url)
    const data =await result.json()
    if(data['cod'] == 404 || data['cod'] == 400 ){
      alert('Неверно указан город')
    setSelectCity(false)
    setIsLoading(false)

    }  
    else{
  
      fillDay(data.list)
      setIsLoading(false)
    }
      

    
}
useEffect(()=>{

if(selectCity){
    fetchData()
}
},[selectCity])


function groupBy(key) {
    return function group(array) {
      return array.reduce((acc, obj) => {
        const property = obj[key].slice(0,10);
        acc[property] = acc[property] || [];
        acc[property].push(obj);
        return acc;
      }, {});
    };
  }


function fillDay(list){
    let array_list=[]
    for (var i=0;i<list.length;i++){
        array_list.push((list[i]))
    }
    const groupByDtTxt = groupBy("dt_txt");
    const days=groupByDtTxt(array_list)
    let keys=Object.keys(days)


    let median=Math.floor(days[keys[0]].length/2)
   
  console.log(days)
  let d1 =days[keys[0]][median]
    setDay1(d1)



     median=Math.floor(days[keys[1]].length/2)
   
     let d2 =days[keys[1]][median]

    setDay2(d2)


     
     median=Math.floor(days[keys[2]].length/2)
   
    let d3 =days[keys[2]][median]
    setDay3(d3)


     median=Math.floor(days[keys[3]].length/2)
   
    let d4 =days[keys[3]][median]
    setDay4(d4)

    
}

function closeWeather(){
   setSelectCity(false)
   setCity('')
}

    return (
    <div className="weather">
     {isLoading && <div class="spin-wrapper">
  <div class="spinner">
  </div>
</div>}
    {selectCity
    ? <div>
        
        {city}
        <button className="closeWeather" onClick={()=>closeWeather()}>x</button>


        <div className="weather__info">
          {day1 && <DayItem day={day1}/>}
          {day2 && <DayItem day={day2}/>}
          {day3 && <DayItem day={day3}/>}
          {day4 && <DayItem day={day4}/>}


        </div>

    </div>
    :  <SelectorCity setCity={setCity} setSelectCity={setSelectCity}/>
    }
        



    </div>
        
        
        );
}
 
export default Weather;