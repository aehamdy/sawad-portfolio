import SummaryIntro from "./SummaryComponents/SummaryIntro";
import SummaryAchievements from "./SummaryComponents/SummaryAchievements";
import SummaryBanners from "./SummaryComponents/SummaryBanners";

function Summary() {
  return (
    <section className="flex flex-col justify-start gap-[50px]">
      <SummaryIntro />

      <SummaryAchievements />

      <SummaryBanners />
    </section>
  );
}

export default Summary;
