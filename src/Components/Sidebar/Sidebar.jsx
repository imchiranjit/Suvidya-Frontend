/* eslint-disable react/prop-types */

import styles from "./Sidebar.module.css";

// console.log(styles);

function Sidebar({
  cls,
  selectTab = null,
  setSelectTab = null,
  tabs,
  logo = true,
}) {
  return (
    <div className={`${styles.sidebar} ${cls}`}>
      <div className={styles.logo_box}>
        {logo && (
          <img
            src="/images/logo.png"
            alt="suvidya logo"
            className={styles.logo}
          />
        )}
      </div>

      <ul className={styles.cms_list}>
        {tabs.map((tab) => (
          <ListItem
            btnTxt={tab.text}
            key={tab.text}
            selectTab={selectTab}
            setSelectTab={setSelectTab}
          >
            {" "}
            {tab.icon}
          </ListItem>
        ))}
      </ul>
    </div>
  );
}

function ListItem({ btnTxt, children, selectTab, setSelectTab }) {
  function handleTabChange() {
    setSelectTab(btnTxt.toLowerCase());
  }
  return (
    <li className={styles.cms_list__item}>
      <button
        className={`${styles.btn} ${
          selectTab.toLowerCase() === btnTxt.toLowerCase() ? styles.active : ""
        }`}
        onClick={handleTabChange}
      >
        <span>{children}</span>
        {btnTxt}
      </button>
    </li>
  );
}

export default Sidebar;
