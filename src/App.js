import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import './App.css';
import Main from './containers/Main/Main';
function App() {
  

  useEffect(()=>{
    if('serviceWorker' in navigator) console.log('Service worjer')
    else console.log('noservice woeker')
  },[])

  return (
    <div className="App">
      <BrowserRouter>
      <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
