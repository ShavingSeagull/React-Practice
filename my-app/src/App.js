import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import StatefulGreetingWithPreviousState from './components/StatefulGreetingWithPreviousState';

function App() {
  return (
    <div className="App">
      <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting="Nice to meet you!"/>
      <FunctionalGreetingWithProps greeting="Get lost, you commie wanker"/>
      <StatefulGreeting greeting="Suck on my breeches"/>
      <StatefulGreetingWithCallback greeting="I've got a fucking callback, bitches!"/>
      <StatefulGreetingWithPreviousState greeting="I've got a previous state, boiiii!"/>
    </div>
  );
}

export default App;
