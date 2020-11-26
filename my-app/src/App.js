import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import StatefulGreetingWithPreviousState from './components/StatefulGreetingWithPreviousState';
import EventsFunctional from './components/EventsFunctional';
import EventsClass from './components/EventsClass';
import EventBinding from './components/EventBinding';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';

function App() {
  return (
    <div className="App">
      <EventsFunctional />
      <EventsClass />
      <EventBinding />
      <ConditionalRenderingFunctional connected={true} />
      <ConditionalRenderingClass />
    </div>
  );
}

export default App;
