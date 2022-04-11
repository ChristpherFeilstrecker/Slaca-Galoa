import './app.scss'
import Menu from './components/menu/Menu';
import Header from './components/topbar/Header';

const App = () => {
 
  return (

      <div className='app'>
        <div><Menu/></div>
       
      <div className="sections">
         <Header/>
         
       </div>
      </div>
  );
}
export default App;
