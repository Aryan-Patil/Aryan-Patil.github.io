import React, { useEffect, useState } from 'react'
import "./components.css";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { FaSchool } from 'react-icons/fa';
import { TbBellSchool } from 'react-icons/tb';
import { IoSchool } from 'react-icons/io5';

export default function About() {
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
          <div className="height">

            <div className='html  ms-5'>
              {"<"}h{">"}
            </div>
            <div className='animate ms-5' >
              <div className='about-main class'>
                <p className='hover'>I</p>
                <p className='hover'>,</p>
                <div className='space'></div>
                <p className='hover'>M</p>
                <p className='hover'>e</p>
                <div className='space'></div>
                <p className='hover'>{"&"}</p>
                <div className='space'></div>
                <p className='hover'>M</p>
                <p className='hover'>y</p>
                <p className='hover'>s</p>
                <p className='hover'>e</p>
                <p className='hover'>l</p>
                <p className='hover'>f</p>
                <div className='html m-5'>
                  {"<"}/h{">"}
                </div>
              </div>
            </div>
          </div>

          <div className="row row-cols-1 mt-4 row-cols-md-2 g-0">

            <div className="col">
              <Player
                autoplay
                loop
                src="https://assets8.lottiefiles.com/packages/lf20_bb9h37bt.json"
                style={{ height: '400px', width: '300px' }}
              >
                <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
              </Player>
            </div>
            <div className='col'>

              <div className='ms-5 class-m'>
                <div className='html'>{"<"}p{">"}</div>
                <div className='about_info'>
                  <h1>Hello!</h1>
                  <p>My name is Aryan. Currently I am -</p>
                  <ul>
                    <li>in my sophomore year pursuing Bachelors Degree in Computer Science & Engineering from India.</li>
                    <li>learning Data Structures & Algorithms.</li>
                    <li>working on improving my Fullstack Web Development Skills by applying what I learn in my projects.</li>
                  </ul>
                </div>
                <div className='html'>{"<"}/p{">"}</div>
                </div>
            </div>
          </div>
                <div className='box-container'>
                <h1>Education</h1>
                  <div className='box'>
                    <IoSchool className='logo' />
                    <div className='content'>
                      <h2>Bachelor’s Computer Science Engineering</h2>
                      <p>Terna Engineering College Navi Mumbai</p>
                      <ul>
                        <li>First Year CGPA: 8.44</li>
                        <li>Second Year CGPA: 8.44</li>
                      </ul>
                    </div>
                    <div className='year'>2020-2024</div>
                  </div>
                  <div className='box'>
                    <FaSchool className='logo' />
                    <div className='content'>
                      <h2>XII Science</h2>
                      <p>Changu Kana Thakur Jr. College</p>
                      <ul>
                        <li>75%  (Maharashtra State Board)</li>
                        <li>Studied Physics, Chemistry and Maths.</li>
                      </ul>
                    </div>
                    <div className='year'>2018-2020</div>
                  </div>
                  <div className='box'>
                    <TbBellSchool className='logo' />
                    <div className='content'>
                      <h2>X [School]</h2>
                      <p>St. George School</p>
                      <ul>
                        <li>82%  (Maharashtra State Board)</li>
                      </ul>
                    </div>
                    <div className='year'>2018</div>
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
