// import logo from './logo.svg';
import './App.css';
import {Header,Footer} from './components';
import Allroutes from './routes/Allroutes'

function App() {
  return (
    <div className="App">
      <Header/>
      <Allroutes/>
      <Footer/>
    </div>
  );
}

export default App;
