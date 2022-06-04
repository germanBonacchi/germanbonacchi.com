import ParticlesBackground from './components/ParticleBackground'
import SocialFollow from './components/SocialFollow'
import './css/App.css';

function App() {
  return (
    <>
      <ParticlesBackground />
      <div className="App">
        <header className="App-header">
          <h1>Germán Bonacchi</h1>
          <p> Site under construction </p>
          <p> 👷🔨🔧🧱 </p>
          <SocialFollow />

        </header>
      </div>
    </>

  );
}

export default App;