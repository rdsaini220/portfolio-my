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
          <h3 className="h3 timeline-item-title">Quordinate</h3>
          <a className='company-title link' href="http://quordinate.starlly.in">http://quordinate.starlly.in</a>
          <ul className='timeline-text list-disc mt-2 ml-[15px]'>
            <li>I managed the entire project, in this I worked on Authentication,
                Role Based Login, redux implementation, role based access control
                set, and make reusable component & atomic structure uses.</li>
          </ul>
        </li>
        <li className="timeline-item">
          <h3 className="h3 timeline-item-title">Spectra</h3>
          <a className='company-title link' href="https://spectra.starlly.in">https://spectra.starlly.in</a>
          <ul className='timeline-text list-disc mt-2 ml-[15px]'>
            <li>Developed new features like drag and drop feature and create dynamic widgets</li>
            <li>Like to contribute to solutions for any given problem statement.</li>
          </ul>
        </li>
        <li className="timeline-item">
          <h3 className="h3 timeline-item-title">Raja Fashions</h3>
          <a className='company-title link' href="https://raja-fashions.com">https://raja-fashions.com</a>
          <ul className='timeline-text list-disc mt-2 ml-[15px]'>
            <li>Integrated front-end functionalities like appointment creation module, virtual appointment, customer login, customer proﬁle etc.</li>
            <li>Used some best practices like adding meta tags, maintaining page index, code coverage etc.</li>
          </ul>
        </li>
        <li className="timeline-item">
          <h3 className="h3 timeline-item-title">Samthingelse</h3>
          <a className='company-title link' href="https://www.samthingelse.com">https://www.samthingelse.com</a>
          <ul className='timeline-text list-disc mt-2 ml-[15px]'>
            <li>Always took part with their team or individually to resolved the bugs in the application.</li>
            <li>Developed an e-commerce site in Next.js, emphasizing responsive design and superior UI/UX for an engaging customer experience.</li>
          </ul>
        </li>
        <li className="timeline-item">
          <h3 className="h3 timeline-item-title">Invoice CRM</h3>
          <a className='company-title link' href="https://invoice.helpfulinsightsolution.com">https://invoice.helpfulinsightsolution.com</a>
          <ul className='timeline-text list-disc mt-2 ml-[15px]'>
            <li>Developed a powerful Invoice Management Web App using Codeigniter, resulting in an impressive 50% boost in overall work eﬃciency.</li>
          </ul>
        </li>
      </ol>
    </section>
    </div>
  )
}

export default ProjectsPage
