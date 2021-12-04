import './App.css';

import Card from './components/Card/Card';
import Filter from './components/Filter/Filter';
import List from './components/List/List';
import { PersonajesProvider } from './Contexts/personajesContext';

function App() {
  return (
  <PersonajesProvider>
    <div className="App">
      <Card/>
      <Filter/>
      <List/>
    </div>
  </PersonajesProvider>

  );
}

export default App;
