import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";

export default function Form() {
  return (
    <form>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Your Name"
          className="
                    w-full
                    rounded
                    py-3
                    px-[14px] bg-gray-100
                    text-base
                    border-2 
                    outline-none
                    focus-visible:shadow-none
                    focus:border-custom1
                    "
        />
      </div>
      <div className="mb-6">
        <input
          type="email"
          placeholder="Your Email"
          className="
                    w-full
                    rounded-md
                    py-3
                    px-[14px] bg-gray-100
                    text-base
                    border-2
                    outline-none
                    focus-visible:shadow-none
                    focus:border-custom1
                    "
        />
      </div>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Your Subject"
          className="
                    w-full
                    rounded-md
                    py-3
                    px-[14px] bg-gray-100
                    text-base
                    border-2
                    outline-none
                    focus-visible:shadow-none
                    focus:border-custom1
                    "
        />
      </div>
      <div className="mb-6">
        <textarea
          rows={6}
          placeholder="Your Message"
          className="
                    w-full
                    rounded-md
                    py-3
                    px-[14px] bg-gray-100
                    text-base
                    border-2
                    resize-none
                    outline-none
                    focus-visible:shadow-none
                    focus:border-custom1
                    "
          defaultValue={""}
        />
      </div>
      <div>
        <button
          type="submit"
          className="
                    w-full
                    text-custom1
                    dark:text-custom4
                    bg-custom4
                    dark:bg-dark1
                    rounded-md
                    border 
                    p-3
                    transition
                    hover:bg-opacity-90
                    "
        >
          Send Message
          <TelegramIcon className="mx-1 mb-1" />
        </button>
      </div>
    </form>
  );
}
