import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header.jsx'
import HousingPage from './pages/HousingPage.jsx'
import ShopsPage from './pages/ShopsPage.jsx'
import MaidPage from './pages/MaidPage.jsx'
import MapPage from './pages/MapPage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<HousingPage />} />
          <Route path="/housing" element={<HousingPage />} />
          <Route path="/shops" element={<ShopsPage />} />
          <Route path="/maid" element={<MaidPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
