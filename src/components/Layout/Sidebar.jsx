"use client"
import React, { useState, useEffect } from "react";
import Image from 'next/image'
import Avatar from '@/assets/radhe.svg';
// Import react scroll

const Sidebar = () => {
    const [tongle, setTongle] = useState(false)
    return (
        <>
            <aside className={`sidebar ${tongle ? ' active' : ''}`} >
                <div className="sidebar-info">

                    <figure className="avatar-box">
                        <Image
                            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                            src={Avatar}
                            alt="Next.js Logo"
                            width={150}
                            height={150}
                            priority
                        />
                    </figure>

                    <div className="info-content flex flex-col items-center">
                        <h1 className="name" title="Radheshyam Saini">Radheshyam Saini</h1>

                        <div className="flex flex-col items-center gap-2 mt-2">
                            <p className="title">Full Stack Developer</p>
                            <a href="/RadheCV.pdf" download="Radheshyam_Saini_CV.pdf" className="download-cv-btn">
                                Download CV <i className="fa-solid fa-download"></i>
                            </a>
                        </div>
                    </div>

                    <button className="info_more-btn" onClick={() => setTongle(!tongle)}>
                        <span>Show Contacts</span>
                        <i className="fa-solid fa-chevron-down"></i>
                    </button>

                </div>
                <div className="sidebar-info_more">

                    <div className="separator"></div>

                    <ul className="contacts-list">

                        <li className="contact-item">

                            <div className="icon-box">
                                <i className="fa-regular fa-envelope"></i>
                            </div>

                            <div className="contact-info">
                                <p className="contact-title">Email</p>
                                <a href="mailto:rdsaini220@gmail.com" className="contact-link">rdsaini220@gmail.com</a>
                            </div>

                        </li>

                        <li className="contact-item">

                            <div className="icon-box">
                                <i className="fa-solid fa-phone"></i>
                            </div>

                            <div className="contact-info">
                                <p className="contact-title">Phone</p>
                                <a href="tel:+919772168220" className="contact-link">+91 9772-168-220</a>
                            </div>

                        </li>

                        <li className="contact-item">

                            <div className="icon-box">
                                <i className="fa-brands fa-linkedin"></i>
                            </div>

                            <div className="contact-info">
                                <p className="contact-title">Linkedin</p>
                                <a href="https://www.linkedin.com/in/rdsaini220/" target="_target" className="contact-link">https://www.linkedin.com/in/rdsaini220</a>
                            </div>

                        </li>

                        <li className="contact-item">

                            <div className="icon-box">
                                <i className="fa-brands fa-github"></i>
                            </div>

                            <div className="contact-info">
                                <p className="contact-title">Github</p>
                                <a href="https://github.com/rdsaini220" target="_target" className="contact-link">https://github.com/rdsaini220</a>
                            </div>
                        </li>

                        <li className="contact-item">

                            <div className="icon-box">
                                <i className="fa-solid fa-location-dot"></i>
                            </div>

                            <div className="contact-info">
                                <p className="contact-title">Current Location</p>
                                <address>Mohali, Punjab</address>
                            </div>

                        </li>
                        <li className="contact-item">

                            <div className="icon-box">
                                <i className="fa-solid fa-location-dot"></i>
                            </div>

                            <div className="contact-info">
                                <p className="contact-title">Home Town</p>
                                <address>Sikar, Rajasthan</address>
                            </div>

                        </li>

                    </ul>

                    <div className="separator"></div>

                    {/* <ul className="social-list">
                <li className="social-item">
                    <a href="#" className="social-link">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </li>
                <li className="social-item">
                    <a href="#" className="social-link">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                </li>
                <li className="social-item">
                    <a href="#" className="social-link">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                </li>
            </ul> */}

                </div>
            </aside>
        </>
    );
};

export default Sidebar;
