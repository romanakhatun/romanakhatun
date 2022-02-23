import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./components/Index";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/global.scss";

// export const WebsiteName = "Romana Khatun";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
