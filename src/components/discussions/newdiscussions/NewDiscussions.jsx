import { useEffect, useState } from "react"


export default function NewDiscussions() {

    let [question, setQuestion] = useState("intro");
    let [subject, setSubject] = useState("");
    let [query, setQuery] = useState("");
    console.log("answers", question)
    let answers = [
        { title: "titulo da pergunta", author: "Autor 1", quer: "descrição da pergunta?" },
        { title: "titulo da pergunta", author: "Autor 2", quer: "descrição da pergunta?" }
    ]

    const changeSubject = (event) => {
        setSubject(event.target.value);
    };
    const changeQuery = (event) => {
        setQuery(event.target.value);
    };

    const clear = () => {
        setSubject("")
        setQuery("")
    }

    const sendQuery = ((answers) => {

        answers.push(
            {
                title: subject,
                author: "Fulano de Tal",
                quer: query
            }
        )


        clear()
        sendDiscussion(setQuestion)
    })




    const sendDiscussion = ((setQuestion) => {
        if (question === "intro") {
            setQuestion("new")
        } else if(question === "new") {
            setQuestion("ok")
        }else if(question === "ok")  {
            setQuestion("new")
        }
    })

    const addDiscussion = (() => {

        if (question === "intro") {
            return (<div className="intro" key="intro">
                <strong>
                    Compartilhe sua ideias ou dúvidas com os autores!
                </strong>
                <img className="img" src="assets/discussionicon.png" alt="img" />
                <div className="discussionText">
                    <div className="text">
                        Sabia que o maior estímulo no desenvolvimento científico e cultural é a curiosidade? Deixe seus questionamentos ou sugestões para o autor!
                    </div>
                </div>
                <button onClick={() => sendDiscussion(setQuestion)} className="btnNewTopic">
                    <div className="additionLine1"></div>
                    <div className="additionLine2"></div>
                    <strong className="btnText">criar tópico</strong>
                </button>
            </div>
            )
        } else if (question === "new") {
            return <div className="new" key="new">
                <div className="newTitle">
                    Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!
                </div>
                <div className="title">
                    Assunto
                </div>
                <input
                    className="inputSubject"
                    name={"subject"}
                    value={subject}
                    onChange={changeSubject}
                    placeholder={"Defina um tópico sucinto para notificar os autores"}
                    type={"text"}
                />
                <div className="title">
                    Conteúdo
                </div>
                <div className="sendContainer">
                    <input
                        className="inputText"
                        name={"query"}
                        value={query}
                        onChange={changeQuery}
                        placeholder={"..."}
                        required
                        type={"text"}
                    />
                    <div className="sendBox">
                        <div className="optionsSend">
                            <b>B</b>
                            <i>I</i>
                        </div>
                        <button className="btnSend" onClick={() => sendQuery(answers)}>
                            Enviar
                        </button>
                    </div>
                </div>
            </div>
        } else if (question === "ok") {
            return <div className="ok" key="ok">
                <b className="okTitle">
                    Seu tópico foi enviado com sucesso! :D
                </b>
                <div className="okTxt">
                    Agradecemos por sua contrinuição, uma notificação será enviada ao seu email assim que seu tópico for respondido!
                </div>
                <div className="otherWorks">
                    <a href="https://github.com/ChristpherFeilstrecker" target="blank">Descubra outros trabalhos!</a>
                </div>
                <div className="lin"></div>
                <button onClick={() => sendDiscussion(setQuestion)} className="btnNewTopic">criar novo tópico</button>

                <div className="discussionBox">
            <div className="questionTitle">
                Titulo
            </div>
            <div className="questionAuthor">
                Autor
            </div>
            <div className="question">
                Pergunta em questão?
            </div>
            <div className="questionOptions">
                <div className="points">
                    <div className="point"></div>
                    <div className="point"></div>
                    <div className="point"></div>
                </div>
                <img src="assets/heart.png" className="heart" alt="heart" />
                <div className="list1">1 like </div>
                <div className="list1">1 resposta </div>
            </div>
        </div>


                <div className="boxAwaitFeedback">
                    <div className="iconOK">
                        <div className="contLin1">
                        <div className="lin1"></div> 
                      <div className="lin2"></div>
                        </div>
                    <div className="contLin2">
                       <div className="lin1"></div> 
                      <div className="lin2"></div> 
                    </div>
                       
                    </div>
                    <div className="txt">
                        Aguardando feedback dos autores
                    </div>
                    <div className="editTopic">
                        Editar tópico
                    </div>
                </div>

            </div>
        }
    })


    let returnQuerys = answers.map((query) => {

        return <div key={query.author} className="discussionBox">
            <div className="questionTitle">
                {query.title}
            </div>
            <div className="questionAuthor">
                {query.author}
            </div>
            <div className="question">
                {query.quer}
            </div>
            <div className="questionOptions">
                <div className="points">
                    <div className="point"></div>
                    <div className="point"></div>
                    <div className="point"></div>
                </div>
                <img src="assets/heart.png" className="heart" alt="heart" />
                <div className="list1">1 like </div>
                <div className="list1">1 resposta </div>
            </div>
        </div>
    })

    useEffect(() => {
        addDiscussion()
    }, [answers])

    return (
        <div className="newdiscussion">
            {addDiscussion(question)}

            {returnQuerys}

        </div>
    )
}