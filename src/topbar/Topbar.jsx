import React from "react";
import styles from "./styles.module.scss";
import logo from "../assets/images/hai_logo.png";
import { Dropdown, Menu, Badge } from "antd";
import * as Bs from "react-icons/bs";
import * as Io from "react-icons/io";
import profileImage from "../assets/images/7f5f6335a64751190856.jpg";

export const TopBar = () => {
  const menu = (
    <Menu>
      <Menu.Item>
        <a rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Log out
        </a>
      </Menu.Item>
      <Menu.Item>
        <a rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Log out
        </a>
      </Menu.Item>
      <Menu.Item>
        <a rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Log out
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className={styles.top}>
      <div className={styles.topLeft}>
        <a href="/" className={styles.logo}>
          <img src={logo} alt="" />
        </a>
      </div>
      <div className={styles.topCenter}>
        <ul className={styles.topList}>
          <li className={styles.topListItem}>HOME</li>
          <li className={styles.topListItem}>ABOUT</li>
          <li className={styles.topListItem}>CONTACT</li>
          <li className={styles.topListItem}>WRITE</li>
        </ul>
      </div>
      <div className={styles.topRight}>
        <div className={styles.topRightImage}>
          <img className={styles.image} src={profileImage} alt="" />
          <span>hai</span>
        </div>
        <Badge count={5} size="small" className={styles.badge}>
          <div className={styles.topRightItem}>
            <Io.IoMdNotifications className={styles.icons} />
          </div>
        </Badge>

        <Dropdown overlay={menu} trigger={["click"]} placement="bottomRight">
          <div className={styles.topRightItem}>
            <Bs.BsFillCaretDownFill className={styles.icons} />
          </div>
        </Dropdown>
      </div>
    </div>
  );
};
