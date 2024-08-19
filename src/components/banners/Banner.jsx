import BannerText from "./BannerText";
import BannerImage from "./BannerImage";

export default function Banner({ data, index, type }) {
  const isStory = type === "story";
  const isFeature = type === "feature";
  const isSecond = index % 2 !== 0;

  const bannerStyle = `flex w-full flex-col-reverse md:h-[40rem] lg:h-[40rem] ${
    isStory ? "md:flex-row" : isSecond ? "md:flex-row-reverse" : "md:flex-row"
  }`;

  return (
    <div className={bannerStyle}>
      <BannerText
        bannerData={data}
        isFirstBanner={index === 0}
        isStory={isStory}
        isFeature={isFeature}
      />
      <BannerImage bannerData={data} isStory={isStory} />
    </div>
  );
}
