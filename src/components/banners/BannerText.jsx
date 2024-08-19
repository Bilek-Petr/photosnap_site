export default function BannerText({ bannerData, isFirstBanner }) {
  // console.log("BannerText data:", bannerData);
  return (
    <div
      className={`flex items-center justify-center md:w-[38rem] lg:w-[45rem] lg:px-16 ${!isFirstBanner ? "bg-pureWhite text-pureBlack" : "bg-pureBlack text-pureWhite"}`}
    >
      <div className="px-7 py-[4.33rem] md:px-12 md:py-24">
        <h2 className="mb-6 text-3xl font-bold uppercase leading-[3rem] tracking-[0.2em] md:text-[2.5rem] md:leading-[3rem] md:tracking-[0.2em]">
          {bannerData.title}
        </h2>
        <p
          className={`mb-6 text-base opacity-75 ${!isFirstBanner ? "text-pureBlack" : "text-lightGrey"}`}
        >
          {bannerData.description}
        </p>
        <a href="#">{bannerData.cta}</a>
      </div>
    </div>
  );
}
