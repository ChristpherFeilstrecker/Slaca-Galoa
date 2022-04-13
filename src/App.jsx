import './app.scss'
import Abstract from './components/abstract/Abstract';
import Intro from './components/intro/Intro';
import Menu from './components/menu/Menu';
import Header from './components/topbar/Header';

const App = () => {
 
  return (

      <div className='app'>
        <div><Menu/></div>
       
      <div className="sections">
         <Header/>
         <Intro/>
         <Abstract/>
       </div>
      </div>
  );
}
export default App;
