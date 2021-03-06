import { useState } from 'react';
import { getScriptText } from '../getScriptText.js';

export default function Content() {
  const [customKeyword, setCustomKeyword] = useState('');
  const isKeywordTooLong = customKeyword.length > 15;
  const isWarningStyle = isKeywordTooLong ? 'warning' : '';

  const downloadFile = (e, isDefault = true) => {
    let file;
    if (isDefault) { //default
      file = new Blob([getScriptText()], {type: "text/javascript"});
    } else {
      file = new Blob([getScriptText(customKeyword)], {type: "text/javascript"});
    }

    const a = e.parentElement;
    a.href = URL.createObjectURL(file);
    a.download = "social-distancer.min.js";
  }

  return (
    <main>
      <section className="singular">
        <article>
          <h2>Instantly abide by the rules and go from this to <span className="result">this</span></h2>
        </article>
      </section>

      <section>
        <article className="web-x"></article>
        <article>
          <h4>A flexible, easy-to-add script for your website to enforce social distancing even on the web</h4>
        </article>
      </section>

      <section>
        <article>
          <h5>So we can go from this</h5>
        </article>
        <article>
          <a href="https://sharonzheng.com/" target="_blank" rel="noopener noreferrer"><img alt="before-social-distancing" src="./assets/example-before.png" /></a>
        </article>
      </section>

      <section>
        <article>
          <h5>To this</h5>
        </article>
        <article>
          <a href="https://sharonzheng.com/" target="_blank" rel="noopener noreferrer"><img alt="after-social-distancing" src="./assets/example-after.png" /></a>
        </article>
      </section>

      <section className="singular instr">
        <article>
          <h5>If you have a keyboard...</h5>
          <h3>
            Try it out now, type "<u>stayhome</u>" to toggle social distancing on this site
          </h3>
          <h4>
            No visual cues or visible on-screen indicators by default— it's on you to spread the word and tell your users of the feature. I know we didn't plan for this and text input without visual feedback is hard, but I guess that's how social distancing is too
          </h4>
        </article>
      </section>

      <section className="singular">
        <article className="heading">
          <h3>Installation</h3>

          <h4>
            <a id="downloader">
              <button onClick={(e) => downloadFile(e.target)}>
                <div className="label">Download minified script</div>
                <svg height="0.8em" viewBox="0 0 512 512" width="0.8em" xmlns="http://www.w3.org/2000/svg"><path d="m409.785156 278.5-153.785156 153.785156-153.785156-153.785156 28.285156-28.285156 105.5 105.5v-355.714844h40v355.714844l105.5-105.5zm102.214844 193.5h-512v40h512zm0 0"/></svg>
              </button>
            </a>
          </h4>
        </article>
      </section>

      <section className="singular">
        <article className="web-x"></article>
        <article>
          <h4>
            Adding the script file to your website is easy. Simply paste the following to your html file, right after <code>{`</body>`}</code>. Make sure the source is pointing to your downloaded file:
          </h4>
          <h4 className="code">
            <code>
              {`<script type="text/javascript" src="./social-distancer.min.js"></script>`}
            </code>
          </h4>
        </article>
      </section>

      <section className="singular">
        <article className="heading">
          <h3>Customization</h3>
        </article>
      </section>

      <section className="singular centered">
        <article>
          <h4>
            Want to use a different keyword? Set a <span className={isWarningStyle}>short</span> one here <span className="together">
              "<input className={isWarningStyle} onChange={(e) => setCustomKeyword(e.target.value)} value={customKeyword} placeholder="set keyword" type="text" />"
            </span> to download your custom script below
          </h4>
          <h4>
            <a id="downloader">
              <button disabled={!customKeyword || isKeywordTooLong} onClick={(e) => downloadFile(e.target, false)}>
                <div className="label">Download custom minified script</div>
                <svg height="0.8em" viewBox="0 0 512 512" width="0.8em" xmlns="http://www.w3.org/2000/svg"><path d="m409.785156 278.5-153.785156 153.785156-153.785156-153.785156 28.285156-28.285156 105.5 105.5v-355.714844h40v355.714844l105.5-105.5zm102.214844 193.5h-512v40h512zm0 0"/></svg>
              </button>
            </a>
          </h4>
        </article>
      </section>

      <style jsx>{`
        main {
          border: 1px solid #333;
          background-color: #eee;
          padding-bottom: 25px;
        }

        @media only screen and (max-width: 767px) {
          main {
            margin-top: 90px;
            padding-bottom: 0;
          }
        }

        main > section:first-child {
          border-top: none;
        }

        section {
          border-top: 1px solid #333;
          display: flex;
        }

        section article:nth-child(1) {
          width: 25vw;
        }

        section.singular article:nth-child(1) {
          width: 100%;
        }

        section.singular article.web-x {
          width: auto;
        }

        section article:nth-child(2) {
          border-left: 1px solid #333;
          width: 75vw;
        }

        main section:last-child {
          border-bottom: 1px solid #333;
        }

        article {
          padding: 50px 70px 90px;
        }

        article.heading {
          padding: 30px 70px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        article img {
          width: 100%;
        }

        @media only screen and (max-width: 992px) {
          article {
            padding: 30px 60px 70px;
          }
        }

        @media only screen and (max-width: 767px) {
          article.heading {
            padding-left: 20px;
            padding-right: 20px;
          }

          section {
            flex-wrap: wrap;
            padding: 15px 0 40px;
          }

          main section:last-child {
            border-bottom: none;
          }

          article {
            width: 100% !important;
            border-left: none !important;
            padding: 15px 20px;
          }

          .web-x {
            display: none;
          }

          .web-x ~ h4 {
            margin-top: 0;
          }
        }

        button .label {
          pointer-events: none;
        }

        button svg {
          margin-left: 25px;
        }

        button svg,
        button:disabled:hover svg {
          transform: rotate(-90deg);
          transition: 0.2s linear transform;
        }

        button:hover svg {
          transform: rotate(0);
          transition: 0.2s linear transform;
        }

        @media only screen and (max-width: 767px) {
          button {
            padding: 10px 20px;
            text-align: left;
            width: 100%;
          }

          button .label {
            width: 60%;
          }

          button svg {
            margin: 0;
          }
        }
      `}</style>
    </main>
  )
}
