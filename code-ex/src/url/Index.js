import { Link } from "react-router-dom";
import "./Index.css";
import routes from "../Routes";

function Index() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      {routes.map((route) => {
        if (!route.to) return <></>;
        return (
          <li key={route.id}>
            <Link to={route.to}>{route.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Index;
