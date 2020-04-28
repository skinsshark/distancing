export default function Content() {
  return (
    <main>
      <section className="singular">
        <article>
          <h2>Instantly abide by the rules and go from this to <span className="result">this</span></h2>
        </article>
      </section>

      <section>
        <article></article>
        <article>
          <h4>A customizable, easy-to-add script for your website to enforce social distancing even on the web</h4>
        </article>
      </section>

      <section>
        <article>
          <p>So we can go from this</p>
        </article>
        <article>
          <img src="./assets/example-before.png" />
        </article>
      </section>

      <section>
        <article>
          <p>To this</p>
        </article>
        <article>
          <img src="./assets/example-after.png" />
        </article>
      </section>

      <section className="singular">
        <article>
          <h3>
            To try it out now, type "<u>STAYHOME</u>" to toggle social distancing on this site
          </h3>
          <h4>
            No visual cues, no visible feedback by default, so now it's your job to spread the word and help the user become aware and make use of the feature
          </h4>
        </article>
      </section>

      <section className="singular">
        <article className="heading">
          <h3>Installation</h3>
        </article>
      </section>

      <section className="singular">
        <article>
          <h4>
            To try it out now, type "<u>STAYHOME</u>" to toggle social distancing on this site (yes, blindly)
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

        section article:nth-child(2) {
          border-left: 1px solid #333;
          width: 75vw;
        }

        article {
          padding: 50px 90px 90px;
        }

        article.heading {
          padding: 30px 70px;
        }

        article img {
          width: 100%;
        }
      `}</style>
    </main>
  )
}