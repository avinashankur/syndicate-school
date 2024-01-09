import styles from './formCard.module.scss'

const FormCard = ({label, type, placeholder, id }) => {
  return (
    <div>
      <div className={styles.formControl}>
        <label htmlFor="">{label}</label><br />
        <input type={type} name="" placeholder={placeholder} id={id}  /> <br />
        {/* <small>Error Message</small> */}
      </div>
    </div>
  );
};

export default FormCard;
