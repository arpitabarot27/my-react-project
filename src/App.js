import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import MiddleTopbar from './Components/MiddleTopbar';
import MiddleContainer from './Components/MiddleContainer';
import './App.css';
import CreateReqContainer from './Components/CreateRequestContainer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div class="AppBody">
        <Sidebar/>
        </div>
        <div class="ContentDiv">
        {/* <MiddleContainer/> */}
        <CreateReqContainer/>
        </div>
        {/* Other content of your application */}
      </div>
      
    
  );
}

export default App;
