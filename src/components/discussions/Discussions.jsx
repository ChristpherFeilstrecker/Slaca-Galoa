import './discussions.scss'
import NewDiscussions from './newdiscussions/NewDiscussions'

export default function Discussions() {
    return (
        <div className="discussions">
            <div className="discussionsContainer">
                <div className="discussionsTitle">
                    Discussões
                </div>
                <div className="discussionsDescription">
                    
                    <NewDiscussions/>


                </div>
            </div>
        </div>
    )
}