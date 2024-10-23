import './App.css'
import {Link, Outlet} from "react-router-dom";

function App() {
  return (
    <>
        <Outlet />
        <nav>
          <ul>
            <li>
              <Link to={`/`}>New Nav</Link>
            </li>
            <li>
              <Link to={`/grid`}>CSS Grid</Link>
            </li>
            <li>
              <Link to={`flexbox`}>CSS Flexbox</Link>
            </li>
          </ul>
        </nav>
    </>
  )
}

export default App
