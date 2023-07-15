import cd_audio_icon from 'images/cd_audio_icon.png'
import '98.css'

export default function TitleBar({closeWindow, minimizeWindow, maximizeWindow}) {
    return(
        <div className='title-bar'>
            <div class='title-bar-text' style={{fontSize: 14}}>
                <img alt="audio_icon" src={cd_audio_icon} style={{paddingRight: '5px'}}/>
                A Title Bar
            </div>
            <div className="title-bar-controls">
                <button onClick={minimizeWindow} aria-label='Minimize'></button>
                <button onClick={maximizeWindow} aria-label='Maximize'></button>
                <button onClick={closeWindow} aria-label='Close'></button>
            </div>
        </div>
    );
} 