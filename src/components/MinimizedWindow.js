import cd_audio_icon_small from 'images/cd_audio_icon_small.png'
import '98.css'

export default function MinimizedWindow({
    title, 
    closeWindow, 
    restoreWindow, 
    maximizeWindow,
    activeWindow}) {
    
    console.log(title.length)

    return(
        <div className={`title-bar ${(activeWindow ? '' : 'inactive')}`} style={{height: '25px'}}>
            <div 
                class='title-bar-text' 
                style={{
                    fontSize: 14,
                    marginRight: '5px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                }}
            >
                <img alt="audio_icon" src={cd_audio_icon_small} style={{paddingRight: '5px'}}/>
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