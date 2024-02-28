import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import MiddleTopbar from './Components/MiddleTopbar';
import MiddleContainer from './Components/MiddleContainer';
import './App.css';
import CreateReqContainer from './Components/CreateRequestContainer';
import {useState} from 'react'


function App() {

  const [activeComponent, setActiveComponent] = useState('MiddleContainer');

  return (
    <div className="App">
      <Navbar />
      <div class="AppBody">
        <Sidebar activeCompCallback={setActiveComponent}/>
        </div>
        <div class="ContentDiv">
        {activeComponent==='MiddleContainer' && (
 <MiddleContainer userName="ARPITA BAROT" />
        )}
        {activeComponent==='CreateRequestContainer' && (
       <CreateReqContainer userName="ARPITA BAROT" />
       )}
        
        </div>
        {/* Other content of your application */}
      </div>
      
    
  );
}

export default App;
