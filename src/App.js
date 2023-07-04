import './App.css';
import { PersonComponent } from './_components/PersonComponent/PersonComponent.jsx';

function App() {
  return (
    <>
      <PersonComponent person={{name: "Artem"}}/>
    </>
  );
}

export default App;
