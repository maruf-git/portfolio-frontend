import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Container from "../components/Container";
import { IoMail } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import greetingDark from '../assets/lottie/greeting-dark.json';
import Lottie from "lottie-react";



const Home = () => {
    return (
        <div>
            {/* banner and greeting main */}
            <Container>
                <section className="greeting-main flex py-10">
                    {/* greeting text */}
                    <div className="w-1/2 ">
                        {/* name */}
                        <h1 className=" text-7xl">Hi, I'm Md Maruf Ur Rahman Munna</h1>
                        {/* tags */}
                        <p className="text-3xl mt-10">Web Developer | Problem Solver | Competitive Programmer | Solved 500+ problems on various online judges.</p>
                        {/* social links */}
                        <div className="flex gap-2 my-10">
                            {/* github */}
                            <a href='#' className="p-3  bg-[#333333] hover:bg-[#000000] transition duration-700 rounded-full">
                                <FaGithub size={25} />
                            </a>
                            {/* linkedin */}
                            <a href="#" className="p-3  bg-[#0e76a8] hover:bg-[#000000] transition duration-500 rounded-full">
                                <FaLinkedinIn size={25} />
                            </a>
                            {/* gmail */}
                            <a href='#' className="p-3  bg-[#ea4336] hover:bg-[#000000] transition duration-700 rounded-full">
                                <IoMail size={25} />
                            </a>
                            {/* facebook */}
                            <a href='#' className="p-3  bg-[#3c5998] hover:bg-[#000000] transition duration-700 rounded-full">
                                <FaFacebookF size={25} />
                            </a>
                            {/* twitter */}
                            <a href='#' className="p-3  bg-[#333333] hover:bg-[#000000] transition duration-700 rounded-full">
                                <FaXTwitter size={25} />
                            </a>
                            {/* instagram */}
                            <a href='#' className="p-3  bg-[#c13684] hover:bg-[#000000] transition duration-700 rounded-full">
                                <FaInstagram size={25} />
                            </a>
                        </div>
                        {/* contact me button */}
                        <div>
                            <a href="#contact" className="btn bg-[#0745ad] text-white hover:text-[#0745ad] hover:bg-white border-none text-xl">CONTACT ME</a>
                        </div>
                    </div>
                    {/* greeting image */}
                    <div className="w-1/2  overflow-hidden flex justify-center items-center">
                        <Lottie
                            animationData={greetingDark}
                            className="object-cover scale-150 max-w-none"
                        />
                    </div>
                </section>
            </Container>
        </div>
    );
};

export default Home;