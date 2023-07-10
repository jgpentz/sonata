import cd_audio_icon from 'images/cd_audio_icon.png'
import '98.css'
import Draggable from 'react-draggable';
import { useState } from 'react';

function TitleBar({closeWindow}) {
    return(
        <div className='title-bar'>
            <div class='title-bar-text' style={{fontSize: 14}}>
                <img alt="audio_icon" src={cd_audio_icon} style={{paddingRight: '5px'}}/>
                A Title Bar
            </div>
            <div className="title-bar-controls">
                <button aria-label='Minimize'></button>
                <button aria-label='Maximize'></button>
                <button onClick={closeWindow} aria-label='Close'></button>
            </div>
        </div>
    );
} 

export default function Window() {
    // Create a state variable for closing the window
    const [showWindow, setShowWindow] = useState(true);

    // const closeWindow = useCallback(() => setShowWindow(false), [showWindow])

    if (!showWindow) {
        return null;
    }
    return(
        <Draggable defaultClassName="window" handle=".title-bar" bounds="parent">
            <div class="window" style={{width: '600px', height: '400px'}}>
                <TitleBar closeWindow={() => setShowWindow(false)} />
                <div class='window-body'>
                    <p style={{fontSize: 12}}>Room for activites</p>
                </div>
            </div>
        </Draggable>
    );
}