import React, { useEffect, useState } from 'react'
import "./components.css";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Card from "./components/Card";
import { properties } from "./constants/data";
import Allbackground from '../background/allbackground';

export default function Projects() {
  const [post, setPost] = useState(false)
  useEffect(() => {
    setPost(true)
    setTimeout(() => {
      setPost(false)
    }, 3000);


  }, [])
  return (
    <>
      {post ? (<div className='loader'>
        <Player
          className='loader-align'
          autoplay
          loop
          src="https://assets6.lottiefiles.com/packages/lf20_w51pcehl.json"
        >
          <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
        </Player>
        <p>Loading...</p>
      </div>) : (
        <div className='Home components'>
          <Allbackground />
          <div className='html'>
            {"<"}html{">"}
            <div className='m-3'>
              {"<"}body{">"}
            </div>
          </div>

              <div className='html  ms-5'>
                {"<"}h{">"}
              </div>
              <div className='animate ms-5' >
                <div className='about-main class'>
                  <li className='hover'>P</li>
                  <li className='hover'>r</li>
                  <li className='hover'>o</li>
                  <li className='hover'>j</li>
                  <li className='hover'>e</li>
                  <li className='hover'>c</li>
                  <li className='hover'>t</li>
                  <li className='hover'>s</li>
                  <div className='html m-5'>
                    {"<"}/h{">"}
                  </div>
                </div>
              </div>
              <div className="App">
      <div className="properties">
        {properties.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </div>
    </div>
          <div className='html'>
            <p className='m-3'>
              {"<"}/body{">"}
            </p>
            {"<"}/html{">"}
          </div>
        </div>

      )
      }

    </>
  )
}
