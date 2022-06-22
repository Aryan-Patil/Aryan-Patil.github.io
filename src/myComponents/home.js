import React, { useEffect, useState } from 'react'
import "./components.css";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
export default function Home() {
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
            <div className='html'>
              {"<"}html{">"}
              <div className='m-3'>
                {"<"}body{">"}
              </div>
            </div>

            <div className="row row-cols-1 mt-4 row-cols-md-2 g-2">
              <div className="col height">
                <div className='html  ms-5'>
                  {"<"}h{">"}
                </div>
                <div className='animate ms-5' >
                  <div className='class'>
                    <li className='hover'>H</li>
                    <li className='hover'>i</li>
                    <li className='hover'>,</li>
                  </div >
                  <div className='class'>
                    <li className='hover'>I</li>
                    <li className='hover'>'</li>
                    <li className='hover'>m</li>
                    <li className='space'></li>
                    <li className='hover'>A</li>
                    <li className='hover'>r</li>
                    <li className='hover'>y</li>
                    <li className='hover'>a</li>
                    <li className='hover'>n</li>
                  </div>
                  <div className='class'>
                    <li className='hover'>C</li>
                    <li className='hover'>s</li>
                    <li className='space'></li>
                    <li className='hover'>S</li>
                    <li className='hover'>t</li>
                    <li className='hover'>u</li>
                    <li className='hover'>d</li>
                    <li className='hover'>e</li>
                    <li className='hover'>n</li>
                    <li className='hover'>t</li>
                    <div className='html m-5'>
                      {"<"}/h{">"}
                    </div>
                  </div>
                </div>
                <div className='ms-5 class-m'>
                  <div className='html'>{"<"}p{">"}</div>
                  <div className='wrapper'>
                    <div className='static-txt'>I am</div>
                    <div className='dynamic-txt'>
                      <li>Keen Learner</li>
                      <li>Frontend Developer</li>
                      <li>Backend Developer</li>
                    </div>
                  </div>
                  <div className='html'>{"<"}/p{">"}</div>
                </div>
                <a href='' className='btn ms-5 btn-danger'>Download Cv</a>
              </div>
              <div className="col">
                <Player
                  autoplay
                  loop
                  src="https://assets9.lottiefiles.com/packages/lf20_osrbi94c.json"
                  style={{ height: '500px', width: '500px' }}
                >
                  <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                </Player>
              </div>
            </div>

            <div className='html'>
              <p className='m-3'>
                {"<"}/body{">"}
              </p>
              {"<"}/html{">"}
            </div>
          
          <div class="area" >
            <ul class="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div >
        </div>
      )
      }

    </>
  )
}
