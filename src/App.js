import Home from "./Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Clubdescription from "./777club/Clubdescription";
import Sneakpeak from "./Sneakpeak/Sneakpeak";
import Roamap from "./Roadmap/Roamap";
import Team from "./Team/Team";
import FAQs from "./FAQs/FAQs";
import Footer from "./Footer/Footer";
function App() {
  return (
    <div className="App">
      <Home />
      <Clubdescription />
      <Sneakpeak />
      <Roamap />
      <Team />
      <FAQs />
      <Footer />
    </div>
  );
}

export default App;
