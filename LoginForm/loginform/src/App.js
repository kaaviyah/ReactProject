import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import MainPage from './Pages/MainPage';



function App() {
 
      return(
        <div>
      <BrowserRouter>
         <Routes>
         
          <Route path="/" element={<Login />}></Route> 
          <Route path="/Mainpage" element={<MainPage />}></Route> 
          </Routes>
          </BrowserRouter>

        </div>
      )

  
       
}

export default App;
