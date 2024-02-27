import React, { useEffect, useState } from 'react';
import axios from 'axios'
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

const GeoLocation = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);


  const getMap = async (latlong) => {
    // const data = await axios.get(`${CORS_PROXY}+https://www.google.com/maps/search/nearby+hospitals/@${latlong}`,{
    //   'Content-Type': 'application/json',
    //   'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:97.0) Gecko/20100101 Firefox/97.0'
    // })

    // const data = await fetch(`https://www.google.com/maps/search/nearby+hospitals/@${latlong}`,{
    //   method:"GET",
    //   headers:{
    //     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:97.0) Gecko/20100101 Firefox/97.0'
    //   },
    //   credentials: 'include',
    //   mode:'no-cors'
    // })
    // console.log(await data.blob());

    // var options = {
    //   method: 'GET',
    //   url: 'https://www.google.com/maps/search/nearby+hospitals/@12.8117911,80.0423143',
    //   headers: {Accept: '*/*', 'User-Agent': 'Thunder Client (https://www.thunderclient.com)'}
    // };
    
    // axios.request(options).then(function (response) {
    //   console.log(response.data);
    // }).catch(function (error) {
    //   console.error(error);
    // });

  }



  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          setError(null);
          getMap(position.coords.latitude + "," + position.coords.longitude)
        },
        (error) => {
          setError(error.message);
          console.error(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
      console.error("Geolocation is not supported by this browser.");
    }
  };



  useEffect(() => {
    getLocation()
  }, [])


  return (
    <div>
      <button onClick={getLocation}>Get Location</button>
      {latitude && longitude && (
        <div>
          Latitude: {latitude}, Longitude: {longitude}
        </div>
      )}
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default GeoLocation;
