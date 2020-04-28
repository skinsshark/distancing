import { useEffect, useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [isBarVisible, setBarVisibility] = useState(false)
  let wholeBody, wholeHeader, HEADER_HEIGHT, TRIGGER_POINT;

  const determineBarVisibility = () => {
   window.scrollY > TRIGGER_POINT
   ? !isBarVisible && setBarVisibility(true)
   : isBarVisible && setBarVisibility(false)
  }

  useEffect(() => {
    wholeBody = document.querySelector('body');
    wholeHeader = document.querySelector('header');
    HEADER_HEIGHT = wholeHeader.offsetHeight;
    TRIGGER_POINT = HEADER_HEIGHT/5;
    window.addEventListener('scroll', determineBarVisibility)
  })

  return (
    <div className={`${isBarVisible ? 'welcomed' : ''}`}>
      <Head>
        <title>A Journal</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Ovo&display=swap" rel="stylesheet" />
      </Head>

      <header>
        <h1>Social Distance This for Me</h1>
        <nav id="topBar">
          <span>Social</span>
          <span>Distance</span>
        </nav>
        <nav id="bottomBar">
          <span>This</span>
          <span>for</span>
          <span>Me</span>
        </nav>
        <div className="scroll-to-begin">
          <p>Scroll to Begin</p>
        </div>
        <div className="arrow">&#10230;</div>
      </header>

      <style jsx>{`
        header {
          min-height: 85vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          transition: 1s linear opacity;
        }

        nav {
          background-color: #9AA5BB;
          opacity: 1;
          position: fixed;
          font-size: 3em;
          display: flex;
          justify-content: space-between;
          width: 100vw;
          z-index: 9999;
        }

        nav#topBar {
          top: -90px;
          padding: 35px 90px 0;
          border-bottom: 1px solid #333;
          transition: 1s linear top;
        }

        nav#bottomBar {
          bottom: -90px;
          border-top: 1px solid #333;
          padding: 0 90px 35px;
          transition: 1s linear bottom;
        }

        @media only screen and (min-width: 768px) {
          .welcomed h1 {
            transition: 1s linear all;
            opacity: 0;
          }

          .welcomed nav {
            opacity: 1;
            position: fixed;
          }

          .welcomed nav span {
            display: block;
          }

          .welcomed nav#topBar {
            top: 0;
            transition: 1s linear top;
          }

          .welcomed nav#bottomBar {
            bottom: 0;
            transition: 1s linear bottom;
          }
        }
      `}</style>
    </div>
  )
}
