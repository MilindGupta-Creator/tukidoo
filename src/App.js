import './App.css';
import LeftSide from './components/leftside/LeftSide';
import RightSide from './components/rightside/RightSide';

function App() {
  return (
    <div className="App" style={{display:"flex"}}>
        <LeftSide/>
        <RightSide/>
    </div>
  );
}

export default App;
