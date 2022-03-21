import BasicNavbar from './components/BasicNavbar';
import Weather from './components/Weather'
import './App.css'
import config from './config.json'


function App() {
  return (
    <>
      <BasicNavbar title={config.SITE_TITLE}></BasicNavbar>
        <Weather />
    </>
  );
}

export default App;
