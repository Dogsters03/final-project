import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import FormPage from './pages/FormPage'
import './App.css'

function HomePage() {
  return (
    <>
      <Hero />
      <MainContent />
    </>
  )
}

export default function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/form" element={<FormPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
