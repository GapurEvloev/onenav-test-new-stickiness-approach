import './App.css'
import {Link, Outlet} from "react-router-dom";

function App() {
  return (
    <>
        <nav>
            <ul>
                <li>
                    <Link to={`grid`}>CSS Grid</Link>
                </li>
                <li>
                    <Link to={`flexbox`}>CSS Flexbox</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </>
  )
}

export default App