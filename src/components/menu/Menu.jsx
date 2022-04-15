import { useState } from "react"
import "./menu.scss"

export default function Menu() {
  const [menuOpen,setMenuOpen] = useState(true);

  const menu =()=>{
    if(menuOpen === true){
      setMenuOpen(false)
    }else{
      setMenuOpen(true)
    }
  }

    const arrow =()=>{
      if(menuOpen === true){
        return(
        <div className="arrowContainer">
          <img onClick={()=>menu()} className="arrow" src="assets/arrow-left.jpg" alt="arrow" />
        </div>
        )
        
      }else{
        return(
          <div className="arrowContainer">
            <img onClick={()=>menu()} className="arrow" src="assets/arrow-rigth.jpg" alt="arrow" />
          </div>
          )
      }
    

  }
  return (
    <div className={'menu ' + (menuOpen && 'active')}>

        <div className="topLogo">SLACA 2019</div>
        {arrow(menuOpen)}
        <img className="logo" src="assets/logo13slaca.png" alt="logo13slaca" />
        
        

        <div className="navigationContainer">
            <div className="efectHover">
               <div className="navigation">
                <a href="#intro">Apresentação</a>
            </div> 
            </div>
            <div className="efectHover">
              <div className="navigation" >
                <a href="#com">Comitês</a>
            </div>  
            </div>
            <div className="efectHover">
              <div className="navigation">
                <a href="#authors">Autores</a>
            </div>  
            </div>
            <div className="efectHover">
              <div className="navigation">
                <a href="#eixos">Eixos temáticos</a>
            </div>  
            </div>
            <div className="efectHover">
              <div className="navigation">
                <a href="#works">Trabalhos</a>
            </div>  
            </div>
            <div className="efectHover">
              <div className="navigation">
                <a href="#contact">Contato</a>
            </div>  
            </div>
            
        </div>
        
        
    </div>
  )
}
