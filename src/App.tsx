import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Manage from './pages/Manage'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Layout from './components/layout/Layout'

function App() {
  return (
    <>
      <div className="wrapper">
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/manage" element={<Manage />} />
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
