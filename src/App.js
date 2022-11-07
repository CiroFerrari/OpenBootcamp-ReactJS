import logo from './logo.svg';
import './App.css';
import ContactListComponent from './components/container/contact_list';
import ClockClass from "./components/Clase6/ClockClass";
import ClockFunction from "./components/Clase6/ClockFunction";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ContactListComponent></ContactListComponent>
        <ClockClass></ClockClass>
        <ClockFunction></ClockFunction>
      </header>
    </div>
  );
}

export default App;
