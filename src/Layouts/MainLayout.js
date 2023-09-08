import Footer from "../components/Other/Footer";
import Navbar from "../components/Other/Navbar";
export default function MainLayout(props) {
  return (
    <>
      <Navbar />
      <div className="bg-inherit">{props.children}</div>
      <Footer />
    </>
  );
}
