import "./menu.scss"

export default function Menu() {
  return (
    <div className='menu '>

        <div className="topLogo">SLACA 2019</div>
        <img src="assets/logo13slaca.png" alt="" />


        <div className="navigationContainer">
            <div className="navigation">
                <a href="#intro">Apresentação</a>
            </div>
            <div className="navigation" >
                <a href="#portfolio">Comitês</a>
            </div>
            <div className="navigation">
                <a href="#works">Autores</a>
            </div>
            <div className="navigation">
                <a href="#testimonials">Eixos temáticos</a>
            </div>
            <div className="navigation">
                <a href="#contact">Trabalhos</a>
            </div>
            <div className="navigation">
                <a href="#contact">Contato</a>
            </div>
        </div>
    </div>
  )
}
