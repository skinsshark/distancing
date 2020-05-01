import { getScriptText } from '../../getScriptText.js';

export default function Content() {
  const downloadDefaultFile = () => {
    const a = document.getElementById("downloader");
    const file = new Blob([getScriptText()], {type: "text/javascript"});
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
          <img src="./assets/example-before.png" />
        </article>
      </section>

      <section>
        <article>
          <h5>To this</h5>
        </article>
        <article>
          <img src="./assets/example-after.png" />
        </article>
      </section>

      <section className="singular">
        <article>
          <h3 className="web-x">
            To try it out now, type "<u>STAYHOME</u>" to toggle social distancing on this site
          </h3>
          <h4>
            No visual cues or visible on-screen indicators by default, so it's your job to spread the word and tell your users of the feature. I know text input without visual feedback is hard, but so is social distancing, and you've got that
          </h4>
        </article>
      </section>

      <section className="singular">
        <article className="heading">
          <h3>Installation</h3>

          <h4>
            <a id="downloader">
              <button onClick={downloadDefaultFile}>
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
            Adding the script file to your website is easy. Simply paste the following to your html file, right above <code>{`</body>`}</code>. Make sure the source is pointing to your downloaded file:
          </h4>
          <h4 className="code">
            <code>
              {`<script type="text/javascript" src="./social-distancer.min.js"></script>`}
            </code>
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
          padding: 50px 75px 90px;
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

        button svg {
          transform: rotate(-90deg);
          margin-left: 25px;
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
