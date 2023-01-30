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
          <Route exact path='/gkma-karate-app/' element={<ScreenLayouts />}></Route>
          <Route exact path='/gkma-karate-app/kata' element={< KataScreen />}></Route>
          <Route exact path='/gkma-karate-app/kumite' element={< KumiteScreen />}></Route>
        </Routes>
      </div>
    </Router>
  );
  
}

export default App;
