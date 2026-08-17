import Background from './components/background';
import Homepage from './components/homepage';
import Contact from './components/contact';

import './app.scss';

function App() {
  return (
    <div className="app">
      <Background />
      <Homepage />
      <Contact />
    </div>
  );
}

export default App;
