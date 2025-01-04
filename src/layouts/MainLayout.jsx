import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Container from "../components/Container";


const MainLayout = () => {
    return (
        <div className="relative">
            {/* header section */}
            <header>
                {/* navbar */}
                <nav>
                    <Navbar></Navbar>
                </nav>

            </header>
            {/* main section */}
            <main className="pt-[112px]">
                <Outlet></Outlet>
            </main>
            {/* footer section */}
            <footer className="pt-20 pb-10">
                <Container>
                    <p className="text-center text-xl">Arigato gozaimasu for visting my portfolio.</p>
                </Container>
            </footer>
        </div>
    );
};

export default MainLayout;