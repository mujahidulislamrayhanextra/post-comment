
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './components/Home/Home'
import Post from './components/Post/Post'
import Comment  from './components/Comment/Comment'
import Notfound from './components/Notfound/Notfound';
import SeeMore from './components/SeeMore/SeeMore';
import NewsImg from './components/NewsImg/NewsImg';



function App() {
  return (
    <div className="App">
     <Router>

      <Switch>

        <Route  path="/home">
          <Home />
        </Route>
        
        <Route  path="/post">
          <Post/>
        </Route>

        <Route  path="/newsImg">
          <NewsImg></NewsImg>
        </Route>

        <Route  path="/comment">
          <Comment/>
        </Route>
        
      <Route path="/SeeMore/:SeeDetails">
        <SeeMore></SeeMore>
      </Route>

        <Route exact path="/">
        <Home></Home>
        </Route>

        <Route path="*">
        <Notfound/> 
        </Route>
      
      </Switch>
     
     </Router>
    </div>
  );
}

export default App;
