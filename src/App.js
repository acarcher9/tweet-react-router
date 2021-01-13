
// **Used React Router.com quick guide to set up**
import React, {useState} from "react";
import Tweet from './Tweet';
import './index';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


export default function App() {
  return (
    <Router>
      <div className="nav-bar">
        <ul>
          <li>
            <Link to="/">Practice Static Twitter</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {/* <li>
            <Link to="/topics">Contact Me</Link>
          </li> */}
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          {/* <Route path="/topics">
            <Topics />
          </Route> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  const [users, setUsers] = useState([
        {name: 'Annie', message: 'This is my first and only tweet.', likes: '20'},
        {name: 'Connie', message: 'Meow.', likes: '10'},
        {name: 'Shane' , message: 'Is this thing on?', likes: '15'},
        {name: 'Lotte' , message: 'Meow.', likes: '27'}
    
      ])
    
      return(
        <div className="app">
          {users.map(user =>(
            <Tweet name={user.name} message={user.message} likes={user.likes}/>
          ))}
        </div>
      );
    }
 

function About() {
  return (
    <div className="about-me">
      <p>My name is Annie and I don't actually have a Twitter. But I followed a YouTube tutorial that helped me build this React app!</p>
    </div>
  
  )
}

// function Topics() {
//   let match = useRouteMatch();

//   return (
//     <div>
      
//     </div>
//   );
// }

// function Topic() {
//   let { topicId } = useParams();
//   return <h3>Requested topic ID: {topicId}</h3>;
// }

 {/* <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul> */}

      {/* {The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected} */}
      {/* <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch> */}



// function App(){
//   const [users, setUsers] = useState([
//     {name: 'Annie', message: 'This is my first and only tweet.', likes: '20'},
//     {name: 'Connie', message: 'Meow.', likes: '10'},
//     {name: 'Shane' , message: 'Is this thing on?', likes: '15'},
//     {name: 'Lotte' , message: 'Meow.', likes: '27'}

//   ])

//   return(
//     <div className="app">
//       {users.map(user =>(
//         <Tweet name={user.name} message={user.message} likes={user.likes}/>
//       ))}
//     </div>
//   );
// }


// export default App;

// NOTES
// import Hello from './sayHello';

//  This is a COMPONENT. Looks like HTML, but it's actually JS. What happens behind the scenes is: "React.createElement(div)"
 
// Adding logic above the JSX here
  // const sayHello = () => {
  //   console.log('hello');
  // };

   // Below is JSX
  // When we add curly braces, we can insert JS //
  // what was inside <div> in first ex.<h1>Hello React.</h1>
  /* <button onCLick={sayHello}>Hello</button> */

  // Export the COMPONENT we just wrote to index.js where it is then rendered & on screen. **Note that there's nothing in index.html!

  // Tweet contents
  // <Tweet name="TeamPup" message = "crunch crunch! living la vida laptop. #gotta #lotta" likes ="20"/>
  //     <Tweet name="Ovasenyase" message = "pee pee poo poo *monkey pic*" likes = "47"/>
  //     <Tweet name="coconut_bra" message = "omfg @ovasenyase" likes ="30"/>
  //     <Tweet name="hackerGirl69" message = "tfw u break into his house in the night \_(`~')_/" likes ="12"/>

  // Button Functionality
  // const [isRed, setRed] = useState(false);
  // const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount(count + 1);
  //   // how to toggle below
  //   setRed(!isRed);
  // };


  // function About({blurb}) {
// const blurb="my name is annie";
//   return(
//     <div>
//       <About {blurb} />
//     </div>
//   )
// }