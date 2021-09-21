import { Header } from './components/Header/Header'
import "./app.scss"
import { Navigation } from './components/Nav/Navigation';
function App() {
  return (
      <div className='view'>
      <Header />
      <Navigation />
      {/* <News></News> */}
      </div>
  );
}

export default App;
