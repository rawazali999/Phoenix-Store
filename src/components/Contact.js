import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
export default function Contact() {
  return (
    <section className="body-font relative m-2">
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          width="100%"
          height="100%"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          title="map"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d70778.49251905385!2d43.921799463007765!3d36.199287157100464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x400722fe13443461%3A0x3e01d63391de79d1!2sErbil!5e0!3m2!1sen!2siq!4v1660784389320!5m2!1sen!2siq"
        />
      </div>
      <div className="container px-5 py-28 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/3 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Feedback
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Post-ironic portland shabby chic echo park, banjo fashion axe
          </p>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-custom1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded-lg border-2 border-gray-300 focus:border-custom4 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-custom1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full border-2 bg-white rounded-lg  border-gray-300 focus:border-custom4 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              defaultValue={""}
            />
          </div>
          <button className="text-white bg-custom3  pt-2 pb-1  focus:outline-none hover:bg-custom4 rounded-lg text-xl">
            Send
            <TelegramIcon className="mb-1 mx-1" />
          </button>
          <p className="text-xs text-gray-500 mt-3">
            Chicharrones blog helvetica normcore iceland tousled brook viral
            artisan.
          </p>
        </div>
      </div>
    </section>
  );
}
