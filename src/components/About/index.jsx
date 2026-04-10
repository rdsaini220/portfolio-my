import React from 'react'
import Image from 'next/image'

import IconDesign from '@/assets/icon-design.svg'; 
import IconDev from '@/assets/icon-dev.svg'; 
import IconApp from '@/assets/icon-app.svg'; 
import IconPhoto from '@/assets/icon-photo.svg'; 
import Avatar1 from '@/assets/avatar-1.png'; 
import Avatar2 from '@/assets/avatar-2.png'; 
import Avatar3 from '@/assets/avatar-3.png'; 
import Avatar4 from '@/assets/avatar-4.png'; 
import Logo1 from '@/assets/logo-1-color.png'; 
import Logo2 from '@/assets/logo-2-color.png'; 
import Logo3 from '@/assets/logo-3-color.png'; 
import Logo4 from '@/assets/logo-4-color.png'; 
import Logo5 from '@/assets/logo-5-color.png'; 
import Logo6 from '@/assets/logo-6-color.png'; 

const AboutPage = () => {
  return (
    <div className="about">
        <header>
          <h2 className="h2 article-title">About me</h2>
        </header>

        <section className="about-text">
          <p>
            Self-motivated Full Stack Developer with 4+ years of experience specializing in React.js, Next.js, and Cross-Platform Mobile Development. Proven track record in architecting high-performance systems and scalable digital solutions, with a strong focus on clean code and efficient time management.
          </p>
        </section>

        <section className="skills">
          <h3 className="h3 skills-title">My skills</h3>
          <ul className="skill-card">
            <li>React.js</li>
            <li>Next.js</li>
            <li>javascript</li>
            <li>Typescript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Tailwind CSS</li>
            <li>Shadcn UI</li>
            <li>Tanstack</li>
            <li>Git</li>
            <li>Express.js</li>
            <li>Nest.js</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>Docker</li>
            <li>REST APIs</li>
            <li>GCP</li>
            <li>React Native</li>
            <li>Expo</li>
            <li>NativeWind</li>
            <li>Gluestack UI</li>
          </ul>
        </section>

        <section className="timeline">
            <div className="title-wrapper">
              <div className="icon-box">
                <i className="fa-solid fa-certificate"></i>
              </div>

              <h3 className="h3">Certificates</h3>
            </div>
            <ol className="timeline-list">
              <li className="timeline-item">
                <h3 className="h3 timeline-item-title">Hackerrank Frontend Developer (React.js)</h3>       
              </li>
            </ol>
        </section>

        <section className="timeline">
            <div className="title-wrapper gap-4 mt-5">
              <div className="icon-box">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>

              <h3 className="h3">Education</h3>
            </div>
            <ol className="timeline-list">
              <li className="timeline-item">
                <h3 className="h3 timeline-item-title">O Level</h3>
                <div className='company-title'>Netcom College</div>
                <span>01/2016 - 01/2017</span>         
              </li>
              <li className="timeline-item">
                <h3 className="h3 timeline-item-title">B.A.</h3>
                <div className='company-title'>Rajasthan University</div>
                <span>07/2014 - 06/2017</span>         
              </li>
            </ol>
        </section>

        <section className="timeline">
            <div className="title-wrapper gap-4 mt-5">
              <div className="icon-box">
                <i className="fa-solid fa-language"></i>
              </div>

              <h3 className="h3">Language</h3>
            </div>
            <ol className="timeline-list">
              <li className="timeline-item">
                <h3 className="h3 timeline-item-title">Hindi</h3>      
              </li>
              <li className="timeline-item">
                <h3 className="h3 timeline-item-title">English</h3>  
              </li>
            </ol>
        </section>

      

        {/* <section className="service mt-5">
          <h3 className="h3 service-title pt-5">What i am doing</h3>
          <ul className="service-list">
            <li className="service-item">
              <div className="service-icon-box">
                <Image
                    src={IconDesign}
                    alt="design"
                    width={60}
                    height={60}
                    priority
                    />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">Web design</h4>
                <p className="service-item-text">
                  The most modern and high-quality design made at a professional level.
                </p>
              </div>
            </li>

            <li className="service-item">
              <div className="service-icon-box">
                <Image
                    src={IconDev}
                    alt="dev"
                    width={60}
                    height={60}
                    priority
                    />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">Web development</h4>
                <p className="service-item-text">
                  High-quality development of sites at the professional level.
                </p>
              </div>
            </li>

            <li className="service-item">
              <div className="service-icon-box">
                <Image
                    src={IconApp}
                    alt="app"
                    width={60}
                    height={60}
                    priority
                    />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">Mobile apps</h4>
                <p className="service-item-text">
                  Professional development of applications for iOS and Android.
                </p>
              </div>
            </li>

            <li className="service-item">
              <div className="service-icon-box">
                <Image
                    src={IconPhoto}
                    alt="photo"
                    width={60}
                    height={60}
                    priority
                    />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Photography</h4>
                <p className="service-item-text">
                  I make high-quality photos of any category at a professional level.
                </p>
              </div>
            </li>
          </ul>
        </section>

        <section className="testimonials">

          <h3 className="h3 testimonials-title">Testimonials</h3>

          <ul className="testimonials-list has-scrollbar">

            <li className="testimonials-item">
              <div className="content-card">

                <figure className="testimonials-avatar-box">
                  <Image
                    src={Avatar1}
                    alt="avatar"
                    width={80}
                    height={80}
                    priority
                    />
                </figure>

                <h4 className="h4 testimonials-item-title">Daniel lewis</h4>

                <div className="testimonials-text">
                  <p>
                    Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                    lot of experience
                    and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                    consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                  </p>
                </div>

              </div>
            </li>

            <li className="testimonials-item">
              <div className="content-card">

                <figure className="testimonials-avatar-box">
                  <Image
                    src={Avatar2}
                    alt="avatar"
                    width={80}
                    height={80}
                    priority
                    />
                </figure>

                <h4 className="h4 testimonials-item-title">Jessica miller</h4>

                <div className="testimonials-text">
                  <p>
                    Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                    lot of experience
                    and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                    consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                  </p>
                </div>

              </div>
            </li>

            <li className="testimonials-item">
              <div className="content-card" >

                <figure className="testimonials-avatar-box">
                    <Image
                      src={Avatar3}
                      alt="avatar"
                      width={80}
                      height={80}
                      priority
                      />
                </figure>

                <h4 className="h4 testimonials-item-title">Emily evans</h4>

                <div className="testimonials-text">
                  <p>
                    Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                    lot of experience
                    and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                    consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                  </p>
                </div>

              </div>
            </li>

            <li className="testimonials-item">
              <div className="content-card">

                <figure className="testimonials-avatar-box">
                    <Image
                      src={Avatar4}
                      alt="avatar"
                      width={80}
                      height={80}
                      priority
                      />
                </figure>

                <h4 className="h4 testimonials-item-title">Henry william</h4>

                <div className="testimonials-text">
                  <p>
                    Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                    lot of experience
                    and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                    consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                  </p>
                </div>

              </div>
            </li>
          </ul>
        </section>

        <section className="clients">

          <h3 className="h3 clients-title">Clients</h3>

          <ul className="clients-list has-scrollbar">

            <li className="clients-item">
              <a href="#">
                  <Image
                      src={Logo1}
                      alt="Client Logo"
                      width={165}
                      height={105}
                      priority
                  />
              </a>
            </li>

            <li className="clients-item">
              <a href="#">
                  <Image
                      src={Logo2}
                      alt="Client Logo"
                      width={165}
                      height={105}
                      priority
                  />
              </a>
            </li>

            <li className="clients-item">
              <a href="#">
                  <Image
                      src={Logo3}
                      alt="Client Logo"
                      width={165}
                      height={105}
                      priority
                  />
              </a>
            </li>

            <li className="clients-item">
              <a href="#">
                  <Image
                      src={Logo4}
                      alt="Client Logo"
                      width={165}
                      height={105}
                      priority
                  />
              </a>
            </li>

            <li className="clients-item">
              <a href="#">
                  <Image
                      src={Logo5}
                      alt="Client Logo"
                      width={165}
                      height={105}
                      priority
                  />
              </a>
            </li>

            <li className="clients-item">
              <a href="#">
                  <Image
                      src={Logo6}
                      alt="Client Logo"
                      width={165}
                      height={105}
                      priority
                  />
              </a>
            </li>

          </ul>

        </section> */}
      </div>
  )
}

export default AboutPage
