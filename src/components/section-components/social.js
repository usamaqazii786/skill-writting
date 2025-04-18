import React, { Component } from "react";

class Social extends Component {
  render() {
    return (
      <div className="ltn__social-media">
        <ul>
          <li>
            <a
              href="https://www.facebook.com/people/Eza-Consultancy/61560131918581/?mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/ezaconsultancy90/"
              target="_blank"
              rel="noopener noreferrer"
              title="Linkedin"
            >
              <i className="fab fa-linkedin" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/ezasconsultancy.pk/?igsh=MXNrdnJ6cmhiMTF3dg%3D%3D"
              title="Instagram"
            >
              <i className="fab fa-instagram" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Social;
