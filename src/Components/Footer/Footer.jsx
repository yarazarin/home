import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="ico">
        <a
          href="mailto:%20uraeel@gmail.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-solid fa-square-envelope"></i>
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-twitter-square"></i>
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-instagram-square"></i>
        </a>
      </div>
      <div className="Rights">
        <pre> Yara Zarin © 2022 | All rights reserved</pre>
      </div>
    </div>
  );
};

export default Footer;
