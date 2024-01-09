import React from "react";
import styles from "./aboutCard.module.scss";
import Image from "next/image";

const AboutCard = ({ image, title, statement, name }) => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.image}>
        <Image src={image} fill />
      </div>
      <div className={styles.text}>
        <h3>{title}</h3>
        <p>{statement}</p>
        <p className={styles.name}>{name}</p>
      </div>
    </div>
  );
};

export default AboutCard;
