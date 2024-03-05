
import '../styles/App.css'
import MainMenu from './MainMenu.js'
import MainSection from './MainSection.js'

function App() {
  return (
    <div>
      <header className='App-header'>
        <MainMenu />
      </header>
      <section>
        <MainSection />
      </section>
    </div>
  );
}

export default App;
