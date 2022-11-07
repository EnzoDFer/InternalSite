import { ReactNode } from "react";
import styles from "./Section.module.css";
import { Divider } from "@chakra-ui/react";

export const Section = ({children}:{children:ReactNode}) => {
  return (
    <section
      className={styles.sectionWrapper}
    >
      <Divider/>
      {children}
    </section>
  );
}