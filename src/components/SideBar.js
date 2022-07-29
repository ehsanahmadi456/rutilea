import React from 'react';

// images
import menu from "../assets/icons/menu.svg";
import setup from "../assets/icons/setup.svg";
import arrow from "../assets/icons/arrow.svg";
import arrowBold from "../assets/icons/arrow-bold.svg";
import process from "../assets/icons/process.svg";
import monitoring from "../assets/icons/monitoring.svg";
import operators from "../assets/icons/operators.svg";
import error from "../assets/icons/error.svg";

// icons
import logo from "../assets/icons/logo.svg";

// Styles
import styles from "./SideBar.module.css";

const SideBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <div className={styles.headerSidebar}>
                    <img className={styles.logo} src={logo} alt="logo" />
                    <a href="#">
                        <img src={menu} alt="" />
                        <p>Dashboard</p>
                    </a>
                </div>
                <div className={styles.menuSidebar}>
                    <p className={styles.headMenu}>Operation</p>
                    <ul>
                        <li className={styles.firstList}><a href="">
                            <img src={setup} alt="" />
                            <p>Setup</p>
                            <img src={arrow} alt="" />
                            </a></li>
                        <li><a href="">
                            <img src={process} alt="" />
                            <p>Process</p>
                            </a></li>
                        <li><a href="">
                            <img src={monitoring} alt="" />
                            <p>Monitoring</p>
                            </a></li>
                        <li><a href="">
                            <img src={operators} alt="" />
                            <p>Operators</p>
                            </a></li>
                    </ul>
                </div>
                <div className={styles.footerSidebar}>
                    <div className={styles.upgradeBanner}>
                        <p>only <span>03</span> days left</p>
                        <button>Upgrade Now <img src={arrowBold} alt="arrowBold" /></button>
                    </div>
                    <div className={styles.errorText}>
                        <img src={error} alt="error icon" /> 
                        <p>Your Computation Resource Is About To Expire</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;