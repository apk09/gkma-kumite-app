import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import ScreenLayouts from './components/screen-layouts';
import KataScreen from './components/kata/kata-screen';
import KumiteScreen from './components/kumite/kumite-screen';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<ScreenLayouts />}></Route>
          <Route exact path='/kata' element={< KataScreen />}></Route>
          <Route exact path='/kumite' element={< KumiteScreen />}></Route>
        </Routes>
      </div>
    </Router>
  );
  
}

export default App;
