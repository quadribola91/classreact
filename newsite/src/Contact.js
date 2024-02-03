import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import AboutMe from "./AboutMe";
import ProjectsPage from "./ProjectsPage";

export default function Contact() {
  return (
    <>
      <section className="bg-white-400 mt-4" id="contact">
        <h2 className="text-black font-bold text-3xl  mt-20 hover:text-gray-800 hover:font-sans">
          Get In Touch
        </h2>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-lg">
                At the same time, the fact that we are wholly owned and totally
                independent from the manufacturer and other group control gives
                you confidence that we will only recommend what is right for
                you.
              </p>
              <div className="SocialMedia justify-center mt-4">
                {/* Add title attribute to each social media link */}
                <a
                  href="https://www.facebook.com/Quadribola91/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                >
                  <FaFacebook color="#4267B2" />
                </a>
                <a
                  href="https://www.instagram.com/omobolarinwa19/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                >
                  <FaInstagram color="#E4405F" />
                </a>
                <a
                  href="https://www.linkedin.com/in/omobolarinwa-quadri-a207b3216/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                >
                  <FaLinkedin color="#0077B5" />
                </a>
                <a
                  href="https://github.com/quadribola91"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                >
                  <FaGithub color="#333" />
                </a>
                <a
                  href="https://wa.me/+2349058824643"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp"
                >
                  <FaWhatsapp color="#25D366" />
                </a>
              </div>

              <div className="mt-8 ml-20 justify-center">
                <a href="" className="text-2xl font-bold text-gray-600">
                  {" "}
                  +23490-588-24643{" "}
                </a>
                <email className="text-black-700 font-bold flex">
                  <em>quadribola91@gmail.com</em>
                </email>
                <address className="mt-2 not-italic">Gbagada, LA 23401</address>
              </div>
            </div>
            <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action="" class="space-y-4">
                <div>
                  <label class="sr-only" for="name">
                    Name
                  </label>
                  <input
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                  />
                </div>

                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label class="sr-only" for="email">
                      Email
                    </label>
                    <input
                      class="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                    />
                  </div>

                  <div>
                    <label class="sr-only" for="phone">
                      Phone
                    </label>
                    <input
                      class="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                    />
                  </div>
                </div>

                <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-3"></div>

                <div>
                  <label class="sr-only" for="message">
                    Message
                  </label>

                  <textarea
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Message"
                    rows="8"
                    id="message"
                  ></textarea>
                </div>

                <div class="mt-4">
                  <button
                    type="submit"
                    class="inline-block w-full rounded-lg bg-blue-900 hover:bg-blue-400 px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
