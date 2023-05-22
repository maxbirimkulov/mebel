import {Link} from "react-router-dom";


//media
import logo from "../../../../assets/logo.svg"
import {IoIosSearch} from "react-icons/io"
import {AiOutlineHeart} from "react-icons/ai"
import {HiOutlineShoppingBag} from "react-icons/hi"
import {FiUser} from "react-icons/fi"
const HeaderCenter = () => {
    return (
        <nav className="header__center">
            <Link to={'/'}>
                <img src={logo} alt=""/>
            </Link>
            <div className="header__center-search">
                <div className="header__center-glass">
                    <IoIosSearch/>
                </div>
                <input
                    type="search"
                    className="header__center-field"
                    placeholder="Поиск"
                />
            </div>
            <div className="header__center-icons">
                <Link to={'/favorites'} className="header__center-icon">
                    <AiOutlineHeart/>
                </Link>
                <Link to={'/favorites'}>
                    <HiOutlineShoppingBag className="header__center-icon"/>
                </Link>
                <Link to={'/favorites'} className="header__center-icon">
                    <FiUser/>
                </Link>
            </div>
        </nav>
    );
};

export default HeaderCenter;