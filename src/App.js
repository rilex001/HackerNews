import "./app.scss"
import { News } from "./components/Content/News";
import { NavBar } from "./components/Header/NavBar";
import { SocialMedia } from "./components/Header/SocialMedia";
import { Title } from "./components/Header/Title";
function App() {
  return (
      <div className='view'>
      <SocialMedia />
      <Title />
      <NavBar />
      <News />
      {/* <News></News> */}
      </div>
  );
}

export default App;
