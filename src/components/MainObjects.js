import React from 'react';

// Icons
import arrow from "../assets/icons/arrow.svg";
import arrowBold from "../assets/icons/arrow-bold.svg";
import list from "../assets/icons/list.svg";

// Images
import imageHand from "../assets/images/image-hand.png";
import imageGear from "../assets/images/image-gear.jpeg";

// Styles
import styles from "./MainObjects.module.css";

const MainObjects = () => {
    return (
        <div className={styles.container}>
            <div className={styles.filter}>
                <a href="#" className={styles.left}>
                    <img src={arrow} alt="arrow icon" />
                    <p>Manage Labels</p>
                </a>
                <div className={styles.right}>
                    <p>Sort by Date</p>
                    <img src={arrowBold} alt="arrow Bold" />
                </div>
            </div>
            <div className={styles.handList}>
                <h2>Hand</h2>
                <div className={styles.list}>
                    <div className={styles.item}>
                        <img className={styles.imageItem} src={imageHand} alt="imageHand" />
                        <div className={styles.footerItem}>
                            <p>Hand</p>
                            <img className={styles.iconList} src={list} alt="list" />
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img className={styles.imageItem} src={imageHand} alt="imageHand" />
                        <div className={styles.footerItem}>
                            <p>Hand</p>
                            <img className={styles.iconList} src={list} alt="list" />
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img className={styles.imageItem} src={imageHand} alt="imageHand" />
                        <div className={styles.footerItem}>
                            <p>Hand</p>
                            <img className={styles.iconList} src={list} alt="list" />
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img className={styles.imageItem} src={imageHand} alt="imageHand" />
                        <div className={styles.footerItem}>
                            <p>Hand</p>
                            <img className={styles.iconList} src={list} alt="list" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.gearList}>
                <h2>Gear-1</h2>
                <div className={styles.list}>
                    <div className={styles.item}>
                        <img className={styles.imageItem} src={imageGear} alt="Gear-1" />
                        <div className={styles.footerItem}>
                            <p>Gear-1</p>
                            <img className={styles.iconList} src={list} alt="list" />
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img className={styles.imageItem} src={imageGear} alt="Gear-1" />
                        <div className={styles.footerItem}>
                            <p>Gear-1</p>
                            <img className={styles.iconList} src={list} alt="list" />
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img className={styles.imageItem} src={imageGear} alt="Gear-1" />
                        <div className={styles.footerItem}>
                            <p>Gear-1</p>
                            <img className={styles.iconList} src={list} alt="list" />
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img className={styles.imageItem} src={imageGear} alt="Gear-1" />
                        <div className={styles.footerItem}>
                            <p>Gear-1</p>
                            <img className={styles.iconList} src={list} alt="list" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainObjects;