import cd_audio_icon_small from 'images/cd_audio_icon_small.png'
import '98.css'

export default function TitleBar({
    title, 
    closeWindow, 
    minimizeWindow, 
    maximizeWindow,
    activeWindow}) {

    return(
        <div className={`title-bar ${(activeWindow ? '' : 'inactive')}`}>
            <div class='title-bar-text' style={{fontSize: 14}}>
                <img alt="audio_icon" src={cd_audio_icon_small} style={{paddingRight: '5px'}}/>
                {title}
            </div>
            <div className="title-bar-controls">
                <button onClick={minimizeWindow} aria-label='Minimize'></button>
                <button onClick={maximizeWindow} aria-label='Maximize'></button>
                <button onClick={closeWindow} aria-label='Close'></button>
            </div>
        </div>
    );
} 