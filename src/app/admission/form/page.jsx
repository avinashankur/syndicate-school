import styles from "./form.module.scss";
import FormCard from "../../../../components/FormCard/FormCard";
import ButtonPrimary from "../../../../components/ButtonPrimary";

const form = () => {
  return (
    <div className="container">
      <form className={styles.theForm}>
        <p>Admission form for Academic Year 2023-2024.</p>
        <div className={styles.flex}>
          <div className={styles.leftSide}>
            <h2>Student's Profile</h2>
            <FormCard
              label="Full Name"
              type="text"
              placeholder="John Doe"
              id="name"
            />

            <FormCard
              label="Admission Sought For Class"
              type="text"
              placeholder="12 / Intermediate"
              id="studying-class"
            />
            <FormCard label="Academic Year" type="date" placeholder="" id="" />
            <FormCard
              label="Aadhar Number"
              type="number"
              placeholder="3457 59823 98237"
              id=""
            />
            <FormCard
              label="Residential Address"
              type="text"
              placeholder="Janakpuri, New Delhi, 41005"
              id=""
            />
          </div>
          <div className={styles.rightSide}>
            <h2>Documents</h2>
            <div>
              <label htmlFor="">Passport Photo</label> <br />
              <input type="file" />
            </div>
            <div>
              <label htmlFor="">Aadhar Card</label> <br />
              <input type="file" accept="pdf/" />
            </div>
            <div>
              <label htmlFor="">Transfer Certifiate (TC)</label> <br />
              <input type="file" />
            </div>
            <div>
              <label htmlFor="">Marksheet of Previous Class</label> <br />
              <input type="file" />
            </div>
          </div>
        </div>
        <p className={styles.margin}>This is a registration form. You will have to bring a printout of this form in the school for further processes.</p>
        <div className={styles.butt}>
          <ButtonPrimary title="Submit" />
        </div>
      </form>
    </div>
  );
};

export default form;
