import { useEffect, useState } from 'react'
import Content from '../components/content'
import Head from 'next/head'

export default function Home() {
  const [isBarVisible, setBarVisibility] = useState(false)
  const [isScriptLoaded, setScriptLoaded] = useState(false)
  let wholeBody, wholeHeader, HEADER_HEIGHT, TRIGGER_POINT;
  let socialDistancerScript = null;

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

    if (!isScriptLoaded) {
      const socialDistancerScript = document.createElement('script');
      socialDistancerScript.setAttribute('src','/social-distancer.min.js');
      document.head.appendChild(socialDistancerScript);

      setScriptLoaded(true);
    }
  })

  return (
    <div className={`${isBarVisible ? 'welcomed' : ''}`}>
      <Head>
        {/* Hotjar Tracking Code for https://social-distance-this-for.me */}
        <script sangerouslySetInnerHTML={{
          __html: `(function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:2271649,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`
        }} />
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=https://www.googletagmanager.com/gtag/js?id=UA-75770644-20"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-75770644-20', {
            page_path: window.location.pathname,
          });
        `,
          }}
        />
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KW7XRPX');`,
        }}>
        </script>

        <title>Social Distance This for Me</title>
        <link rel="icon" href="/favicon.ico" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Let's make the internet social distance too"
        />
        <meta property="og:image" content="https://distancing.now.sh/preview.png" />
      </Head>
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KW7XRPX" height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe></noscript>
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

      <Content />

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

        .welcomed header .arrow,
        .welcomed header .scroll-to-begin {
          margin-top: 30px;
          opacity: 0;
        }

        header .arrow,
        header .scroll-to-begin {
          margin-top: 30px;
          text-align: center;
          opacity: 1;
          transition: 1s linear opacity;
        }

        header .arrow {
          font-size: 3rem;
          transform: rotate(90deg);
        }

        @media only screen and (min-width: 768px) {
          .welcomed header .arrow,
          .welcomed header .scroll-to-begin {
            transition: 1s linear opacity;
            opacity: 0;
          }
        }

        @media only screen and (max-width: 767px) {
          header {
            min-height: 0;
            margin-top: 50px;
          }

          header .arrow,
          header .scroll-to-begin {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}
