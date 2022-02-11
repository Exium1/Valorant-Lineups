import React, { Component } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";
import PageContainer from "./PageContainer";

class Navbar extends Component {
    state = {
        isOpen: false
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        return (
            <>
                <nav className="navbar">
                    <PageContainer>
                        <Link to="/" className="navbar-logo">
                            <img
                                src={"/assets/images/ValorantLogo.png"}
                                alt=""
                            />
                        </Link>
                        <div className="nav-div"></div>
                        <div className="nav-toggle" onClick={this.toggle}>
                            {this.state.isOpen ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul
                            className={
                                this.state.isOpen
                                    ? "nav-links nav-res-links"
                                    : "nav-links"
                            }
                        >
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                            {/* <div class="nav-dropdown">
                            <li>
                                <a href="#" class="with-link"><i class="fas fa-user dropdown-icon"></i> Username <i class="fa fa-caret-down"></i></a>
                            </li>
                            <div class="nav-dropdown-content">
                                <a href="#">Dashboard</a>
                                <a href="#">Profile</a>
                                <a href="#">Settings</a>
                                <a href="#"><i class="fas fa-sign-out-alt"></i> Logout</a>
                            </div>
                        </div> */}
                        </ul>
                    </PageContainer>
                </nav>
            </>
        );
    }
}

export default Navbar;
