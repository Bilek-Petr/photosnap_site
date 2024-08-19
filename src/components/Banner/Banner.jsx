import BannerText from "./BannerText";
import BannerImage from "./BannerImage";

export default function Banner({ data, index }) {
  //so the 2nd banner is styled differently than the others
  const isFirstBanner = index === 0;
  const isSecond = index % 2 !== 0;

  return (
    <div
      className={`flex h-full w-full flex-col-reverse md:flex-row ${isSecond && "md:flex-row-reverse"}`}
    >
      <BannerText bannerData={data} isFirstBanner={isFirstBanner} />
      <BannerImage bannerData={data} />
    </div>
  );
}
