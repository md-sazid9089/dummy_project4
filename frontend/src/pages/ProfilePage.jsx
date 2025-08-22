import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function ProfilePage() {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    axios.get('/api/auth/profile', { headers: { Authorization: `Bearer ${token}` } })
      .then(res => setUser(res.data))
      .catch(() => setUser(null))
  }, [])

  const handleSignOut = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  if (!user) return <p>Loading...</p>

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl mb-4">Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded" onClick={handleSignOut}>Sign Out</button>
    </div>
  )
}
