import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import "./styles/global.scss";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
