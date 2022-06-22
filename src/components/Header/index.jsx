import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import { NavLink } from "react-router-dom";

Header.propTypes = {

};

function Header(props) {
    return (
        <header className="App-header px-4">
            <div className="header__inner d-flex justify-content-between align-items-center">
                <div className="header__logo T24B_32 text-uppercase">
                    <NavLink className="text-decoration-none" to="/">Construction Support System</NavLink>
                </div>
                <div className="header__navigation d-flex align-items-center">
                    {/*<button type="button" className="button button-bg T12R_16 me-4"><span>建設物価情報</span></button>*/}
                    {/*<button type="button" className="button button-bg T12R_16 me-4"><span>建設物価情報</span></button>*/}
                    {/*<div className="T12R_16 me-4">User Name</div>*/}
                    <button type="button" className="button T12R_16"><span>ログアウト</span></button>
                </div>
            </div>
        </header>
    );
}

export default Header;