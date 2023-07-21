import cd_audio_icon_large from 'images/cd_audio_icon_large.png'
import '98.css'

export default function DesktopIcon() {
    return(
        <div style={{position: 'absolute', top: 10, left: 10}}>
            <img alt="desktop_audio_icon" src={cd_audio_icon_large}/>
            <div style={{color: "white", background: "rgb(0, 128, 128)"}}>Some Text</div>
        </div>
    )
}