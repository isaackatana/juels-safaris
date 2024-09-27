import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

const photos = [
  'https://idsb.tmgrup.com.tr/ly/uploads/images/2023/09/29/294329.jpg',
  'https://idsb.tmgrup.com.tr/ly/uploads/images/2023/09/29/294330.jpg',
  'https://idsb.tmgrup.com.tr/ly/uploads/images/2023/09/29/294328.jpg',
];

function Home() {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <Helmet>
      <title>Juels Safaris | Home</title>
    </Helmet>
    <div className="home">
        <div className="hero">

          {photos.map((photo, index) => (
            <div key={index} className={`carousel-slide ${index === currentIndex ? 'active' : ''}`} >
              <img src={photo} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        
        </div>
    </div>
    </>
  )
}

export default Home