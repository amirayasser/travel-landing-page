import React from 'react'


export default function Footer() {
  return (
    <>
  
    <footer>
            <div className="container">
                <div>
                    <h4>Wanderlust</h4>
                    <p>Welcome to Wanderlust, our tour and travel website is your gateway to a world of wanderlust-inducing experiences.</p>
                </div>
                <article>
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/destinations">Destinations</a></li>
                        <li><a href="">Write to Us</a></li>
                        <li><a href="">Contact Us</a></li>
                        <li><a href="">Privacy Policy</a></li>
                    </ul>
                </article>

                <article>
                    <h4>Features</h4>
                    <ul>
                        <li><a href="">Vacation Package</a></li>
                        <li><a href="">List of Tours</a></li>
                        <li><a href="">Gallery</a></li>
                        <li><a href="">Travel on a Budget</a></li>
                    </ul>
                </article>

                <div>
                    <h4>Follow Us</h4>
                    <div className="icons">
                        <span><i className="fa-brands fa-twitter"></i></span>
                        <span><i className="fa-brands fa-linkedin-in"></i></span>
                        <span><i className="fa-brands fa-instagram"></i></span>
                        <span><i className="fa-brands fa-facebook-f"></i></span>
                    </div>
                </div>
            </div>
            
            <div className="footer-bar">Copyright &copy; 2023 Web Design Mastery. All rights reserved.</div>
            
        </footer>
    </>
  )
}
