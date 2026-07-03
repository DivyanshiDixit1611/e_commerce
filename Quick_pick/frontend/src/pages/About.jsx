import React from "react";
import { Title } from "../component/Title";
import { assets } from "../frontend_assets/assets";
import Newsletter from "../component/Newsletter";

const About = () => {
  return (
    <div>
      {/* About Header */}
      <div className="text-3xl text-center pt-10 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      {/* About Content */}
      <div className="my-12 flex flex-col md:flex-row gap-12 items-center">
        <img
          className="w-full md:max-w-[500px] rounded-lg shadow-md"
          src={assets.about_img}
          alt="About Forever"
        />

        <div className="flex flex-col justify-center gap-6 md:w-1/2 text-gray-600">
          <p className="leading-7">
            Welcome to <span className="font-semibold text-gray-800">Quick-Pick</span>,
            your trusted destination for stylish and high-quality fashion.
            We believe shopping should be simple, enjoyable, and accessible to
            everyone. Our collection is carefully curated to bring you the latest
            trends without compromising on quality.
          </p>

          <p className="leading-7">
            Since our beginning, we've focused on delivering exceptional products,
            seamless shopping experiences, and outstanding customer support.
            Every item is selected with our customers in mind, ensuring value,
            comfort, and satisfaction.
          </p>

          <div>
            <h3 className="font-bold text-lg text-gray-800 mb-2">
              Our Mission
            </h3>
            <p className="leading-7">
              Our mission is to empower customers with choice, convenience,
              and confidence by providing premium products and an effortless
              online shopping experience.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="text-2xl py-6 text-center">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        <div className="border rounded-lg px-8 py-10 flex flex-col gap-4 hover:shadow-lg transition duration-300">
          <h3 className="font-bold text-lg text-gray-800">
            Quality Assurance
          </h3>
          <p className="text-gray-600">
            Every product undergoes strict quality checks to ensure durability,
            comfort, and customer satisfaction.
          </p>
        </div>

        <div className="border rounded-lg px-8 py-10 flex flex-col gap-4 hover:shadow-lg transition duration-300">
          <h3 className="font-bold text-lg text-gray-800">
            Exceptional Service
          </h3>
          <p className="text-gray-600">
            Our dedicated support team is always ready to assist you and ensure
            a smooth shopping experience.
          </p>
        </div>

        <div className="border rounded-lg px-8 py-10 flex flex-col gap-4 hover:shadow-lg transition duration-300">
          <h3 className="font-bold text-lg text-gray-800">
            Continuous Innovation
          </h3>
          <p className="text-gray-600">
            We constantly improve our platform, products, and services to meet
            evolving customer needs and market trends.
          </p>
        </div>
      </div>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default About;