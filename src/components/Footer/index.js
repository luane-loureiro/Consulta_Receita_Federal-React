import React from "react";
import './style.css'

export default function Footer() {
  return (
    <footer>
    <div class="footer-Box">
        <h3>Desenvouvido por Devland 2025</h3>

        <div id="Social-Box">
            <a className="menu__link" href="#sobre">
                <i className="bi bi-facebook"></i>
            </a>

            <a className="menu__link" href="#sobre">
                <i className="bi bi-instagram"></i>
            </a>

            <a className="menu__link" href="#sobre">
                <i className="bi bi-github"></i>
            </a>

            <a className="menu__link" href="#sobre">
                <i className="bi bi-globe2"></i>
            </a>
        </div>


    </div>
</footer>

  )
};