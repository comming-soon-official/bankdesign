import React from "react";
import ScrollToTop from "react-scroll-to-top";
import styles from "./style";
import {
  Billing,
  Buisness,
  CardDeal,
  Client,
  CTA,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from "./components/";
const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <ScrollToTop smooth color="#0080bf" />
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary  ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary  ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Buisness />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Client />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
