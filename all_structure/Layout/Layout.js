
import Footer from "../shared/Footer";
import NavBar from "../shared/NavBar";


const Layout = ({ children}) => {
    return (
        <div className="mx-10">
            <NavBar></NavBar>
            <main>{children}</main>
            <Footer></Footer>
        </div>
    );
};

export default Layout;