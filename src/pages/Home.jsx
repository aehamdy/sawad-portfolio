import DesignThoughts from "../components/DesignThoughts";
import Experiences from "../components/Experiences";
import PremiumTools from "../components/PremiumTools";
import Projects from "../components/Projects";
import Summary from "../components/Summary";

function Home() {
  return (
    <>
      <Summary />
      <Projects />
      <Experiences />
      <PremiumTools />
      <DesignThoughts />
    </>
  );
}

export default Home;
