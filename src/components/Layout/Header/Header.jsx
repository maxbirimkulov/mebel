import HeaderTop from "./HeaderTop/HeaderTop.jsx";
import HeaderCenter from "./HeaderCenter/HeaderCenter.jsx";


const Header = () => {
    return (
        <header className="header">
            <HeaderTop/>
            <div className="container">
                <HeaderCenter/>
            </div>
        </header>
    );
};

export default Header;