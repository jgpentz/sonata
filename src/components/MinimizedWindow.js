import cd_audio_icon from 'images/cd_audio_icon.png'
import '98.css'

export default function MinimizedWindow({
    title, 
    closeWindow, 
    restoreWindow, 
    maximizeWindow,
    activeWindow}) {

    return(
        <div className={`title-bar ${(activeWindow ? '' : 'inactive')}`}>
            <div class='title-bar-text' style={{fontSize: 14}}>
                <img alt="audio_icon" src={cd_audio_icon} style={{paddingRight: '5px'}}/>
                {title}
            </div>
            <div className="title-bar-controls">
                <button onClick={restoreWindow} aria-label='Restore'></button>
                <button onClick={maximizeWindow} aria-label='Maximize'></button>
                <button onClick={closeWindow} aria-label='Close'></button>
            </div>
        </div>
    );
} 