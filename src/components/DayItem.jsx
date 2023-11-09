const DayItem = ({day}) => {
    const imgurl=`/assets/${day.weather[0].main}`
    let time= new Date(day.dt_txt)
    const months =['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря']
    let m=time.getMonth()
    let d=time.getDate()

    return ( 
        <div>
            <img src={`${imgurl}.svg`} alt="" className="day__img" />
            <h3 className="date">{`${d} ${months[m]} `}</h3>
            <h3 className="temp">{`${Math.round(day.main.temp)} °C`}</h3>
            <h3 className="wind">{`${Math.round(day.wind.speed)} м/с`}</h3>
            <h3 className="description">{day.weather[0].description}</h3>
        </div>
        
        );
}
 
export default DayItem;