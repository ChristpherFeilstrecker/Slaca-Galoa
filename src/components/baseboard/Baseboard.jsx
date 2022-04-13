import './baseboard.scss'

export default function Baseboard() {
    return (
        <div className="baseboard">
            <div className="baseboardLeft">
                <strong className="titleGaloa">
                    Galoá
                </strong>
                <div className="subTitleGaloa">
                    <div className="line"></div>
                    Anais e proceedings
                    <div className="line"></div>
                </div>
                <button className='saibamais'>Saiba mais</button>

            </div>

            <div className="baseboardRigth">
                <div className="txt1">
                    <strong>
                        Preservar a memória do evento e ampliar o acesso ao conhecimento cientifico
                    </strong>
                    gerado em eventos é a razão de ser da plataforma Galoá Proceedings.
                </div>
                <div className="txt2">
                    O trabalhos publicados aqui têm maior alcance e ficam disponíveis para toda a
                     comunidade científica, mantendo aceso o debate científico fomentado pelos encontros
                      e aumentando o impacto do evento.
                </div>

            </div>
        </div>
    )
}