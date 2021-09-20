import NoteContext from './noteContext';
import { useState } from 'react';

const NoteState = (props)=>{
    const s1 = {
        "name": "Babin",
        "class": "5D",
    }
    const [state, setState] = useState(s1);
    const update = ()=>{
        setTimeout(()=>{
            setState({
                "name": "Bobby",
                "class": "10D",
            })
        }, 1000);
    }
    return (
        <NoteContext.Provider value={{state:state, update:update}}>
            {props.children}
        </NoteContext.Provider>
    )
};


export default NoteState;