import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import userAvatar from "../styles/assets/img/img1.jpg";
import logo from "../styles/assets/img/logo.png";
import {
    pagesMenu,
    uiElementsMenu,
    pagesMantenimientos
} from "../sharedComponents/data/Menu";

export default class Sidebar extends Component {
    toggleFooterMenu = (e) => {
        e.preventDefault();

        let parent = e.target.closest(".sidebar");
        parent.classList.toggle("footer-menu-show");
    }
    render() {
        return (
            <div className="sidebar">
                <div className="sidebar-header">
                    <Link to="/" className="sidebar-logo"> <img src={logo} alt="" /></Link>
                </div>
                <PerfectScrollbar className="sidebar-body" ref={ref => this._scrollBarRef = ref}>
                    <SidebarMenu onUpdateSize={() => this._scrollBarRef.updateScroll()} />
                </PerfectScrollbar>
                <div className="sidebar-footer">
                    <div className="sidebar-footer-top">
                        <div className="sidebar-footer-thumb">
                            <img src={userAvatar} alt="" />
                        </div>
                        <div className="sidebar-footer-body">
                            <h6><Link to="../pages/profile.html">Nombre del empleado</Link></h6>
                            <p>Puesto</p>
                        </div>
                        <Link onClick={this.toggleFooterMenu} to="" className="dropdown-link"><i className="ri-arrow-down-s-line"></i></Link>
                    </div>
                    <div className="sidebar-footer-menu">

                        <hr />
                        <nav className="nav">
                            <Link to="/pages/faq"><i className="ri-question-line"></i> FAQ</Link>
                            <hr />
                            <Link to="/pages/signin2"><i className="ri-logout-box-r-line"></i>Cerrar Sesión</Link>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

class SidebarMenu extends Component {
    populateMenu = (m) => {
        const menu = m.map((m, key) => {
            let sm;
            if (m.submenu) {
                sm = m.submenu.map((sm, key) => {
                    return (
                        <NavLink to={sm.link} className="nav-sub-link" key={key}>{sm.label}</NavLink>
                    )
                })
            }

            return (
                <li key={key} className="nav-item">
                    {(!sm) ? (
                        <NavLink to={m.link} className="nav-link"><i className={m.icon}></i> <span>{m.label}</span></NavLink>
                    ) : (
                        <div onClick={this.toggleSubMenu} className="nav-link has-sub"><i className={m.icon}></i> <span>{m.label}</span></div>
                    )}
                    {m.submenu && <nav className="nav nav-sub">{sm}</nav>}
                </li>
            )
        });

        return (
            <ul className="nav nav-sidebar">
                {menu}
            </ul>
        );
    }

    // Toggle menu group
    toggleMenu = (e) => {
        e.preventDefault();

        let parent = e.target.closest('.nav-group');
        parent.classList.toggle('show');

        this.props.onUpdateSize();
    }

    // Toggle submenu while closing siblings' submenu
    toggleSubMenu = (e) => {
        e.preventDefault();

        let parent = e.target.closest('.nav-item');
        let node = parent.parentNode.firstChild;

        while (node) {
            if (node !== parent && node.nodeType === Node.ELEMENT_NODE)
                node.classList.remove('show');
            node = node.nextElementSibling || node.nextSibling;
        }

        parent.classList.toggle('show');

        this.props.onUpdateSize();
    }

    render() {
        return (
            <React.Fragment>
                <div className="nav-group show">
                    <div className="nav-label" onClick={this.toggleMenu}>Pages</div>
                    {this.populateMenu(pagesMenu)}
                </div>
                <div className="nav-group show">
                    <div className="nav-label" onClick={this.toggleMenu}>UI Elements</div>
                    {this.populateMenu(uiElementsMenu)}
                </div>
                <div className="nav-group show">
                    <div className="nav-label" onClick={this.toggleMenu}>GESTION DE MANTENIMIENTOS</div>
                    {this.populateMenu(pagesMantenimientos)}
                </div>
            </React.Fragment>
        )
    }
}

window.addEventListener("click", function (e) {
    // Close sidebar footer menu when clicked outside of it
    let tar = e.target;
    let sidebar = document.querySelector(".sidebar");
    if (!tar.closest(".sidebar-footer") && sidebar) {
        sidebar.classList.remove("footer-menu-show");
    }

    // Hide sidebar offset when clicked outside of sidebar
    if (!tar.closest(".sidebar") && !tar.closest(".menu-link")) {
        document.querySelector("body").classList.remove("sidebar-show");
    }
});

window.addEventListener("load", function () {
    let skinMode = localStorage.getItem("sidebar-skin");
    let HTMLTag = document.querySelector("html");

    if (skinMode) {
        HTMLTag.setAttribute("data-sidebar", skinMode);
    }
});