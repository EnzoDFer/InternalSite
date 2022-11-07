import { ReactNode } from "react";
import styles from "./Section.module.css";

export const Section = (
    {className,children}:{className?:string|undefined,children:ReactNode}
  ) => {
  return (
    <section 
      className={className?className:styles.sectionWrapper} 
    >
      <hr className={styles.divider} />
      {children}
    </section>
  );
}