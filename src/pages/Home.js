import React from "react";
import logo from "../images/logo.png";
import photo from "../images/img-removebg-preview 1.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const teaching = [
  {
    name: "Personalized Learning",
    desc: "We understand that each student is unique. Our approach tailors education to individual needs, ensuring that every student can reach their full potential.",
  },
  {
    name: "Active Engagement",
    desc: "We promote active learning through interactive lessons,discussions, and hands-on activities. This approach keeps students engaged and enhances comprehension.",
  },
  {
    name: "Expert Guidance",
    desc: "Our dedicated educators are experts in their fields. They provide mentorship and guidance, fostering a supportive learning environment.",
  },
];
const student = [
  {
    name: "Anish wanare",
    desc: "I've had an amazing learning experience here. Highly recommend!",
  },
  {
    name: "Anish wanare",
    desc: "I've had an amazing learning experience here. Highly recommend!",
  },
  {
    name: "Anish wanare",
    desc: "I've had an amazing learning experience here. Highly recommend!",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gradient-to-r from-[#ffa07b] to-[#f7df8f] text-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-around py-4 px-6 md:py-6 md:px-0">
          <div className="md:w-1/4">
            <div className="w-32 h-32 md:w-40 md:h-40 m-auto md:m-0">
              <img
                src={logo}
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="text-center md:text-left text-black mt-4 md:mt-0">
            <h1 className="text-3xl md:text-5xl font-bold font-serif text-black">
              Dnynankur
            </h1>
            <p className="text-lg md:text-2xl text-red-600">
              "Empowering Minds, Enriching Lives."
            </p>
          </div>
        </div>
      </header>

      <section className="container mx-auto mt-8 md:mt-12 px-4 md:px-0">
        <div className="md:flex items-center lg:flex-col xl:flex-row">
          <div className="md:w-1/2 flex flex-col gap-3 md:gap-5 md:mx-10 justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-red-700 mb-4">
              Welcome to Our Teaching Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              Transforming education through personalized learning and expert
              guidance.
            </p>
            <Link to={"/quiz"}>
              <button className="mt-6 text-xl md:text-2xl w-[50%] md:w-[30%] bg-gradient-to-r from-[#ffa07b] to-[#f7df8f] text-black font-semibold py-2 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                Sample Test
              </button>
            </Link>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <div className="relative h-[250px] md:h-[350px] w-[60%] md:w-[80%] lg:w-[50%]  xl:w-[40%] 2xl:w-[40%] mx-auto hover:scale-110 ease-in-out duration-100 cursor-pointer">
              <img
                src={photo}
                alt="Founder"
                className="w-full h-full object-cover rounded-3xl shadow-md"
              />
              <div className="absolute bottom-0 left-0 w-full text-center whitespace-nowrap md:whitespace-normal text-white bg-[#202020] rounded-b-3xl p-2">
                <h3 className="text-xl md:text-3xl font-semibold">
                  Meet Our Founder
                </h3>
                <p className="text-sm md:text-xl">Dnyaneshwar Sontakke</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="md:mx-10 mx-3">
        <section className="container mx-auto mt-8 md:mt-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#febf00]">
              Our Achievements
            </h2>
            <div className="bg-[#dea6a6] h-2 w-24 mx-auto my-2 rounded-full"></div>
          </div>
          <div className="flex flex-col md:flex-row justify-center  space-y-8 md:space-y-0 md:space-x-8 mt-8">
            {/* Achievement Item 1 */}
            <div className="bg-[#ffa07b] rounded-lg p-6 text-center md:w-1/3">
              <h3 className="text-4xl md:text-5xl font-bold text-white">4+</h3>
              <p className="text-2xl md:text-3xl text-gray-800 mt-4">
                Years of Experience
              </p>
            </div>

            {/* Achievement Item 2 */}
            <div className="bg-[#f7df8f] rounded-lg p-6 text-center md:w-1/3">
              <h3 className="text-4xl md:text-5xl font-bold text-white">
                1000+
              </h3>
              <p className="text-2xl md:text-3xl text-gray-800 mt-4">
                Students Enrolled
              </p>
            </div>

            {/* Achievement Item 3 */}
            <div className="bg-[#ffa07b] rounded-lg p-6 text-center md:w-1/3">
              <h3 className="text-4xl md:text-5xl font-bold text-white">
                700+
              </h3>
              <p className="text-2xl md:text-3xl text-gray-800 mt-4">
                Students Succeeded
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto mt-8 md:mt-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#febf00]">
              Student Feedback
            </h2>
            <div className="bg-[#dea6a6] h-2 w-24 mx-auto my-2 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {/* Feedback Item 1 */}
            {student.map((item, index) => (
              <div className="bg-white rounded-lg shadow-md p-2" key={index}>
                <div className="flex items-center mb-4">
                  <img
                    src={photo}
                    alt=""
                    className="w-24 h-24 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold">
                      Name: {item.name}
                    </h3>
                    <p className="text-gray-600 text-lg">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto my-8 md:mt-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#febf00]">
              Teaching Approach
            </h2>
            <div className="bg-[#dea6a6] h-2 w-24 mx-auto my-2 rounded-full"></div>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {/* Approach Item 1 */}
            {teaching.map((item, index) => (
              <div
                className="bg-[#ffa07b] rounded-lg p-6 text-center shadow-xl"
                key={index}
              >
                <h3 className="text-2xl font-semibold text-black mb-2">
                  {item.name}
                </h3>
                <p className="text-black text-xl">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
