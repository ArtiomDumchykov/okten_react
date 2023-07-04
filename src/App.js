import './App.css';
import { PersonComponent } from './_components/PersonComponent/PersonComponent.jsx';

function App() {
  return (
    <>
      <PersonComponent person={{name: "Artem1"}}/>
      <PersonComponent person={{name: "Artem2"}}/>
      <PersonComponent person={{name: "Artem3"}}/>
      
      
    </>
  );
}

export default App;
