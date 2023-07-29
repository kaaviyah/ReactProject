import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import MainPage from './Pages/MainPage';



function App() {
//  const username="Kaaviyah";
      return(
        <div>
      <BrowserRouter>
         <Routes>
         
          <Route path="/" element={<Login />}></Route> 
          <Route path="/Mainpage"  element={<MainPage />}></Route> 
          {/* <Route path="/Mainpage" render={()=> <MainPage username={username} />}/> */}
          </Routes>
          </BrowserRouter>

        </div>
      )

  
       
}

export default App;
