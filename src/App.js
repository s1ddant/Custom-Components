import './App.css';
import Checkbox from './components/Checkbox';
import ClockClassBased from './components/Clock';
import Backdrop from './components/Backdrop';

function App() {

  return (
    <div className="App">
      <Backdrop>
      <ClockClassBased />
      <Checkbox label="I'm a checkbox!" checked={false} id="checkbox1"/>
      <Checkbox label="I'm a checkbox!" checked={false} id="checkbox2" />
      </Backdrop>
      
      
    </div>
  );
}

export default App;
