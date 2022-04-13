import './app.scss'
import Abstract from './components/abstract/Abstract';
import Baseboard from './components/baseboard/Baseboard';
import Discussions from './components/discussions/Discussions';
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
         <Discussions/>
         <Baseboard/>
       </div>
      </div>
  );
}
export default App;
