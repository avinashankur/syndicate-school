import styles from "./admission.module.scss";
import Link from "next/link";
import ButtonPrimary from "../../../components/ButtonPrimary";

const Admission = () => {
  const expired = false;

  return (
    <div className="container">
      <div className={styles.wrap}>
        <h1 className={styles.title}>Admission</h1>
        <p>Admission from 25-02-2024 to 31-03-2024.</p>
        {!expired ? (
          <div className={styles.mainContent}>
            <h2 className={styles.open}>Admission Open</h2>
            <ol>
              <li>Latest updates regarding admission will be posted here.</li>
              <li>
                Make sure to keep an eye on the last date of applying for
                admission.
              </li>
              <li>Admission Open for all classes for the session 2024-2025.</li>
              <li>Documents required for admission are:</li>
              <ul>
                <li>Aadhar Card</li>
                <li>Transfer Certificate</li>
                <li>Marksheet</li>
                <li>Passport Photograph</li>
                <li>Character Certificate</li>
              </ul>
              <li>
                Read Terms and Conditions <Link href="/terms">here</Link>.
              </li>
              <li>Click <Link href="/admission/form" >here</Link> to fill the admission form.</li>
            </ol>
          </div>
        ) : (
          <h2 className={styles.timeout}>Time for admission is over.</h2>
        )}
      </div>
    </div>
  );
};

export default Admission;
