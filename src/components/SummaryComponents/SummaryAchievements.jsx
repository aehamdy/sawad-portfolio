import { achievements } from "../../data/summary";

function SummaryAchievements() {
  return (
    <ul className="part-2 flex flex-wrap justify-evenly lg:justify-start gap-5 lg:gap-10">
      {achievements.map((achievement) => (
        <li key={achievement.id} className="flex flex-col items-start gap-2">
          <p className="font-semibold lg:font-bold text-5xl lg:text-7xl text-heading-primary">
            +{achievement.number}
          </p>

          <div className="flex flex-col items-center lg:items-start text-content-primary uppercase">
            {achievement.labels.map((label, index) => (
              <p key={index}>{label}</p>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default SummaryAchievements;
