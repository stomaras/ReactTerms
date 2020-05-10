import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList'
import Stylesheet from './components/Stylesheet'
import Form from './components/Form'
import LifecycleA from './components/LifecycleA';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LifecycleA />
        {/*<Form />*/}
        {/*<Stylesheet primary={false} />*/}
        {/*<NameList />*/}
        {/*<UserGreeting />/*}
        {/*<ParentComponent />*/}
        {/*<EventBind />*/}
        {/*<FunctionClick />*/}
        {/*<ClassClick />*/}
        {/*<Counter />*/}
        {/*<Message />*/}
        {/*<Greet name="Bruce" heroName="Batman"><p>This is children </p></Greet>
        <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Welcome name="Bruce" heroName="Batman"/>
        <Welcome name="Clark" heroName="Superman"/>
        */}
        {/*<Greet name="Diana" heroName="Wonder Woman"/>
        <Welcome name="Diana" heroName="Wonder Woman"/>*/}
      </div>
    );
  }
}

export default App;
