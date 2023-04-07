// src/components/Contact.js

import React from "react";
import { InboxIcon } from "@heroicons/react/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

function Contact() {
  return (
    <section id="contact">
      <div className="container px-5 py-5 mx-auto">
        <div className="text-center mb-20">
          <InboxIcon className="mx-auto inline-block w-10 mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
              Contact Me
            </h1>
                  <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                      PHONE
                  </h2>
                  <p className="leading-relaxed pr-0 tracking-widest">571-225-2970</p>
                  <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                      EMAIL
                  </h2>
                  <a href="mailto:robljohn1998@gmail.com" className="text-indigo-400 leading-relaxed pr-0">
                      robljohn1998@gmail.com
                  </a>
                  <h2 className="title-font font-semibold text-white tracking-widest">
                    <FontAwesomeIcon icon={faLinkedin} size="lg"/>
                  </h2>
                  <a 
                  className="text-indigo-400 leading-relaxed pr-0"
                  href="https://www.linkedin.com/in/robert-l-johnson-/"
                  target="_blank" rel="noopener noreferrer">
                  LinkedIn
                  </a>
                  <h2 className="title-font font-semibold text-white tracking-widest">
                    <FontAwesomeIcon icon={faGithub} size="lg"/>
                  </h2>
                  <a
                  className="text-indigo-400 leading-relaxed pr-0"
                  href="https://github.com/robjawn"
                  target="_blank" rel="noopener noreferrer">
                    Github
                  </a>
                </div>
              </div>     
  </section>
  );
}

export default Contact