import { banners } from "../../data/summary";
import Icon from "../SharedComponents/Icon";
import { Link } from "react-router-dom";

function SummaryBanners() {
  return (
    <ul className="flex flex-col lg:flex-row gap-5">
      {banners.map((banner) => (
        <li
          key={banner.id}
          className={`pt-[35px] lg:pt-[40px] px-[20px] pb-[22px] text-2xl ${
            banner.id % 2 == 0
              ? "text-charcoal bg-accent-secondary"
              : "text-heading-primary bg-accent-primary"
          } rounded-regular`}
        >
          <div className="">
            <Icon name={banner.icon} size={38} />

            <div className="mt-4 lg:mt-8 font-medium text-xl md:text-inherit text-start uppercase">
              {banner.skills.map((skill, index) => (
                <span key={index} className="">
                  {skill + (index < banner.skills.length - 1 ? ", " : "")}
                </span>
              ))}
            </div>
          </div>

          <Link
            to="/"
            className={`flex w-fit lg:mt-8 p-1 ms-auto border rounded-md ${
              banner.id % 2 == 0
                ? "text-charcoal border-charcoal hover:text-accent-secondary hover:bg-charcoal"
                : "text-white border-white hover:text-accent-primary hover:bg-white"
            } duration-short`}
          >
            <Icon name="rightArrow" size="28" />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default SummaryBanners;
