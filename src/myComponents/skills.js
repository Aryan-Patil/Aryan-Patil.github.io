import React, { useEffect, useState } from 'react'
import "./components.css";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Language from './language';
import Allbackground from '../background/allbackground';

export default function Skills() {
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
        <>
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
              <p className='hover'>S</p>
              <p className='hover'>k</p>
              <p className='hover'>i</p>
              <p className='hover'>l</p>
              <p className='hover'>l</p>
              <p className='hover'>s</p>
              <div className='space'></div>
              <p className='hover'>{"&"}</p>
              <div className='space'></div>
              <p className='hover'>L</p>
              <p className='hover'>a</p>
              <p className='hover'>n</p>
              <p className='hover'>g</p>
              <p className='hover'>u</p>
              <p className='hover'>a</p>
              <p className='hover'>g</p>
              <p className='hover'>e</p>
              <p className='hover'>s</p>
              <div className='html m-5'>
                {"<"}/h{">"}
              </div>
            </div>
          </div>
          <div className="row row-cols-1 mt-4 row-cols-md-2 g-2">
            <div className="col height">
              <div className='ms-5 class-m'>
                <div className='html display'>{"<"}p{">"}</div>
                <div className='text'>I create successful responsive websites that are fast, easy to use, and built with best practices. 
                  The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts.</div>
                <div className='text'>I also have backend developer experience with popular tools such as PHP, Node.js, Firebase, Mysql.</div>
                <div className='html'>{"<"}/p{">"}</div>
                <div className='skills-range'>
                  <span>Front-end</span>
                  <footer>
                    <div id='frontend-range'></div>
                  </footer>
                </div>
                <div className='skills-range'>
                  <span>Backend-end</span>
                  <footer>
                    <div id='backend-range'></div>
                  </footer>
                </div>
                <div className='skills-range'>
                  <span>Android Development</span>
                  <footer>
                    <div id='android-range'></div>
                  </footer>
                </div>
              </div>
            </div>
            
            <div className="col color">
            <Language/>
            </div>
            
          </div>

          <div className='html'>
            <p className='m-3'>
              {"<"}/body{">"}
            </p>
            {"<"}/html{">"}
          </div>
        </div>
        
        </>
      )
      }

    </>
  )
}


