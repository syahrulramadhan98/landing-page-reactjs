
import './App.css';
import NavigationBar from './component/Navbar';
import Footer from './component/Footer';
import Cats from './component/Cat';
import MostedView from './component/Mosted';
import IntroComponent from './component/Intro';
import './assets/style/Univ.css'

function App() {
  return (
    <div>
      <div className="myBG">
      <NavigationBar />
      <IntroComponent/>
      </div>
      <div className="Mosted">
      <MostedView/>
      </div>
      <div className="cats">
      <Cats/>
      </div>
     
      
    </div>
  );
}

export default App;
