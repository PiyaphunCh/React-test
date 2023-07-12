import '../App.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <>Not found</>
      <nav>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NotFound
