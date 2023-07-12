import '../App.css'
import { Link } from 'react-router-dom'
import { useHome } from '../hooks/home'
import { useEffect } from 'react'

const Home = () => {
  const { name, handleSetName } = useHome()

  useEffect(() => {
    handleSetName()
  }, [])

  return (
    <div className=" bg-slate-300 h-full max-h-screen">
      {name !== '-' && <div>{name}</div>}
      <nav>
        <ul>
          <li>
            <Link to="/manage">manage</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Home
