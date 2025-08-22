import { useEffect, useState } from 'react'
import axios from 'axios'

function MaidCard({ maid }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <h3 className="text-lg font-semibold">{maid.name}</h3>
      <p>Service: {maid.service}</p>
      <p>Contact: {maid.contact}</p>
    </div>
  )
}

export default function MaidPage() {
  const [maids, setMaids] = useState([])

  useEffect(() => {
    axios.get('/api/maids')
      .then(res => setMaids(res.data))
      .catch(() => setMaids([]))
  }, [])

  return (
    <div>
      <h2 className="text-2xl mb-4">Available Maids</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {maids.map(m => <MaidCard key={m._id} maid={m} />)}
      </div>
    </div>
  )
}
