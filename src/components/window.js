import '98.css'
import Draggable from 'react-draggable';
import { useState } from 'react';
import TitleBar from './titlebar.js';

export default function Window({defaultPos}) {
    // Create a state variable for closing the window
    const [showWindow, setShowWindow] = useState(true);
    // const [showWindow, setShowWindow] = useState(true);

    // const a = 
    // const closeWindow = useCallback(() => setShowWindow(false), [showWindow])

    const bringToFront = (e) => {
        let elems = document.getElementsByClassName('react-draggable-dragged');
        console.log(elems)
        for(let i = 0; i < elems.length; i++) {
            elems[i].style.zIndex = 1;
            e.currentTarget.style.zIndex = 2;
        }
    }

    if (!showWindow) {
        return null;
    }
    return(
        <Draggable 
            defaultClassName="window" 
            handle=".title-bar" 
            defaultPosition={{x: defaultPos[0], y: defaultPos[1]}} 
            bounds="parent"
            onStart={bringToFront}
        >
            <div class="window" style={{position: 'absolute', visibility: !showWindow? 'none' : '', width: '600px', height: '400px'}}>
                <TitleBar closeWindow={() => setShowWindow(false)} />
                <div class='window-body'>
                    <p style={{fontSize: 12}}>Room for activites</p>
                </div>
            </div>
        </Draggable>
    );
}