import { About } from "./About/About";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <About />
      <Footer />
    </div>
  );
};

export default MainLayout;
