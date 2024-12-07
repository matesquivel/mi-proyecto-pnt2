import { Outlet, Link } from "react-router-dom";
import "../styles/Layout.css"; // Importa el archivo CSS

const Layout = () => {
  return (
    <div className="layout-container">
      <nav>
        <ul>
          <li>
            <Link to="/app" className="app-button">PROYECTO FINAL</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
