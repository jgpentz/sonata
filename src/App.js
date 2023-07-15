import './App.css';
import background from 'images/w98_desktop_bg.jpg'
import Window from './components/window.js'
 


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
      <Window title="Some Window A" defaultPos={[0, 0]}/>
      <Window title="Some Window B" defaultPos={[500, 600]}/>
    </div>
  );
}

export default App;
