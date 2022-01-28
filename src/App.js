import logo from './logo.svg';
import './App.css';
//import MyComponent from './components/Greet';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import ParentComp from './components/ParentComp';

function App() {
  return (
    <div className="App">
      <ParentComp />
      {/* <Table/> */}
      {/* <FragmentDemo /> */}
      {/* <LifecycleA /> */}
      {/* <Form /> */}
      {/* <h1 className='error'>Error</h1> */}
      {/* <h1 className = {styles.success}>Success</h1> */}
      {/* <Inline /> */}
      {/* <Stylesheet primary ={true}/> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <Counter/> */}
      {/* <Message/> */}
      {/* {/* <Greet name = "Etisha" heroName = "Power Puff Girls">
        <p>This is a children prop</p>
      </Greet> */}
      {/* <Greet name = "Dumbo" heroName = "Superman">
        <button>Action</button>
      </Greet> */}
      {/* <Greet name = "Senti" heroName = "Batman"/> */}
      {/* <Welcome name = "Etisha" heroName = "Power Puff Girls"/> */}
      {/* <Welcome name = "Dumbo" heroName = "Superman"/>  */}
    </div>
  );
}

export default App;
