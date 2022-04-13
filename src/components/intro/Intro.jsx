import './intro.scss'

export default function Intro() {
  return (
    <div className="intro">
      <div className="playerContainer">
        <strong className="playertext">
          Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campnas/SP
        </strong>
        <div className="player">
          <video className='video' controls>
            <source src="assets/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <strong className="videotext">
            Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campnas/SP
          </strong>
          <strong className="autortext">
            <div className="autorName">Beatriz Christiane de Mello</div>
            <div className="autorProf">FCA / Universidade de Campinas</div>
          </strong>
        </div>
      </div>
      <div className="detailContainer">
        <div className='buttons'>
          <div className='buttonDowload'>
            <img src="assets/arrowdowload.png" alt="arrow-download" />
            <div className="dowloadText">Download</div>
          </div>
          <div className="buttonIcons">
            <img src="assets/star.png" alt="star" />
          </div>
          <div className="buttonIcons">
            <img src="assets/doi.png" alt="doi" />
          </div>
        </div>
        <strong className='textwork'>
          COMO CITAR ESSE TRABALHO?
        </strong>
        <div className='containerDetail'>
          <div className="titleDetail">
            Detalhes
          </div>
          <div className="textDetail">
            <div className="detailTop">
              <div>Tipo de Apresentação: <strong>Pôster</strong></div>
              <div>Eixo temático: <strong>Alimentação e saúde (AS)</strong> </div>
              <div>Palavras-chaves: <strong>Alimentos funcionais, alimentação escolar.</strong> </div>
            </div>
            <div className="detailMiddle">
              <div className="authors"><strong>Autores:</strong></div>
              <div className="authors">Galileo Galilei¹</div>
              <div className="authors">Berta Lange de Morretes²</div>
              <div className="authors">Isaac Newton³</div>
              <div className="authors">Cesar Lattes¹</div>
              <div className="authors">Stephen Hawking⁴</div>
            </div>
            <div className="detailBotton">
              <div>¹Universidade Estadual de Campinas</div>
              <div>²Universidade de São Paulo</div>
              <div>³Instituto Nacional de Pesquisas Espaciais</div>
              <div>⁴Universidade Federal do Rio de Janeiro</div>
            </div>
            <div className="detailBotton">
              <div>¹Universidade Estadual de Campinas</div>
              <div>²Universidade de São Paulo</div>
              <div>³Instituto Nacional de Pesquisas Espaciais</div>
              <div>⁴Universidade Federal do Rio de Janeiro</div>
            </div>


          </div>
        </div>
      </div>
    </div>

  )
}