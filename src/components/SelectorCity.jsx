const SelectorCity = ({setCity,setSelectCity}) => {
    return ( 
        <div>
            <input type="text" onChange={e=>setCity(e.target.value)} className="cityInput" />    
        <button onClick={()=>setSelectCity(true)} className="city__button">Показать</button>
        </div>
        );
}
 
export default SelectorCity;