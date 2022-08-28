import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
export default function MainLayout(props) {
  return (
    <>
      <Navbar />
      <div className="bg-white dark:bg-gradient-to-r dark:from-darkFrom dark:bg-darkTo">
        {props.children}
      </div>
      <Footer />
    </>
  );
}
