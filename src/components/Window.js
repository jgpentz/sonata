import '98.css'
import Draggable from 'react-draggable';
import { useState, useRef, useEffect, useCallback } from 'react';
import TitleBar from './Titlebar.js';
import MinimizedWindow from './MinimizedWindow.js';

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref, setAlert) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
            setAlert(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, setAlert]);
  }
  

export default function Window({title, defaultPos}) {
    // Create a state variable for closing the window
    const [showWindow, setShowWindow] = useState(true);
    const [minimizeWindow, setMinimizeWindow] = useState(false);
    const [activeWindow, setActiveWindow] = useState(false)
    const [position, setPosition] = useState({x: defaultPos[0], y: defaultPos[1]})

    let currentPos = defaultPos
    console.log(currentPos)
    
    // set the window as inactive when clicked outside
    const wrapperRef = useRef(null);
    const setAlert = useCallback((state) => {
        setActiveWindow(state)
    }, []);
    useOutsideAlerter(wrapperRef, setAlert);

    // Bring this window to the front of the screen and updates
    // the titlebar to show that this window is active
    const makeActiveWindow = (e) => {
        // Set window as selected window
        setActiveWindow(true)

        // Raises the z index of the window being dragged, bringing it to the
        // front of the screen.    
        let elems = document.getElementsByClassName('react-draggable-dragged');
        for(let i = 0; i < elems.length; i++) {
            elems[i].style.zIndex = 1;
            e.currentTarget.style.zIndex = 2;
        }
    }

    const handleStop = (e, ele) => {
        setPosition({x: ele.x, y: ele.y})
    }

    // Don't need to return a component if they closed the window
    if (!showWindow) {
        return null;
    }
    return(
        <Draggable 
            defaultClassName="window" 
            handle=".title-bar" 
            defaultPosition={{x: defaultPos[0], y: defaultPos[1]}} 
            bounds="parent"
            onMouseDown={makeActiveWindow}
            onStop={handleStop}
            position={minimizeWindow ? {x: 100, y: 200} : null}
        >
            <div 
                class="window" 
                style={{
                    position: 'absolute', 
                    visibility: !showWindow? 'none' : '', 
                    width: minimizeWindow ? '200px' : '600px',
                }}
                ref={wrapperRef}
            >
                {minimizeWindow ? (
                    <MinimizedWindow 
                        title={title} 
                        closeWindow={() => setShowWindow(false)} 
                        restoreWindow={() => setMinimizeWindow(false)}
                        activeWindow={activeWindow}
                    />
                ) : (
                    <div>
                        <TitleBar 
                            title={title} 
                            closeWindow={() => setShowWindow(false)} 
                            minimizeWindow={() => setMinimizeWindow(true)} 
                            activeWindow={activeWindow}
                        />
                        <div class='window-body'>
                            <p style={{fontSize: 12}}>Room for activites</p>
                        </div>
                    </div>
                )}
            </div>
        </Draggable>
    );
}