import './discussions.scss'

export default function Discussions() {
    return (
        <div className="discussions">
            <div className="discussionsContainer">
                <div className="discussionsTitle">
                    Discussões
                </div>
                <div className="discussionsDescription">
                    <strong>
                        Compartilhe sua ideias ou dúvidas com os autores!
                    </strong>
                    <img className="img" src="assets/discussionicon.png" alt="img" />
                    <div className="discussionText">
                        <div className="text">Sabia que o maior estímulo no desenvolvimento científico e cultural é a curiosidade? Deixe seus questionamentos ou sugestões para o autor!</div>
                    </div>

                    <button className="btnNewTopic">
                        <div className="additionLine1"></div>
                        <div className="additionLine2"></div>
                        <strong className="btnText">criar tópico</strong>
                    </button>

                    <div className="discussionBox">
                        <div className="questionTitle">
                            Assunto da pergunta aparece aqui
                        </div>
                        <div className="questionAuthor">
                            Autor da pergunta
                        </div>
                        <div className="question">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae turpis auctor, mollis felis ut, commodo turpis. Phasellus felis mauris, egestas eget cursus et, iaculis quis lacus...
                        </div>
                        <div className="questionOptions">
                            <div className="points">
                                <div className="point"></div>
                                <div className="point"></div>
                                <div className="point"></div>
                            </div>
                            <img src="assets/heart.png" className="heart" alt="heart"/>

                           <div className="list1">1 like </div> 
                           <div className="list1">1 resposta </div> 
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}