import './App.css';
import Navbar from './component/Navbar/Navbar.component';
import Intro from './component/Intro/Intro.component';
import About from './component/About/About.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Intro />
      <About />
    </div>
  );
}

export default App;
