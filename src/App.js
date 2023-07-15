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
      <Window defaultPos={[0, 0]}/>
      <Window defaultPos={[500, 600]}/>
      <Window defaultPos={[200, 300]}/>
    </div>
  );
}

export default App;
