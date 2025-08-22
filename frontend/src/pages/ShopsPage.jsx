import { useEffect, useState } from 'react'
import axios from 'axios'

function ShopCard({ shop }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <h3 className="text-lg font-semibold">{shop.name}</h3>
      <p>{shop.description}</p>
    </div>
  )
}

export default function ShopsPage() {
  const [shops, setShops] = useState([])

  useEffect(() => {
    axios.get('/api/shops')
      .then(res => setShops(res.data))
      .catch(() => setShops([]))
  }, [])

  return (
    <div>
      <h2 className="text-2xl mb-4">Nearby Shops</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {shops.map(s => <ShopCard key={s._id} shop={s} />)}
      </div>
    </div>
  )
}
