export default function BannerImage({ bannerData, isStory }) {
  const imageStyles = ` flex-shrink-[4] flex-grow-[3] basis-auto ${isStory && "md:w-full md:absolute md:h-[40rem]"}`;

  return (
    <div className={imageStyles}>
      <picture>
        <source media="(max-width: 770px)" srcSet={bannerData.images.mobile} />
        <source media="(max-width: 1024px)" srcSet={bannerData.images.tablet} />
        <img
          className="h-full w-full object-cover"
          src={bannerData.images.desktop}
          alt={bannerData.title || "Banner image"}
        />
      </picture>
    </div>
  );
}
