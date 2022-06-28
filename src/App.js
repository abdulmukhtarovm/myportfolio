import React, { useEffect, useState } from 'react'
import HomePageLeft from './components/HomePageLeft'
import HomePageRight from './components/HomePageRight'

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1400);
  }, []);
  return (
    <>


      {
        isLoading ?
          <>

            <div id="preloader">
              <div className="loader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </>
          :
          <div className="d-flex flex-md-column">
            <HomePageLeft />
            <HomePageRight />
          </div>
      }
    </>
  )
}

export default App