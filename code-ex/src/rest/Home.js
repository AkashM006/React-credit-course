import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>REST API</h1>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <li>
          <Link to="/rest/get">
            <h3>GET</h3>
          </Link>
        </li>
        <li>
          <Link to="/rest/post">
            <h3>POST</h3>
          </Link>
        </li>
      </ul>
    </div>
  );
}
