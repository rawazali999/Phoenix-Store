import React from "react";
import Layout from "../Layouts/MainLayout";
import ContactInfo from "../components/Contact/ContactInfo";
import Dots from "../components/Contact/Dots";
import Form from "../components/Contact/Form";

export default function ContactUs() {
  return (
    <Layout>
      <section className="bg-inherit py-20 px-6">
        <div className="flex flex-col md:flex-row md:justify-around  ">
          <ContactInfo />
          <div className="w-full lg:w-1/3 xl:w-4/12  sm:px-4 m mx-10">
            <div className=" bg-custom1 dark:bg-dark1 border relative rounded-lg p-8 sm:p-12 shadow-lg">
              <Form />
              <div>
                <Dots />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
