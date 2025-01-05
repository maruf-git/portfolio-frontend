import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Container from "../components/Container";
import { IoMail } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import greetingDark from '../assets/lottie/greeting-dark.json';
import developerDark from '../assets/lottie/developer-dark.json';
import Lottie from "lottie-react";
import hstuLogo from '../assets/images/hstu_logo_.png'
import codeforces from "../assets/images/codeforces.png";
import codechef from "../assets/images/codechef.jfif";
import leetcode from "../assets/images/leetcode.png"

// project images
import view1 from "../assets/images/view1.png";
import view2 from "../assets/images/view2.png";
import view3 from "../assets/images/view3.png";
import view4 from "../assets/images/view4.png";
import discount1 from "../assets/images/discount1.png";
import discount2 from "../assets/images/discount2.png";
import discount3 from "../assets/images/discount3.png";
import discount4 from "../assets/images/discount4.png";
import game1 from "../assets/images/game1.png";
import game2 from "../assets/images/game2.png";
import game3 from "../assets/images/game3.png";
import game4 from "../assets/images/game4.png";

import linkedin from "../assets/images/linkedin.png";
import github from "../assets/images/github.jpg";
import facebook from "../assets/images/facebook.webp";
import gmail from "../assets/images/gmail.webp"
import xsocial from "../assets/images/x.avif";
import instagram from "../assets/images/instagram.avif";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
// import  from "swiper";


