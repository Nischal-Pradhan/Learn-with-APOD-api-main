import React,
  { useState,
    useEffect }
    from 'react'
import NavBar from './NavBar';

    const apiKey = process.env.REACT_APP_NASA_KEY;

export default function NasaPhoto() {

  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
        );
        const data = await res.json();
        setPhotoData(data);
        console.log(data);
    }
  })

  if(!photoData) return <div/>

  return (
    <div className='content-nasa'>
      <NavBar/>
      <div className='contents'>
        <img
        src={photoData.url}
        alt={photoData.title} 
        className='nasa-photo'
        />
        <div className="para">
          <h1>{photoData.title}</h1>
          <p>Date: {photoData.date}</p>
          <p>Explanation: <br /> {photoData.explanation}</p>
        </div>
      </div>
    </div>
  )
}

