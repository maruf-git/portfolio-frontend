import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import Headroom from 'react-headroom';
import { GiHamburgerMenu } from 'react-icons/gi';


const Navbar = () => {
    return (
        //    relative
        <div className="max-w-[1520px] mx-auto ">
            {/* fixed top-0 z-10 */}
            {/* desktop menu */}
            <Headroom style={{
                zIndex: '1000'
            }}>
                <div className="px-5 py-8 hidden md:flex items-center justify-between  bg-portDark w-full  ">
                    {/* logo name*/}
                    <div>
                        <h1 className="font-logo font-bold text-2xl px-2.5">Maruf Ur Rahman</h1>
                    </div>
                    {/* nav links */}
                    <div>
                        <ul className="flex items-center flex-wrap gap-2">
                            {/* theme toggle */}
                            <li className="hover:bg-[#0745ad] px-5 py-4 text-xl hidden">
                                <label className="swap swap-rotate">
                                    {/* this hidden checkbox controls the state */}
                                    <input type="checkbox" />

                                    {/* sun icon */}
                                    <svg
                                        className="swap-on h-10 w-10 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                                    </svg>

                                    {/* moon icon */}
                                    <svg
                                        className="swap-off h-10 w-10 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                                    </svg>
                                </label>
                            </li>

                            <li>
                                <a className="hover:bg-[#0745ad] px-5 py-4 text-xl" href='#skills'>Skills</a>
                            </li>
                            <li>
                                <a className="hover:bg-[#0745ad] px-5 py-4 text-xl" href="#education">Education</a>
                            </li>
                            <li>
                                <a className="hover:bg-[#0745ad] px-5 py-4 text-xl" href='#problem-solving'>Problem Solving</a>
                            </li>
                            <li>
                                <a className="hover:bg-[#0745ad] px-5 py-4 text-xl" href='#projects'>Projects</a>
                            </li>
                            <li>
                                <a className="hover:bg-[#0745ad] px-5 py-4 text-xl" href='#blogs'>Blogs</a>
                            </li>
                            <li>
                                <a className="hover:bg-[#0745ad] px-5 py-4 text-xl" href='#social'>Social</a>
                            </li>
                            <li >
                                <a className="hover:bg-[#0745ad] px-5 py-4 text-xl" href='#contact-me'>Contact Me</a>
                            </li>
                            <li>
                                <a className="hover:bg-[#0745ad] px-5 py-4 text-xl" href='https://docs.google.com/document/d/1uA3zJ9yxOoKW30vinK4DN5E14fQolwF2KDEa_FfiwyU/edit?usp=sharing' target="_blank">Resume</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </Headroom>

            {/* mobile menu */}
            <Headroom style={{
                zIndex: '1000'
            }}>

                <div className=" py-4 flex md:hidden items-center justify-between  bg-portDark overflow-hidden">
                    {/* logo name*/}
                    <div>
                        <h1 className="font-logo font-bold text-2xl px-2.5">Maruf Ur <br /> Rahman</h1>
                    </div>
                    {/* hamburger menu */}
                    <div className='px-2'>
                        <Menu>
                            <MenuButton >
                                <GiHamburgerMenu size={30} className='' />
                            </MenuButton>

                            <MenuItems
                                transition
                                anchor="bottom end"
                                className="w-full z-10 pt-10 origin-top-right rounded-xl border border-white/5 bg-[#171c28] p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                            >

                                <MenuItem>
                                    <a href='#skills' className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                        {/* <PencilIcon className="size-4 fill-white/30" /> */}
                                        Skills
                                        <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘E</kbd>
                                    </a>
                                </MenuItem>
                                <div className="my-1 h-px bg-white/5" />
                                <MenuItem>
                                    <a href="#education" className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                        {/* <Square2StackIcon className="size-4 fill-white/30" /> */}
                                        Education
                                        <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘D</kbd>
                                    </a>
                                </MenuItem>
                                <div className="my-1 h-px bg-white/5" />
                                <MenuItem>
                                    <a href="#problem-solving" className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                        {/* <ArchiveBoxXMarkIcon className="size-4 fill-white/30" /> */}
                                        Problem Solving
                                        <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘A</kbd>
                                    </a>
                                </MenuItem>
                                <div className="my-1 h-px bg-white/5" />
                                <MenuItem>
                                    <a href="#projects" className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                        {/* <TrashIcon className="size-4 fill-white/30" /> */}
                                        Projects
                                        <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘D</kbd>
                                    </a>
                                </MenuItem>
                                <div className="my-1 h-px bg-white/5" />
                                <MenuItem>
                                    <a href="#blogs" className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                        {/* <TrashIcon className="size-4 fill-white/30" /> */}
                                        Blogs
                                        <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘D</kbd>
                                    </a>
                                </MenuItem>
                                <div className="my-1 h-px bg-white/5" />
                                <MenuItem>
                                    <a href="#social" className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                        {/* <TrashIcon className="size-4 fill-white/30" /> */}
                                        Social
                                        <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘D</kbd>
                                    </a>
                                </MenuItem>
                                <div className="my-1 h-px bg-white/5" />
                                <MenuItem>
                                    <a href="#contact-me" className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                        {/* <TrashIcon className="size-4 fill-white/30" /> */}
                                        Contact Me
                                        <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘D</kbd>
                                    </a>
                                </MenuItem>
                                <div className="my-1 h-px bg-white/5" />
                            </MenuItems>
                        </Menu>
                    </div>
                </div>
            </Headroom>

        </div>

    );
};

export default Navbar;