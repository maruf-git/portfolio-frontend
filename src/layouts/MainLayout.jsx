import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const MainLayout = () => {
    return (
        <div className="style-dark font-main">
            {/* header section */}
            <header>
                {/* navbar */}
                <nav className="max-w-[1520px] mx-auto px-4 xl:px-0">
                    <Navbar></Navbar>
                </nav>
            </header>
            {/* main section */}
            <main>
                <Outlet></Outlet>
            </main>
            {/* footer section */}
            <footer>

            </footer>
        </div>
    );
};

export default MainLayout;