import ease2 from "../../images/ease2.svg";
import './styles.css';


function Header() {
    return (
        <header className="main-header">
            <img className="main-header-logo" src={ease2} alt=""/>
            <div className="main-header-menu">
                <ul className="header_list">
                    <li><a href="#">COLLECTIONS</a></li>
                    <li><a href="#">BLOG</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">CONTACTS</a></li>
                </ul>
            </div>
        </header>
    )


}

export default Header