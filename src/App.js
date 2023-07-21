import './App.css';
import background from 'images/w98_desktop_bg.jpg'
import Window from './components/Window.js'
import DesktopIcon from './components/DesktopIcon.js'
import {useState} from 'react';
 


function App() {
	const [minimizeSlots, setMinimizeSlots] = useState([])

	return (
		<div style={{
			backgroundImage: `url(${background})`, 
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			width: '100vw',
			height: '100vh'}
		}>
			<DesktopIcon/>
			<Window 
				title="Some Window A"
				defaultPos={[100, 200]}
				minimizeSlots={minimizeSlots}
				setMinimizeSlots={setMinimizeSlots}
			/>
			<Window 
				title="Some Window B" 
				defaultPos={[500, 600]}
				minimizeSlots={minimizeSlots}
				setMinimizeSlots={setMinimizeSlots}
			/>
			<Window 
				title="Some Window C" 
				defaultPos={[20, 600]}
				minimizeSlots={minimizeSlots}
				setMinimizeSlots={setMinimizeSlots}
			/>
		</div>
	);
}

export default App;
