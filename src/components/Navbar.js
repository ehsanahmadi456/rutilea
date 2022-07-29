import React from 'react';

// Icons
import arrow from "../assets/icons/arrow.svg";
import notification from "../assets/icons/notification.svg";

// Images
import imageUser from "../assets/images/image-user.png";

// styles
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <ul>
                    <li><a href="#">Stations</a></li>
                    <li><a href="#">Input Streams</a></li>
                    <li><a href="#">ROI Frames</a></li>
                    <li><a href="#">Objects</a></li>
                    <li><a href="#">Train</a></li>
                    <li><a href="#">Integrations</a></li>
                </ul>
            </div>
            <div className={styles.right}>
                <div className={styles.menuUser}>
                    <img className={styles.imageUser} src={imageUser} alt="imageUser" />
                    <img className={styles.iconArrow} src={arrow} alt="arrow" />
                </div>
                <div className={styles.notification}>
                    <img src={notification} alt="notification" />
                    <p>12</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;