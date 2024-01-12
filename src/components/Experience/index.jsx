import React from 'react'

const ExperiencePage = () => {
  return (<div className="resume active">
    <h2 className="h2 article-title">Experience</h2>

    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <i className="fa-solid fa-briefcase"></i>
        </div>
        <h3 className="h3">WORK EXPERIENCE</h3>
      </div>
      <ol className="timeline-list">
        <li className="timeline-item">
          <h3 className="h3 timeline-item-title">Frontend Software Engineer</h3>
          <div className='company-title'>Starlly Solutions Pvt Ltd, Bangalore (Remote)</div>
          <span>10/2022 — 12/2023</span>
          <ul className='timeline-text list-disc mt-2 ml-[15px]'>
            <li>Working with product team and managers to understand
                the product requirements, creating doc and delivering
                those.</li>
            <li>Like to contribute to solutions for any given problem statement.</li>
          </ul>
        </li>
        <li className="timeline-item">
          <h3 className="h3 timeline-item-title">Full Stack Developer</h3>
          <div className='company-title'>Tailwebs Technology, Bangalore</div>
          <span>01/2021 — 09/2022</span>
          <ul className='timeline-text list-disc mt-2 ml-[15px]'>
            <li>Coordinated in various end-to-end projects with team and individually.</li>
            <li>Worked with team members and project managers to analyse & understand the project requirements and
                having ability to get the work done.</li>
          </ul>
        </li>
        <li className="timeline-item">
          <h3 className="h3 timeline-item-title">Web Developer</h3>
          <div className='company-title'>Helpful Insight Solution, Jaipur</div>
          <span>09/2020 — 12/2020</span>
          <ul className='timeline-text list-disc mt-2 ml-[15px]'>
            <li>Working on company internal dashboard for managing create invoice bill.</li>
            <li>Coordinated in various end-to-end projects with team and individually.</li>
          </ul>
        </li>
      </ol>
    </section>
  </div>)
}

export default ExperiencePage
