import React from 'react';
import { useEffect, useState } from 'react';
import './abstract.scss';

export default function Abstract() {

    let [seeMore, setSeeMore] = useState("ver mais");


    const seeText = ((seeMore) => {
        if (seeMore === "ver mais") {
            return (
              <div key="points" className="pointstxt">
                <span className="points" id="points" >...</span>
                <div className="btnContainer1">
                       <button className="btnSeeMore" onClick={() => learMore(setSeeMore)} id="btnseeMore"> <strong>{seeMore}</strong></button>  
                    </div>
            </div>  
            ) 
        } else if (seeMore === "ver menos") {
            return(
              <div className="more" key="more">
                <span id="more" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae turpis auctor, mollis felis ut, commodo turpis. Phasellus felis mauris, egestas eget cursus et, iaculis quis lacus. Fusce auctor eros sed magna ultricies gravida.
                        Etiam aliquam dictum nisl, vel aliquet enim accumsan sit amet. Donec finibus nisi tellus, ut viverra lorem vestibulum ut. Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula
                        in sapien scelerisque, ac gravida eros vestibulum.
                        Fusce vitae luctus dui. Donec id euismod mauris, in volutpat urna. Proin dapibus consequat feugiat. Proin dictum justo arcu, quis vestibulum augue lacinia quis. Sed dignissim dui nulla, ut faucibus mauris sodales id.
                </span>
                <div className="btnContainer2">
                       <button className="btnSeeMore" onClick={() => learMore(setSeeMore)} id="btnseeMore"> <strong>{seeMore}</strong></button>  
                 </div>
            </div>  
            ) 
        }
    })

    const learMore = ((setSeeMore) => {
        if (seeMore === "ver mais") {
            setSeeMore("ver menos")
        } else {
            setSeeMore("ver mais")
        }
    })
   
    useEffect(() => {
        seeText(seeMore);
    }, [seeMore])

    return (
        <div className='abstract'>
            <div className="abstractContainer">
                <div className="abstractTitle">
                    Resumo
                </div>
                <div className="abstractTexContainer">
                    <div className="abstractText">
                       <div> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae turpis auctor, mollis felis ut, commodo turpis. Phasellus felis mauris, egestas eget cursus et, iaculis quis lacus. Fusce auctor eros sed magna ultricies gravida.
                        Etiam aliquam dictum nisl, vel aliquet enim accumsan sit amet. Donec finibus nisi tellus, ut viverra lorem vestibulum ut. Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula
                        in sapien scelerisque, ac gravida eros vestibulum.
                        Fusce vitae luctus dui. Donec id euismod mauris, in volutpat urna. Proin dapibus consequat feugiat. Proin dictum justo arcu, quis vestibulum augue lacinia quis. Sed dignissim dui nulla, ut faucibus mauris sodales id.
                        </div>
                         {seeText(seeMore)}
                    </div>
                </div>
            </div>


        </div>
    )
}