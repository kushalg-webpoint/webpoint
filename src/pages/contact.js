import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./contact.scss"
import { Link } from "gatsby"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="container-fluid privacy-policy">
      <div className="row justify-content-center">
        <div className="col-10">
          <div className="contact">
            <h1 data-aos="fade-up">We’d like to work together</h1>
            <div className="form-wrap">
              <h3 data-aos="fade-up">Drop us a line</h3>
              <p data-aos="fade-up">
                Feel free to fill out this form to just say hi or start a new
                project.
              </p>
              <form
                action="https://getform.io/f/319f9da7-23d6-412f-968f-880445c4cfda"
                method="POST"
                data-aos="fade-up"
              >
                <div className="d-flex justify-content-between">
                  <input placeholder="Name" type="text" name="name" />
                  <div class="input-wrapper">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      maxlength="50"
                      required
                    />
                    <span class="placeholder" data-placeholder="Email"></span>
                  </div>
                </div>
                <div class="input-wrapper textarea-wrap">
                  <textarea
                    name="message"
                    rows="1"
                    cols="30"
                    required
                  ></textarea>
                  <span
                    class="placeholder"
                    data-placeholder="Tell us about your project"
                  ></span>
                </div>
                <div class="round">
                  <input
                    type="checkbox"
                    id="checkbox"
                    required="required"
                  ></input>
                  <label for="checkbox">
                    <span></span>I have read and agree with{" "}
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </label>
                </div>
                <button>Send It</button>
              </form>
              <div className="contact-btm" data-aos="fade-up">
                <p>or just write to us</p>
                <a href="mailto:sales@webpoint.io">sales@webpoint.io</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Contact
