import Header from './components/Header/Header'
import Hero from './components/Hero/Hero';
import './App.css'
import Bicycles from './components/Bicycles/Bicycles';
import Value from './components/Value/Value';
import Contact from './components/Contact/Contact';
import GetStarted from './components/GetStarted/GetStarted';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <div className="blue-gradient" />
        <Header/>
        <Hero/>
      </div> 
      <Bicycles/>
      <Value/>
      <GetStarted/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
