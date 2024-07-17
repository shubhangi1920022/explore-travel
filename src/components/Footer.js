import React from 'react'
import './FooterStyle.css'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="top">
          <div>
            <h1>T&T</h1>
            <p>Choose your favourite destination</p>
          </div>
          <div>
            <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook-square"></i></a>
            <a href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fonetap%2F%3Fnext%3D%252F%26__coig_login%3D1"><i className="fa-brands fa-instagram-square"></i></a>
            <a href="https://www.behance.net/search/projects/?search=login"><i className="fa-brands fa-behance-square"></i></a>
            <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"><i className="fa-brands fa-twitter-square"></i></a>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h4>Project</h4>
            <a href="/">Changelog</a>
            <a href="/">Status</a>
            <a href="/">License</a>
            <a href="/">All Versions</a>
          </div>
          <div>
            <h4>Community</h4>
            <a href="/">Github</a>
            <a href="/">Issues</a>
            <a href="/">Project</a>
            <a href="/">Twitter</a>
            
          </div>
          <div>
            <h4>Help</h4>
            <a href="/">Support</a>
            <a href="/">Trobleshooting</a>
            <a href="/">Contact Us</a>
          </div>
          <div>
            <h4>Others</h4>
            <a href="/">Terms of Service</a>
            <a href="/">Privacy Policy</a>
            <a href="/">License</a>

          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
