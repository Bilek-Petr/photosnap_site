import BannerText from "./BannerText";
import BannerImage from "./BannerImage";

export default function Banner({ data }) {
  // console.log("Banner data", data);
  return (
    <div className="flex h-[41rem] w-full flex-col md:flex-row">
      <BannerText bannerData={data} />
      <BannerImage bannerData={data} />
    </div>
  );
}
