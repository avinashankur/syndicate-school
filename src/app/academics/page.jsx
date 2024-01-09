import styles from "./academics.module.scss";
import AcademicSidebar from "../../../components/AcademicSidebar/AcademicSidebar";

const Academics = () => {
  return (
    <div className="container">
      <h1 className={styles.title}>Academics</h1>
      <div className={styles.wrap}>
        <div className={styles.sidebar}>
          <AcademicSidebar />
        </div>
        <div className={styles.rightSide}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis similique voluptatum aliquam inventore ipsum ea mollitia voluptatem? Id rem consectetur rerum similique fugit quibusdam quo aperiam saepe eos? Quo beatae iusto ullam aspernatur fuga aut explicabo non excepturi vel assumenda, at veritatis deserunt tempore, facilis ex recusandae cupiditate accusantium eos!</p>
        </div>
      </div>
    </div>
  );
};

export default Academics;
