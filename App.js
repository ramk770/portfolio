import './App.css';
import Header from './compontent/header/Header';
// import About from './compontent/about/AboutNew.JS';
import AboutPage from './AboutPage';
import Skills from './Skills';
import Projectdis from './compontent/Projectcom';
import Expression from './compontent/Expression';
import Contact from './compontent/Contact';
// import  Content from './projectdis/Content'
function App() {
  return (
   <div>
    <Header />
    {/* <h1>hello</h1> */}
    <AboutPage/>
    <Skills />
    <Projectdis />
     <Expression /> 
     <Contact />   


   
    

   </div>
  );
}

export default App;
