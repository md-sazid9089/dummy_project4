import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function SignUpPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const navigate = useNavigate()

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    axios.post('/api/auth/signup', form).then(() => navigate('/login'))
  }

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="w-full border p-2" name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <input className="w-full border p-2" type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <input className="w-full border p-2" type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} />
        <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition" type="submit">Register</button>
      </form>
    </div>
  )
}
