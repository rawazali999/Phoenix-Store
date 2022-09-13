import React from "react";
import Layout from "../Layouts/MainLayout";
import ContactInfo from "../components/Contact/ContactInfo";
import Dots from "../components/Contact/Dots";
import Form from "../components/Contact/Form";

export default function ContactUs() {
  return (
    <Layout>
      <section className="bg-white bg-gradient-to-r dark:from-darkFrom dark:to-darkTo py-20 px-6   lg:py-[120px] overflow-hidden relative z-10">
        <div className="container">
          <div className="flex flex-wrap lg:justify-between -mx-4">
            <div className="w-full lg:w-1/2 xl:w-6/12 px-4 dark:text-gray-100 ">
              <ContactInfo />
            </div>
            <div className="w-full lg:w-1/3 xl:w-4/12  sm:px-4 m mx-10">
              <div className=" bg-gradient-to-r  from-cyan-500 dark:from-slate-700  to-blue-500 dark:to-darkTo relative rounded-lg p-8 sm:p-12 shadow-lg">
                <Form />
                <div>
                  <span className="absolute -top-10 -right-9 z-[-1]">
                    <svg
                      width={100}
                      height={100}
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                        className="fill-cyan-500 dark:fill-gray-100"
                      />
                    </svg>
                  </span>
                  <Dots />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
