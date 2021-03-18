
import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer px-0 px-lg-3">
        <Container fluid>
          <nav>
            <ul className="footer-menu">
              <li>
                <a href="/" onClick={(e) => e.preventDefault()}>
                  Dashboard
                </a>
              </li>
              <li>
                <a href="https://google.com" target="_blank">
                  Google
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank">
                  Instagram
                </a>
              </li>
            </ul>
            <p className="copyright text-center">
              © {new Date().getFullYear()}{" "}
              Grupo 2 - Sistemas Distribuidos
            </p>
          </nav>
        </Container>
      </footer>
    );
  }
}

export default Footer;
