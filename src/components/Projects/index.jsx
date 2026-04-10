import React from 'react'
// import Image from 'next/image'

const ProjectsPage = () => {
  return (
    <div className="portfolio">
      <h2 className="h2 article-title">Projects</h2>
      {/* <section className="projects">

        <ul className="filter-list">

          <li className="filter-item">
            <button className="active">All</button>
          </li>

          <li className="filter-item">
            <button>Web design</button>
          </li>

          <li className="filter-item">
            <button>Applications</button>
          </li>

          <li className="filter-item">
            <button>Web development</button>
          </li>

        </ul>

        <div className="filter-select-box">

          <button className="filter-select">

            <div className="select-value">Select category</div>

            <div className="select-icon">
              <i className="fa-solid fa-chevron-down"></i>
            </div>

          </button>

          <ul className="select-list">

            <li className="select-item">
              <button>All</button>
            </li>

            <li className="select-item">
              <button>Web design</button>
            </li>

            <li className="select-item">
              <button>Applications</button>
            </li>

            <li className="select-item">
              <button>Web development</button>
            </li>

          </ul>

        </div>

        <ul className="project-list">

          <li className="project-item  active">
            <a href="#">

              <figure className="project-img">
                <div className="project-item-icon-box">
                  <i className="fa-regular fa-eye"></i>
                </div>
                  <Image
                    src={Project1}
                    alt="Project"
                    width={260}
                    height={195}
                    priority
                    />
              </figure>

              <h3 className="project-title">Finance</h3>

              <p className="project-category">Web development</p>

            </a>
          </li>

          <li className="project-item  active">
            <a href="#">

              <figure className="project-img">
                <div className="project-item-icon-box">
                <i className="fa-regular fa-eye"></i>
                </div>
                <Image
                    src={Project2}
                    alt="Project"
                    width={260}
                    height={195}
                    priority
                    />
              </figure>

              <h3 className="project-title">Orizon</h3>

              <p className="project-category">Web development</p>

            </a>
          </li>

          <li className="project-item  active">
            <a href="#">

              <figure className="project-img">
                <div className="project-item-icon-box">
                <i className="fa-regular fa-eye"></i>
                </div>
                  <Image
                    src={Project3}
                    alt="Project"
                    width={260}
                    height={195}
                    priority
                    />
              </figure>

              <h3 className="project-title">Fundo</h3>

              <p className="project-category">Web design</p>

            </a>
          </li>

          <li className="project-item  active">
            <a href="#">

              <figure className="project-img">
                <div className="project-item-icon-box">
                <i className="fa-regular fa-eye"></i>
                </div>
                  <Image
                    src={Project4}
                    alt="Project"
                    width={260}
                    height={195}
                    priority
                    />
              </figure>

              <h3 className="project-title">Brawlhalla</h3>

              <p className="project-category">Applications</p>

            </a>
          </li>

          <li className="project-item  active">
            <a href="#">

              <figure className="project-img">
                <div className="project-item-icon-box">
                <i className="fa-regular fa-eye"></i>
                </div>
                  <Image
                    src={Project5}
                    alt="Project"
                    width={260}
                    height={195}
                    priority
                    />
              </figure>

              <h3 className="project-title">DSM.</h3>

              <p className="project-category">Web design</p>

            </a>
          </li>

          <li className="project-item  active">
            <a href="#">

              <figure className="project-img">
                <div className="project-item-icon-box">
                <i className="fa-regular fa-eye"></i>
                </div>
                <Image
                    src={Project6}
                    alt="Project"
                    width={260}
                    height={195}
                    priority
                    />
              </figure>

              <h3 className="project-title">MetaSpark</h3>

              <p className="project-category">Web design</p>

            </a>
          </li>

          <li className="project-item  active">
            <a href="#">

              <figure className="project-img">
                <div className="project-item-icon-box">
                <i className="fa-regular fa-eye"></i>
                </div>
                <Image
                    src={Project7}
                    alt="Project"
                    width={260}
                    height={195}
                    priority
                    />
              </figure>

              <h3 className="project-title">Summary</h3>

              <p className="project-category">Web development</p>

            </a>
          </li>

          <li className="project-item  active">
            <a href="#">

              <figure className="project-img">
                <div className="project-item-icon-box">
                <i className="fa-regular fa-eye"></i>
                </div>
                  <Image
                    src={Project8}
                    alt="Project"
                    width={260}
                    height={195}
                    priority
                    />
              </figure>

              <h3 className="project-title">Task Manager</h3>

              <p className="project-category">Applications</p>

            </a>
          </li>

          <li className="project-item  active">
            <a href="#">

              <figure className="project-img">
                <div className="project-item-icon-box">
                <i className="fa-regular fa-eye"></i>
                </div>
                <Image
                    src={Project9}
                    alt="Project"
                    width={260}
                    height={195}
                    priority
                    />
              </figure>

              <h3 className="project-title">Arrival</h3>

              <p className="project-category">Web development</p>

            </a>
          </li>

        </ul>

      </section> */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <i className="fa-solid fa-shield"></i>
          </div>
          <h3 className="h3">OUR PROJECTS</h3>
        </div>
        <ol className="timeline-list">
          <li className="timeline-item">
            <h3 className="h3 timeline-item-title">Merchmix (ERP System)</h3>
            <ul className='timeline-text list-disc mt-2 ml-[15px]'>
              <li>Architected a secure authentication system using Next.js and NextAuth.js, implementing Role-Based Access Control for enhanced security.</li>
              <li>Developed a high-performance dynamic data table featuring inline editing, customizable column visibility, and persistent state management via zustand.</li>
            </ul>
          </li>
          <li className="timeline-item">
            <h3 className="h3 timeline-item-title">Quordinate (Quotation Management System)</h3>
            <ul className='timeline-text list-disc mt-2 ml-[15px]'>
              <li>Led the end-to-end project lifecycle, focusing on secure authentication and complex role-based login flows.</li>
              <li>Engineered scalable features and integrated third-party APIs while maintaining high performance and code quality.</li>
            </ul>
          </li>
          <li className="timeline-item">
            <h3 className="h3 timeline-item-title">Bahipen (Personal Finance & Ledger App)</h3>
            <ul className='timeline-text list-disc mt-2 ml-[15px]'>
              <li>Architected and Developed a high-performance, cross-platform mobile application using Expo, NativeWind, and Gluestack UI for a seamless user experience.</li>
              <li>Engineered a robust, asynchronous backend using FastAPI (Python) and PostgreSQL, optimizing for high-concurrency and secure data management.</li>
            </ul>
          </li>
          <li className="timeline-item">
            <h3 className="h3 timeline-item-title">Spectra</h3>
            <ul className='timeline-text list-disc mt-2 ml-[15px]'>
              <li>Simple plug n play solution to monitor your machines remotely in real time, send alerts to stakeholders who matter.</li>
              <li>Build and setup Dashboards, Workflows and Analytics in few clicks. Automate every flow, save your time.</li>
              <li>Real time Alerts that can be easily configured to help team members take necessary action.</li>
              <li>*Bring your own Device*: Device Agnostic, adapts as needed. Plug n Play mode, ready to go Easily configurable and setup.</li>
            </ul>
          </li>
          <li className="timeline-item">
            <h3 className="h3 timeline-item-title">Favtutor</h3>
            <p className='timeline-text mt-2 font-medium'>HTML, CSS, Bootstrap, JavaScript, PHP, Codeigniter</p>
          </li>
          <li className="timeline-item">
            <h3 className="h3 timeline-item-title">Raja Fashions</h3>
            <p className='timeline-text mt-2 font-medium'>React Js, Next Js, Redux, HTML, CSS, Bootstrap</p>
          </li>
          <li className="timeline-item">
            <h3 className="h3 timeline-item-title">Invoice Project</h3>
            <p className='timeline-text mt-2 font-medium'>Php, Codeigniter, MySql, HTML, CSS, Bootstrap</p>
          </li>
        </ol>
      </section>
    </div>
  )
}

export default ProjectsPage
