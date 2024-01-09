import React from "react";
import styles from "./campus.module.scss";
import Image from "next/image";

const Campus = () => {
  return (
    <>
      <div className="container">
        <h1>Campus</h1>
        <div className={styles.image}>
          <Image src="/campus1.jpg" cover fill />
          <h1 className={styles.imageText}>Syndicate Campus Experience!</h1>
        </div>

        <h3 className={styles.getReady}>
          Get ready for years of great books, great conversations, and great
          friends. Life in the Syndicate National offers endless opportunities
          for academic enrichment, of course, but there’s room for plenty of
          extracurricular fun, too. Check out our many clubs, organizations, and
          events—some are long-standing traditions, and others are completely
          new. If you don’t see what you want, make it happen!
        </h3>
      </div>
      <div className={styles.image2}>
        <Image src="/campusEvent.jpg" cover fill />
        <div className={styles.imageText}>
          <p>clubs + activities</p>
          <h3>
            Singing, swing dancing, student government, and study groups ranging
            from Borges to de Beauvoir … the list of clubs and activities seems
            endless.
          </h3>
        </div>
      </div>
      <div className={styles.image2}>
        <Image src="/campusSports.jpg" cover fill />
        <div className={styles.imageText}>
          <p>ATHLETICS + FITNESS</p>
          <h3>
            Are you a Spartan or a Greenwave? Even if you’ve never played
            sports, prepare to swear eternal loyalty to your intramural team.
          </h3>
        </div>
      </div>
      <div className={styles.image2}>
        <Image src="/campusArt.jpg" cover fill />
        <div className={styles.imageText}>
          <p>ARTS + CULTURE</p>
          <h3>
            From Freshman Chorus on, your life at Syndicate will be steeped in
            the arts. Dive deeper with opportunities to sing, act, play music,
            write poetry, and more.
          </h3>
        </div>
      </div>
    </>
  );
};

export default Campus;
