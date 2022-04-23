import styles from './spinner.module.scss';

const Spinner = () => {
  return (
    <div className={styles.spinnerOverlay}>
      <div className={styles.spinnerContainer} />
    </div>
  );
};

export default Spinner;
