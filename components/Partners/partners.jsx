import Image from "next/image";
import partnersList from "../../resources/partners";
import styles from "./partners.module.scss";

const Partners = () => {
  console.log();
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h3 className={styles.title}>PARTNERS</h3>
        <ul className={styles.list}>
          {partnersList.map(({ id, img, width, height, alt }) => (
            <li key={id} className={styles.item}>
              <Image src={img} width={width} height={height} alt={alt} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Partners;