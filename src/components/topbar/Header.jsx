import './header.scss'

export default function Header() {
  return (
    <div className='header'>
      <div className='headerleft'>
        <div className='subtitleheader'>Anais de Simpósio LAtino Americano de Ciência de Alimentos</div>
        <div className='titleheader'>Anais do 13º Simpósio Latino Americano de Ciência de Alimentos</div>
        <div className='subtitleheader'>ISSN: 1234-5678</div>
      </div>
      <div className='headerrigth'>
        <div className='languageselector'>
          <img  className='globo' src="assets/globo.png" alt="globo" />
          <select className="selectBox">
            <option value="pt">PT, BR</option>
            <option value="ing">ING, EUA</option>
          </select> 
          
          </div>
        <div className='bvemail'>
          <div>Bem vindo!</div>
          <div>queroserumagota@chuva.com</div>
        </div>
        <div>
          <div className='facelogin'>
            <img  className='face' src="assets/rosto.png" alt="face" />
            <div className='alert'>2</div>
        </div>
        </div>
      </div>

    </div>

  )
}