const Home = () => {


    return (
        <div>
            {/* greeting section */}
            <section className="py-10">
                <Container>
                    <div className="flex flex-col items-center md:flex-row md:items-start my-auto">
                        {/* greeting text */}
                        <div className="w-full md:w-1/2 my-auto">
                            {/* name */}
                            <h1 className="text-5xl lg:text-7xl">Hi, I'm Md Maruf Ur Rahman Munna</h1>
                            {/* tags */}
                            <p className="text-3xl mt-10">Web Developer | Problem Solver | Competitive Programmer | Solved 500+ problems on various online judges.</p>
                            {/* social links */}
                            <div className="flex gap-2 my-10 flex-wrap">
                                {/* github */}
                                <a href='https://github.com/maruf-git' className="p-3  bg-[#333333] hover:bg-[#000000] transition duration-700 rounded-full" target="_blank">
                                    <FaGithub size={25} />
                                </a>
                                {/* linkedin */}
                                <a href="https://www.linkedin.com" className="p-3  bg-[#0e76a8] hover:bg-[#000000] transition duration-500 rounded-full" target="_blank">
                                    <FaLinkedinIn size={25} />
                                </a>
                                {/* gmail */}
                                <a href="mailto:munna.csehstu@gmail.com" className="p-3  bg-[#ea4336] hover:bg-[#000000] transition duration-700 rounded-full" target="_blank">
                                    <IoMail size={25} />
                                </a>
                                {/* facebook */}
                                <a href='https://www.facebook.com/maroof.ahmed.446218' className="p-3  bg-[#3c5998] hover:bg-[#000000] transition duration-700 rounded-full">
                                    <FaFacebookF size={25} />
                                </a>
                                {/* twitter */}
                                <a href='https://x.com' className="p-3  bg-[#333333] hover:bg-[#000000] transition duration-700 rounded-full">
                                    <FaXTwitter size={25} />
                                </a>
                                {/* instagram */}
                                <a href='https://www.instagram.com' className="p-3  bg-[#c13684] hover:bg-[#000000] transition duration-700 rounded-full">
                                    <FaInstagram size={25} />
                                </a>
                            </div>
                            {/* contact me button */}
                            <div>
                                <a href="#contact-me" className="btn bg-[#0745ad] text-white hover:text-[#0745ad] hover:bg-white border-none text-xl">CONTACT ME</a>
                            </div>
                        </div>
                        {/* greeting image */}
                        <div className="w-full md:w-1/2 overflow-hidden flex justify-center items-center my-auto md:h-[550px] lg:h-[600px]">
                            <Lottie
                                animationData={greetingDark}
                                className="object-cover w-full md:scale-[2] lg:scale-[1.8] xl:scale-[1.5] max-w-none"
                            />
                        </div>
                    </div>
                </Container>
            </section>

            {/* skills section */}
            <section id="skills" className="pt-10 md:pt-40">
                <Container>
                    <div className="flex flex-col justify-center items-center md:flex-row md:gap-14 md:items-start">
                        {/* developer lottie */}
                        <div className="w-full h-full md:w-1/2 order-2 md:order-1  overflow-hidden flex justify-center items-center">
                            <Lottie
                                animationData={developerDark}
                                className="object-cover md:h-[400px] md:scale-[1.8] lg:scale-150 max-w-none"
                            />
                        </div>
                        {/* Skill text */}
                        <div className="w-full order-1 md:w-1/2 md:order-2 flex flex-col justify-center items-center md:items-start">
                            {/* Skills title */}
                            <h1 className=" text-6xl text-center">Skills</h1>
                            {/* skills list */}
                            <div className="mt-10 space-y-1">
                                {/* languages */}
                                <p className="text-3xl ">
                                    <span className="text-[#6600ff]">Languages: </span>C++ | JavaScript
                                </p>
                                {/* frontend */}
                                <p className="text-3xl"><span className="text-[#6600ff]">Frontend: </span> HTML | CSS | Tailwind | DaisyUI | React</p>
                                {/* backend */}
                                <p className="text-3xl"><span className="text-[#6600ff]">Backend: </span> Express.Js | Node.Js | Firebase  | MongoDB</p>
                                {/* Tools */}
                                <p className="text-3xl"><span className="text-[#6600ff]">Tools: </span> Git | Chrome Dev Tool</p>
                            </div>


                        </div>

                    </div>
                </Container>
            </section>

            {/* education section */}
            <section id="education" className="pt-20 md:pt-40">
                <Container>
                    <h1 className="text-4xl md:text-6xl text-center md:text-start">Education</h1>
                    {/* institutions */}
                    <div className="mt-10 space-y-5 w-full group">
                        {/* university */}
                        <div className="flex flex-col items-center md:flex-start md:flex-row md:gap-5">
                            {/* logo */}
                            <div>
                                <img className="w-28 object-cover" src={hstuLogo} alt="HSTU logo" />
                            </div>
                            {/* university details */}
                            <div className="space-y-1 text-center md:text-start">
                                <h1 className="text-3xl font-semibold">Hajee Mohammad Danesh Science and Technology University</h1>
                                <p className="text-xl ">Bachelor of Science in Computer Science and Engineering</p>
                                <p>February 2021 - Present</p>
                                <p>Dinajur, Rangpur, Bangladesh</p>
                            </div>

                        </div>
                        <div className="border w-[60%] group-hover:w-full group-hover:border-blue-500 ease-in-out duration-700">

                        </div>
                    </div>
                </Container>
            </section>

            {/* problem solving section*/}
            <section id="problem-solving" className="pt-20 md:pt-40">
                <Container>
                    {/* title */}
                    <h1 className="text-4xl md:text-6xl text-center md:text-start">Problem Solving Activities</h1>
                    <p className="my-5 text-xl text-center md:text-start">My Competitive Programming Journey</p>
                    {/* problem solving cards */}
                    <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                        {/* codeforces */}
                        <div className="flex flex-col justify-center items-center border p-10 rounded-lg problem-solving-card ">
                            <img className="w-[250px] h-[250px] object-cover" src={codeforces} alt="Codeforces logo" />
                            <div className="text-center mt-5 space-y-2">
                                <p className="text-xl">Newbie</p>
                                <p className="text-xl">Rating: 1100+</p>
                                <p>Currently I am learning data structures, algorithms and solving problems regularly.</p>
                            </div>
                            <div className="flex gap-2 justify-center  w-full mt-5">
                                <a className="btn btn-xs bg-[#0745ad] text-white border-none hover:bg-blue-950" href="https://codeforces.com/profile/maruf710" target="_blank">maruf710</a>
                                <a className="btn btn-xs bg-[#0745ad] text-white border-none hover:bg-blue-950" href="https://codeforces.com/profile/nthbit" target="_blank">nthbit</a>
                            </div>
                        </div>
                        {/* codechef */}
                        <div className="flex flex-col justify-center items-center border p-10 rounded-lg problem-solving-card">
                            <img className="w-[250px] h-[250px] object-cover" src={codechef} alt="codechef logo" />
                            <div className="text-center mt-5 space-y-2">
                                <p className="text-xl">1 Star</p>
                                <p className="text-xl">Rating: 1300+</p>
                                <p>Currently I am learning data structures, algorithms and solving problems regularly.</p>
                            </div>
                            <div className="flex gap-2 justify-center  w-full mt-5">
                                <a className="btn btn-xs bg-[#0745ad] text-white border-none hover:bg-blue-950" href="https://www.codechef.com/users/maruf710" target="_blank">maruf710</a>

                            </div>
                        </div>
                        {/* leetcode */}
                        <div className="flex flex-col justify-center items-center border p-10 rounded-lg problem-solving-card">
                            <img className="!w-[250px] !h-[250px] object-cover" src={leetcode} alt="leetcode logo" />
                            <div className="text-center mt-5 space-y-2">
                                <p className="text-xl">Newbie</p>
                                <p className="text-xl">Points: 19</p>
                                <p>Currently I am learning data structures, algorithms and solving problems regularly.</p>
                            </div>
                            <div className="flex gap-2 justify-center  w-full mt-5">
                                <a className="btn btn-xs bg-[#0745ad] text-white border-none hover:bg-blue-950" href="https://leetcode.com/u/Maruf710" target="_blank">Maruf710</a>

                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* projects section*/}
            <section id="projects" className="pt-20 md:pt-40">
                <Container>
                    {/* title */}
                    <h1 className="text-4xl md:text-6xl text-center md:text-start">Projects</h1>
                    {/* projects container */}
                    <div className="mt-10 space-y-10">
                        {/* individual projects/view blog site */}
                        <div className="flex flex-col gap-5 lg:flex-row lg:gap-14 border rounded-lg p-10 problem-solving-card">
                            {/*left side/ swiper */}
                            <div className="w-full lg:w-[40%]">
                                <Swiper
                                    spaceBetween={30}
                                    centeredSlides={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    navigation={true}
                                    modules={[Autoplay, Pagination, Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide className="">
                                        <img className=" w-full object-cover" src={view1} alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide lassName="">
                                        <img className=" w-full object-cover" src={view2} alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide lassName="">
                                        <img className=" w-full object-cover" src={view3} alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide lassName="">
                                        <img className=" w-full object-cover" src={view4} alt="" />
                                    </SwiperSlide>


                                </Swiper>
                                {/* preview and source code button */}
                                <div className="flex flex-col sm:flex-row gap-5 justify-center mt-5">
                                    <a className="btn bg-[#0745ad] text-white hover:text-[#0745ad] hover:bg-white border-none text-xl" href="https://view-blog-website.web.app/" target="_blank">Live Preview</a>

                                    <a className="btn bg-[#0745ad] text-white hover:text-[#0745ad] hover:bg-white border-none text-xl" href="https://github.com/programming-hero-web-course2/b10a11-client-side-maruf-git" target="_blank">Source Code</a>
                                </div>
                            </div>
                            {/* project details */}
                            <div>
                                <h1 className="text-3xl md:text-5xl">TheView - A User Friendly Blog Website</h1>
                                <p className="mt-2 mb-5 text-xl">TheView is a Full-Stack Project. The website has dynamic web pages where users can post blog, comment on blog , add blog to wishlist etc. many more.</p>
                                <ul className="list-disc list-inside text-xl  space-y-1">
                                    <li className="">Users can post blog, comment on blog and add blog to their wishlist.</li>
                                    <li>Users can search filter and sort blogs.</li>
                                    <li>Users Can Create an Account and Login Via firebase authentication.</li>
                                    <li><span className="text-[#6600ff]">Frontend Technologies: </span>Tailwind, DaisyUI, React Js, React Router, Firebase Authentication.</li>
                                    <li><span className="text-[#6600ff]">Backend Technologies: </span>Express.Js, Node.Js, MongoDB Js, React Router, Cookies.</li>
                                </ul>
                            </div>
                        </div>
                        {/* individual projects/ chill gamer site */}
                        <div className="flex flex-col gap-5 lg:flex-row lg:gap-14 border rounded-lg p-10 problem-solving-card">
                            {/* swiper */}
                            <div className="w-full lg:w-[40%]">
                                <Swiper
                                    spaceBetween={30}
                                    centeredSlides={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    navigation={true}
                                    modules={[Autoplay, Pagination, Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <img className=" w-full object-cover" src={game1} alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className=" w-full object-cover" src={game2} alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className=" w-full object-cover" src={game3} alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className=" w-full object-cover" src={game4} alt="" />
                                    </SwiperSlide>
                                </Swiper>
                                {/* live preview and source code button */}
                                <div className="flex flex-col sm:flex-row gap-5 justify-center mt-5">
                                    <a className="btn bg-[#0745ad] text-white hover:text-[#0745ad] hover:bg-white border-none text-xl" href="https://game-review-4919a.web.app/" target="_blank">Live Preview</a>

                                    <a className="btn bg-[#0745ad] text-white hover:text-[#0745ad] hover:bg-white border-none text-xl" href="https://github.com/programming-hero-web-course2/b10-a10-client-side-maruf-git" target="_blank">Source Code</a>
                                </div>
                            </div>
                            {/* project details */}
                            <div>
                                <h1 className="text-3xl md:text-5xl">Chill Gamer - A game review application</h1>
                                <p className="mt-2 mb-5 text-xl">This is a Full-Stack Project. The goal of this application is to provide a platform where users can explore and share game reviews.</p>
                                <ul className="list-disc list-inside text-xl  space-y-1">
                                    <li className="">Users can add new review and update it.</li>
                                    <li>Users can  filter and sort reviews.</li>
                                    <li>Users Can Create an Account and Login Via firebase authentication.</li>
                                    <li><span className="text-[#6600ff]">Frontend Technologies: </span>Tailwind, DaisyUI, React Js, React Router, Firebase Authentication</li>
                                    <li><span className="text-[#6600ff]">Backend Technologies: </span>Express.Js, Node.Js, MongoDB Js, React Router.</li>
                                </ul>
                            </div>
                        </div>
                        {/* individual projects/discount site */}
                        <div className="flex flex-col gap-5 lg:flex-row lg:gap-14 border rounded-lg p-10 problem-solving-card">
                            {/*left side/ swiper */}
                            <div className="w-full lg:w-[40%]">
                                <Swiper
                                    spaceBetween={30}
                                    centeredSlides={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    navigation={true}
                                    modules={[Autoplay, Pagination, Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <img className=" w-full object-cover" src={discount1} alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className=" w-full object-cover" src={discount2} alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className=" w-full object-cover" src={discount3} alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className=" w-full object-cover" src={discount4} alt="" />
                                    </SwiperSlide>

                                </Swiper>
                                {/*live preview and source code button */}
                                <div className="flex flex-col sm:flex-row gap-5 justify-center mt-5">
                                    <a className="btn bg-[#0745ad] text-white hover:text-[#0745ad] hover:bg-white border-none text-xl" href="https://discount-pro-200b8.web.app/" target="_blank">Live Preview</a>

                                    <a className="btn bg-[#0745ad] text-white hover:text-[#0745ad] hover:bg-white border-none text-xl" href="https://github.com/programming-hero-web-course1/b10-a9-authentication-maruf-git" target="_blank">Source Code</a>
                                </div>
                            </div>
                            {/* right side/ project details */}
                            <div>
                                {/*  */}
                                <h1 className="text-3xl md:text-5xl">Discount Pro -A Coupon Collecting Application</h1>
                                <p className="mt-2 mb-5 text-xl">This project is a simple Coupon Collecting Application designed to help users easily find and use discount coupons for popular e-commerce shops. </p>
                                <ul className="list-disc list-inside text-xl  space-y-1">
                                    <li className="">Users can find coupons, collect coupons easily.</li>
                                    <li>Users can search coupons for specific a brand.</li>
                                    <li>Users Can Create an Account and Login Via firebase authentication.</li>
                                    <li><span className="text-[#6600ff]">Frontend Technologies: </span>Tailwind, DaisyUI, React Js, React Router, Firebase Authentication.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* blogs section */}
            {/* <section id="blogs" className="pt-40">
                <Container>

                </Container>
            </section> */}

            {/* social section */}
            <section id="social" className="pt-20 md:pt-40">
                <Container>
                    {/* title */}
                    <h1 className="text-4xl md:text-6xl text-center md:text-start">Social Media Connections</h1>
                    <p className="my-5 text-xl text-center md:text-start">I love to connect with people with similar interests. Let's connect if you want.</p>

                    {/* social cards container */}
                    <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                        {/* linkedin */}
                        <div className="flex flex-col justify-center items-center border p-10 rounded-lg problem-solving-card ">
                            <img className="w-[250px] h-[250px] object-cover" src={linkedin} alt="linkedin logo" />
                            <div className="flex gap-2 justify-center  w-full mt-5">
                                <a className="btn btn-xs bg-[#0745ad] text-white border-none hover:bg-blue-950" href="https://www.linkedin.com/" target="_blank">Let's connect</a>

                            </div>
                        </div>
                        {/* github */}
                        <div className="flex flex-col justify-center items-center border p-10 rounded-lg problem-solving-card">
                            <img className="w-[250px] h-[250px] object-cover" src={github} alt="github logo" />

                            <div className="flex gap-2 justify-center  w-full mt-5">
                                <a className="btn btn-xs bg-[#0745ad] text-white border-none hover:bg-blue-950" href="https://github.com/maruf-git" target="_blank">Follow me</a>

                            </div>
                        </div>
                        {/* facebook */}
                        <div className="flex flex-col justify-center items-center border p-10 rounded-lg problem-solving-card">
                            <img className="!w-[250px] !h-[250px] object-cover" src={facebook} alt="facebook logo" />
                            <div className="flex gap-2 justify-center  w-full mt-5">
                                <a className="btn btn-xs bg-[#0745ad] text-white border-none hover:bg-blue-950" href="https://www.facebook.com/maroof.ahmed.446218" target="_blank">Profile</a>

                            </div>
                        </div>
                        {/* gmail */}
                        <div className="flex flex-col justify-center items-center border p-10 rounded-lg problem-solving-card">
                            <img className="!w-[250px] !h-[250px] object-cover" src={gmail} alt="gmail logo" />
                            <div className="flex gap-2 justify-center  w-full mt-5">
                                <a className="btn btn-xs bg-[#0745ad] text-white border-none hover:bg-blue-950" href="mailto:munna.csehstu@gmail.com" target="_blank">Write a mail</a>

                            </div>
                        </div>
                        {/* x social media */}
                        <div className="flex flex-col justify-center items-center border p-10 rounded-lg problem-solving-card">
                            <img className="!w-[250px] !h-[250px] object-cover" src={xsocial} alt="x logo" />
                            <div className="flex gap-2 justify-center  w-full mt-5">
                                <a className="btn btn-xs bg-[#0745ad] text-white border-none hover:bg-blue-950" href="https://x.com" target="_blank">Follow me</a>

                            </div>
                        </div>
                        {/* instagram */}
                        <div className="flex flex-col justify-center items-center border p-10 rounded-lg problem-solving-card">
                            <img className="!w-[250px] !h-[250px] object-cover" src={instagram} alt="instagram logo" />
                            <div className="flex gap-2 justify-center  w-full mt-5">
                                <a className="btn btn-xs bg-[#0745ad] text-white border-none hover:bg-blue-950" href="https://www.instagram.com" target="_blank">Follow me</a>

                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* contact me */}
            <section id="contact-me" className="pt-20 md:pt-40">
                <Container>
                    <div className="text-center md:text-start lg:text-start flex flex-col items-center md:items-start">
                        {/* title */}
                        <h1 className="text-4xl md:text-6xl">Contact Me</h1>
                        <p className="my-5 text-xl uppercase">If you want to hire me or have other queries, then knock me anytime. I try to reply within 24 hours.</p>
                        <a href="mailto:munna.csehstu@gmail.com" className="text-xl sm:text-3xl lg:text-5xl hover:text-[#0745ad]">munna.csehstu@gmail.com</a>
                        {/* social links */}
                        <div className="flex gap-2 my-10 flex-wrap">
                            {/* github */}
                            <a href='https://github.com/maruf-git' className="p-3  bg-[#333333] hover:bg-[#000000] transition duration-700 rounded-full" target="_blank">
                                <FaGithub size={25} />
                            </a>
                            {/* linkedin */}
                            <a href="https://www.linkedin.com" className="p-3  bg-[#0e76a8] hover:bg-[#000000] transition duration-500 rounded-full" target="_blank">
                                <FaLinkedinIn size={25} />
                            </a>
                            {/* gmail */}
                            <a href="mailto:munna.csehstu@gmail.com" className="p-3  bg-[#ea4336] hover:bg-[#000000] transition duration-700 rounded-full" target="_blank">
                                <IoMail size={25} />
                            </a>
                            {/* facebook */}
                            <a href='https://www.facebook.com/maroof.ahmed.446218' className="p-3  bg-[#3c5998] hover:bg-[#000000] transition duration-700 rounded-full">
                                <FaFacebookF size={25} />
                            </a>
                            {/* twitter */}
                            <a href='https://x.com' className="p-3  bg-[#333333] hover:bg-[#000000] transition duration-700 rounded-full">
                                <FaXTwitter size={25} />
                            </a>
                            {/* instagram */}
                            <a href='https://www.instagram.com' className="p-3  bg-[#c13684] hover:bg-[#000000] transition duration-700 rounded-full">
                                <FaInstagram size={25} />
                            </a>
                        </div>
                    </div>
                </Container>
            </section>


        </div>
    );
};

export default Home;