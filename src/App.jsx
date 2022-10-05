/* stylesheet */
import styles from "./styles";
/* components? */
import { Banner, Billing, Business, Button, CardDeal, Clients, CTA, Feedback, Footer, GetStarted, Navbar, Stats, Testimonials } from "./components";

const App = () => {
  return (
    /* navbar */
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      {/* banner */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Banner/>
        </div>
      </div>
      {/* main */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
