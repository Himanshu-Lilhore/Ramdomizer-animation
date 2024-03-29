import {useState} from 'react'

function init(children){
    let tempLst = []
    for (let i = 0; i < children.length; i++) {
        tempLst.push(<span key={i}>{children[i]}</span>)
    }
    
    console.log([...tempLst])
    return tempLst
}

export default function WordShuffle({children}){
    const [indvAlphaSpans, setSpans] = useState([])

    function shuffle(){
        for(let i = 0; i < children.length; i++){

        }
    }

    let tempLst = init(children)
    setSpans([...tempLst])

    return(
        <div onMouseOver={shuffle}>
            {indvAlphaSpans}
        </div>
    );
}