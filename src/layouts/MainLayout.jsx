import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Headroom from "react-headroom";


const MainLayout = () => {
    return (
        <div className="relative">
            {/* header section */}
            <header>
                {/* navbar */}
                <Headroom
                    style={{
                        zIndex: '1000'
                    }}
                >
                    <nav>
                        <Navbar></Navbar>
                    </nav>
                </Headroom>
            </header>
            {/* main section */}
            <main className="">
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