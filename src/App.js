import "./App.css";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Join from "./Components/Join/Join";
import PricingPlan from "./Components/PricingPlan/PricingPlan";
import { Program } from "./Components/Program/Program";
import Reason from "./Components/Reason/Reason";
import Testemonial from "./Components/Testemonial/Testemonial";
function App() {
  return (
    <div className="App">
      <Hero />
      <Program />
      <Reason />
      <PricingPlan />
      <Testemonial />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
