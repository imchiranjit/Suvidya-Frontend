import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";
import Register from "../Components/Register/Register";

function SignUp() {
  return (
    <div>
      <NavBar isLogo={true} />

      <Register />

      <Footer />
    </div>
  );
}

export default SignUp;
