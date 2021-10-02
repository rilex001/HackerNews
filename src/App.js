import "./app.scss"
import { Content } from "./components/Content/Content";
import { Courses } from "./components/Courses/Courses";
import { Footer } from "./components/Footer.jsx/Footer";
import { NavBar } from "./components/Header/NavBar";
import { SocialMedia } from "./components/Header/SocialMedia";
import { Title } from "./components/Header/Title";
import { SignUp } from "./components/SignUp/SignUp";
function App() {
  return (
      <div className='view'>
      <SocialMedia />
      <Title />
      <NavBar />
      <Content />
      <Courses />
      <SignUp />
      <Footer />
      </div>
  );
}

export default App;
