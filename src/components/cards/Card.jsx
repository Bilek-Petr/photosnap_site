export default function Card({ cardData }) {
  return (
    <div className="card | relative max-h-[31.5rem] min-h-[20rem] md:min-h-[25rem] lg:min-h-[30rem]">
      <div className="bg-overlay-gradient absolute inset-0"></div>
      <div className="card__bg-img h-full">
        <picture>
          <source media="(max-width: 638px)" srcSet={cardData.images.mobile} />
          <img
            className="h-full w-full object-cover"
            src={cardData.images.desktop}
            alt={cardData.title || "Banner image"}
          />
        </picture>
      </div>

      <div className="card__text | absolute bottom-0 z-10 m-auto w-full p-10 text-pureWhite">
        <h3 className="whitespace-nowrap py-1 text-xl font-bold">
          {cardData.title}
        </h3>
        <p className="text-sm">{cardData.author}</p>
        <hr className="my-4 border-t-[1.4px] opacity-20" />
        <a href="">{cardData.cta}</a>
      </div>
    </div>
  );
}
