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
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp'
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import MyComponent from './components/MyComponent';
import CustomTextInput from './components/CustomTextInput';
import AutoFocusTextInput from './components/AutoFocusTextInput'
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary'
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import Counterr from './components/Counterr'
import ComponentC from './components/ComponentC'
import { UserProvider } from './components/userContext'




class App extends Component {
  
  render() {
    return (
      <div className="App">

        <UserProvider value="Tom">
          <ComponentC />
        </UserProvider>
        
      
      {/*<div className="App">
        <Counterr 
          render={(count, incrementCount) => ( 
            <ClickCounterTwo count={count} incrementCount={incrementCount} />
          )}
        />

        <Counterr 
          render={(count, incrementCount) => ( 
            <HoverCounterTwo count={count} incrementCount={incrementCount} />
          )}
          />*/}

        {/*<ClickCounterTwo />
        <HoverCounterTwo />
        <User render={ (isLoggedIn) => isLoggedIn ? 'Tom' : 'Guest'}/>*/}
        {/*<ClickCounter name="Tom"/>
        <HoverCounter />*/}
        {/*}
        <ErrorBoundary>
          <Hero heroName="Batman"></Hero>
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName="Spiderman"></Hero>
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName="Joker"></Hero>
    </ErrorBoundary>*/}

        {/*<PortalDemo />*/}
        {/*<AutoFocusTextInput />*/}
        {/*<CustomTextInput />*/}
        {/*<MyComponent />*/}
        {/*<FRParentInput />*/}
        {/*<FocusInput />*/}
        {/*<RefsDemo />*/}
        {/*<ParentComp />*/}
        {/*<PureComp />*/}
        {/*<Table />*/}
        {/*<FragmentDemo />*/}
        {/*<LifecycleA />*/}
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
