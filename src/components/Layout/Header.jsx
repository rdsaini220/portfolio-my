"use client"
import React, { useState, useEffect } from "react";
import Link from 'next/link'

// Import react scroll

const Header = ({}) => {
  return (
    <>
    <header className="header">
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link className="navbar-link" href="/experience" >Experience</Link>
                </li>

                <li className="navbar-item">
                    <Link className="navbar-link" href="/about" >About</Link>
                </li>

                <li className="navbar-item">
                    <Link className="navbar-link" href="/projects" >Projects</Link>
                </li>

                <li className="navbar-item">
                    <Link className="navbar-link" href="/blogs" >Blogs</Link>
                </li>

                <li className="navbar-item">
                    <Link className="navbar-link" href="/contact" >Contact</Link>
                </li>
            </ul>
        </nav>
    </header>
    </>
  );
};

export default Header;
