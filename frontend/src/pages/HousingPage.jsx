import { useEffect, useState } from 'react'
import axios from 'axios'

function HousingCard({ house }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <h3 className="text-lg font-semibold">{house.title}</h3>
      <p>Rent: {house.rent}</p>
      <p>Location: {house.location}</p>
      <p>Contact: {house.contact}</p>
    </div>
  )
}

export default function HousingPage() {
  const [houses, setHouses] = useState([])

  useEffect(() => {
    axios.get('/api/housing')
      .then(res => setHouses(res.data))
      .catch(() => setHouses([]))
  }, [])

  return (
    <div>
      <h2 className="text-2xl mb-4">Housing Options</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {houses.map(h => <HousingCard key={h._id} house={h} />)}
      </div>
    </div>
  )
}
