import { ChakraProvider } from '@chakra-ui/react';
import { Header } from './Components/Header';
import { Section } from './Components/Section';
import { UserBanner } from './Components/UserBanner';
import styles from "./Global.module.css";   

function App() {
  return (
    <ChakraProvider>
      <div
        className={styles.page}
      >      
        <Header/>
        <UserBanner/>
        <Section>Section 2</Section>
      </div>
    </ChakraProvider>
  );
}

export default App;
