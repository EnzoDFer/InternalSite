import { Avatar, Text } from "@chakra-ui/react";
import { Section } from "./Section";
import styles from "./UserBanner.module.css";

export const UserBanner = () => {
  return (
    <Section
      className={styles.userBanner}
    >
      <Avatar
        name={'Fake Namerson'}
        size={'xl'}
      />
      <Text>{'Fake Namerson'}</Text>
      <Text>{'@FNamerson'}</Text>
    </Section>
  );
}