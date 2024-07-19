import Navbar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import Lectures from "../Components/Lectures/Lectures";

function LecturesPage() {
  return (
    <>
      <Navbar isLogin={true} />

      <Lectures />
      <Footer />
    </>
  );
}
export default LecturesPage;
