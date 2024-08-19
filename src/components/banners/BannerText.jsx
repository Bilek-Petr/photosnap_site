import Button from "../Button";

export default function BannerText({ bannerData, isFirstBanner, isStory }) {
  const isDarkMode = isFirstBanner || isStory;

  const containerStyles = `flex items-center justify-center md:w-[38rem] lg:w-[45rem] lg:px-16 ${
    isDarkMode ? "bg-pureBlack text-pureWhite" : "bg-pureWhite text-pureBlack"
  } ${isStory && "md:bg-transparent relative z-10"}`;

  const descriptionStyles = `mb-6 text-base opacity-75 ${
    isDarkMode ? "text-lightGrey" : "text-pureBlack"
  }`;

  const buttonColor = isDarkMode ? "white" : "black";

  return (
    <div className={containerStyles}>
      <div className="px-7 py-[4.33rem] md:px-12 md:py-24">
        {isStory && (
          <p className="py-8 text-xs font-bold uppercase">
            {bannerData.story_title}
          </p>
        )}
        <h2 className="mb-6 text-3xl font-bold uppercase leading-[3rem] tracking-[0.2em] md:text-[2.5rem] md:leading-[3rem] md:tracking-[0.2em]">
          {bannerData.title}
        </h2>
        {isStory && (
          <div className="mb-6">
            <p className={`${descriptionStyles} inline`}>{bannerData.date}</p>
            <span className="text-pureWhite"> {bannerData.author}</span>
          </div>
        )}
        <p className={descriptionStyles}>{bannerData.description}</p>
        <Button variant="arrow" color={buttonColor}>
          {bannerData.cta}
        </Button>
      </div>
    </div>
  );
}
