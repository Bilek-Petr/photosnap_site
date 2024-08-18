import BannerText from "./BannerText";
import BannerImage from "./BannerImage";

export default function Banner({ data, index }) {
  //so the 2nd banner is styled differently than the others
  const isFirstBanner = index === 0;
  //every second is row-reverse
  const isOdd = index % 2 === 0;

  return (
    <div
      className={`${isOdd ? "md:flex-row-reverse" : "md:flex-row"} flex h-[41rem] h-full w-full flex-col-reverse`}
    >
      <BannerText bannerData={data} isFirstBanner={isFirstBanner} />
      <BannerImage bannerData={data} />
    </div>
  );
}
