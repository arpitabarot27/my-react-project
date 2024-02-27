import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import MiddleTopbar from './Components/MiddleTopbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div class="AppBody">
        <Sidebar/>
        <MiddleTopbar/>
        <div class="ContentDiv"></div>
      </div>
      {/* Other content of your application */}
    </div>
  );
}

export default App;
