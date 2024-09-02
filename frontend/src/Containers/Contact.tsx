import "./contact.css";

function Contact() {
  return (
    <div className="container" id="contact">
      <h2>Contactați-ne</h2>

      <div className="linksCnt">
        <a href="#" target="_blank">
          <img className="poza" src=".\images\profiles\youtube.png" alt="" />
          YouTube
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=100057088977145"
          target="_blank"
        >
          <img className="poza" src=".\images\profiles\facebook.png" alt="" />
          Facebook
        </a>

        <a href="https://www.instagram.com/i.deal_electronics/" target="_blank">
          <img className="poza" src=".\images\profiles\instagram.png" alt="" />
          Instagram
        </a>

        <a href="#" target="_blank">
          <img className="poza" src=".\images\profiles\tik-tok.png" alt="" />
          TikTok
        </a>
      </div>
    </div>
  );
}

export default Contact;
