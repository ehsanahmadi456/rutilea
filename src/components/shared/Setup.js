import React from 'react';

// Components
import MainObjects from '../MainObjects';
import Navbar from '../Navbar';
import SideBar from '../SideBar';

// Styles
import styles from "./Setup.module.css";

const Setup = () => {
    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <SideBar />
            </div>
            <div className={styles.main}>
                <Navbar />
                <MainObjects />
            </div>
        </div>
    );
};

export default Setup;