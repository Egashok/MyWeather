
// import { useState ,useEffect} from 'react';
// import './App.css';
// import axios from 'axios';
// import WeatherService from './API/WeatherService'


// function App() {

// let apiKey = "d534827b10e29f9120e67c09ef66c470";
// let city = "Moscow";
// let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ru&units=metric&appid=${apiKey}`;
  

// let [weather,setWeather]=useState(WeatherService.getWeather(url))



// async function getWeatherList(data){

// if(data){

//   console.log(data)
//   data.then(function(value){
//     console.log(`Из промиса получены данные: ${value}`);
// })

// }

// }
// getWeatherList(weather)
// useEffect((weather) => {
//   getWeatherList(weather)
// },weather);








//   const[options,setOptions]=useState([
//     {value: 'title', name:'По названию'},
//     {value: 'body', name:'По описанию'},
  
//   ])



//   let defaultValue="Сортировка"

//   return (
//     <div className='weather'>

// <video className='videoFon' height="100%"   autoPlay muted loop>
// <source  src={require('../src/fon1.mp4')} type="video/mp4"/>



// </video>  
// <div className='sideBar'>
    
//  <div className='sideBar__changer'>
//       <select className='sidebar__select'
       
   
//        >
//        <option disabled value=""> {defaultValue}</option>
//        {options.map(option=>
//            <option className='option' key={option.value} value={option.value}>
//                {option.name}
//            </option>
//            )} 

       

//       </select>
//            </div> 
// <div className='sidebar__items'>

// <div className='sidebar__item'>

// <h1 >Утро</h1>
//   <img className='sidebar__img' src="groza.svg"/>
//   <p className='sidebar__temp'>+32</p>
// </div>
// <div className='sidebar__item'>

// <h1>День</h1>
// <img className='sidebar__img' src="groza.svg"/>     
//      <p className='sidebar__temp'>+32</p>
// </div>
// <div className='sidebar__item'>

// <h1>Вечер</h1>
// <img className='sidebar__img' src="groza.svg"/>       
//    <p className='sidebar__temp'>+32</p>
// </div>  
// <div className='sidebar__item'>

// <h1>Ночь</h1>
// <img fill="white" className='sidebar__img' src="groza.svg"/>       
//    <p className='sidebar__temp'>+32</p>
// </div>  
// </div>

 

//     </div>


// </div>
//   );
// }

// export default App;
