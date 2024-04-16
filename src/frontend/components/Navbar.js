import React from "react";
import "../styles/Navbar.css";

export function Navbar() {
  return (
    <div>
      <header className="header">
          <a className="brand-name" href="/">Python Farms</a>
        <nav className="navbar">

          <a href="/">Home</a>

          <a href="/predict">Predict</a>

          <a href="/about-us">About Us</a>

          <a href="/login">Login</a>
        </nav>
      </header>
    </div>
  );
}
