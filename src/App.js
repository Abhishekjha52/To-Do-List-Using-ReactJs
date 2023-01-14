import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Component/Home';
import Main from './Component/Main';
function App() {
  return (
    <Router>
      <div className="App">
      
      <Routes>

        <Route exact path='/' element={<Home/>}/>
        <Route path='/main' element={<Main/>}/>
      </Routes>




    </div>
    </Router>
   
  );
}

export default App;
