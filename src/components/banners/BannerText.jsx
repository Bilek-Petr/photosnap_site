import Button from "../Button";

export default function BannerText({ bannerData, isFirstBanner }) {
  const containerStyles = `flex items-center justify-center md:w-[38rem] lg:w-[45rem] lg:px-16 ${
    isFirstBanner
      ? "bg-pureBlack text-pureWhite"
      : "bg-pureWhite text-pureBlack"
  }`;

  const descriptionStyles = `mb-6 text-base opacity-75 ${
    isFirstBanner ? "text-lightGrey" : "text-pureBlack"
  }`;

  const buttonColor = isFirstBanner ? "white" : "black";

  return (
    <div className={containerStyles}>
      <div className="px-7 py-[4.33rem] md:px-12 md:py-24">
        <h2 className="mb-6 text-3xl font-bold uppercase leading-[3rem] tracking-[0.2em] md:text-[2.5rem] md:leading-[3rem] md:tracking-[0.2em]">
          {bannerData.title}
        </h2>
        <p className={descriptionStyles}>{bannerData.description}</p>
        <Button variant="arrow" color={buttonColor}>
          {bannerData.cta}
        </Button>
      </div>
    </div>
  );
}
