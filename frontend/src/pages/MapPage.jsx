import { useEffect } from 'react'

export default function MapPage() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://maps.googleapis.com/maps/api/js?key=YOUR_KEY&callback=initMap'
    script.async = true
    window.initMap = function () {
      new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 0, lng: 0 },
        zoom: 2
      })
    }
    document.body.appendChild(script)
  }, [])

  return (
    <div>
      <h2 className="text-2xl mb-4">Map</h2>
      <div id="map" className="w-full h-96"></div>
    </div>
  )
}
