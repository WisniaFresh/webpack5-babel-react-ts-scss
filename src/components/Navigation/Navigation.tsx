import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
        </ul>
      </nav>
    )
}

export default Navigation;