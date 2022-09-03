import Register from './components/Register';
import Form from "./components/Form"
import Dashboared from "./components/Dashboard"
import Home from "./components/Home"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/signin" element={<Home/>}></Route>
        <Route exact path="/signup" element={<Register/>}></Route>
        <Route exact path="/loanform" element={<Form/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;