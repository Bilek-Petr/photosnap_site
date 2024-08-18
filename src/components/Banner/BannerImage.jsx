export default function BannerImage({ bannerData }) {
  return (
    <div className="flex-shrink-[4] flex-grow-[3] basis-auto">
      <picture>
        <source media="(max-width: 720px)" srcSet={bannerData.images.mobile} />
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
