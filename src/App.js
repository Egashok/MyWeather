
import { useState ,useEffect} from 'react';
import './App.css';
import axios from 'axios';

import Weather from './components/Weather';
import Loader from './components/Loader';


function App() {
  return(
   <div>

    <Weather/>
   </div>
    )

}

export default App;
