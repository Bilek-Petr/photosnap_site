export default function BannerText({ bannerData }) {
  // console.log("BannerText data:", bannerData);
  return (
    <div className="flex items-center justify-center bg-pureBlack text-pureWhite md:w-[38rem]">
      <div className="px-7 py-[4.33rem] md:px-12 md:py-24">
        <h2 className="mb-6 text-3xl font-bold uppercase leading-[3rem] tracking-[0.2em] md:text-[2.5rem] md:leading-[3rem] md:tracking-[0.2em]">
          {bannerData.title}
        </h2>
        <p className="mb-6 text-base text-lightGrey opacity-75">
          {bannerData.description}
        </p>
        <a href="#">{bannerData.cta}</a>
      </div>
    </div>
  );
}
