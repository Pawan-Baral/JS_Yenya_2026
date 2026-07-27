import "./footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div>
          <h2>MovieFlex</h2>
          <p>
            Discover thousands of movies powered by TMDB.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/movies">Movies</a>
          <a href="/contact">Contact</a>
        </div>

        <div>
          <h3>About</h3>

          <p>Movie Database</p>
          <p>Popular Movies</p>
          <p>Latest Releases</p>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 MovieFlex • Built using React + TMDB API
      </p>

    </footer>
  );
}
export default Footer;