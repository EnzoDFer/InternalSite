import { ReactNode } from "react";
import styles from "./Section.module.css";

export const Section = ({children}:{children:ReactNode}) => {
  return (
    <section className={styles.sectionWrapper} >
      <hr className={styles.divider} />
      {children}
    </section>
  );
}