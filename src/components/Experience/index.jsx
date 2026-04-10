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
          <h3 className="h3 timeline-item-title">Sr. React.js Developer</h3>
          <div className='company-title'>Alkye Technology | Mohali, Punjab</div>
          <span>07/2024 - Present</span>
          <ul className='timeline-text list-disc mt-2 ml-[15px]'>
            <li>Architecting scalable user interfaces and secure API integrations that transform complex business requirements into simple, efficient digital solutions.</li>
            <li>Engineering high-performance, responsive web applications using React.js/Next.js, ensuring seamless data flow between FastAPI/Node.js backends and dynamic frontends.</li>
          </ul>
        </li>
        <li className="timeline-item">
          <h3 className="h3 timeline-item-title">Full Stack Developer</h3>
          <div className='company-title'>Starlly Solutions Pvt Ltd | Remote (Bangalore)</div>
          <span>10/2022 - 12/2023</span>
          <ul className='timeline-text list-disc mt-2 ml-[15px]'>
            <li>Optimized API consumption and frontend rendering, significantly improving user experience and load times</li>
            <li>Collaborated with product managers to translate complex business requirements into scalable technical features</li>
          </ul>
        </li>
        <li className="timeline-item">
          <h3 className="h3 timeline-item-title">Full Stack Developer</h3>
          <div className='company-title'>Tailwebs Technology | Bangalore, Karnataka</div>
          <span>01/2021 - 10/2022</span>
          <ul className='timeline-text list-disc mt-2 ml-[15px]'>
            <li>Delivered multiple end-to-end projects by analyzing requirements and building scalable Full stack solutions.</li>
            <li>Actively contributed to problem-solving and architectural discussions in daily Agile standups</li>
          </ul>
        </li>
        <li className="timeline-item">
          <h3 className="h3 timeline-item-title">Web Developer</h3>
          <div className='company-title'>Helpful Insight Solution | Jaipur, Rajasthan</div>
          <span>09/2020 - 12/2020</span>
          <ul className='timeline-text list-disc mt-2 ml-[15px]'>
            <li>Developed an automated Invoice Management System using CodeIgniter for internal billing operations</li>
          </ul>
        </li>
      </ol>
    </section>
  </div>)
}

export default ExperiencePage
