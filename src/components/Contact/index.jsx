import React from 'react'

const ContactPage = () => {
  return (
    <div className="contact">
      <h2 className="h2 article-title">Contact</h2>
      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227749.05320895495!2d75.62574683476568!3d26.885115145593463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1704216860383!5m2!1sen!2sin"
            width="400" height="300" loading="lazy"></iframe>
        </figure>
      </section>

      <section className="contact-form">

        <h3 className="h3 form-title">Contact Form</h3>

        <form action="#" className="form">

          <div className="input-wrapper">
            <input type="text" name="fullname" className="form-input" placeholder="Full name" />

            <input type="email" name="email" className="form-input" placeholder="Email address" />
          </div>

          <textarea name="message" className="form-input" placeholder="Your Message"></textarea>

          <button className="form-btn" type="submit">
            {/* <ion-icon name="paper-plane"></ion-icon> */}
            <span>Send Message</span>
          </button>

        </form>

      </section>
    </div>
  )
}

export default ContactPage
