import "./App.css";
import Index from "./url/Index";
import About from "./About/About";
import Page404 from "./Page404/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./Routes";

function App() {
  return (
    <div className="app">
      <Router>
        <Index />
        <Routes>
          {routes.map((route) => {
            return (
              <Route key={route.id} path={route.path} element={route.element} />
            );
          })}
          <Route index path="/" exact element={<About />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
