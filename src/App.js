import './App.css';
import background from 'images/w98_desktop_bg.jpg'
import Window from './components/window.js'
import Draggable from 'react-draggable';
 


function App() {
  return (
    <div style={{
      backgroundImage: `url(${background})`, 
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh'}
    }>
      <Window/>
    </div>
  );
}

export default App;
