import Button from "../Button";

export default function Card({ cardData }) {
  const onHover =
    "hover:-translate-y-4 transition-transform duration-300 focus:-translate-y-4";

  return (
    <div
      className={`relative max-h-[31.5rem] min-h-[20rem] cursor-pointer md:min-h-[25rem] lg:min-h-[30rem] ${onHover}`}
    >
      <div className="absolute inset-0 bg-overlay-gradient"></div>
      <div className="before-gradient-width absolute bottom-0 right-0 w-full"></div>
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

      <div className="absolute bottom-0 z-10 m-auto w-full p-10 text-pureWhite">
        <h3 className="whitespace-nowrap py-1 text-xl font-bold">
          {cardData.title}
        </h3>
        <p className="text-sm">{cardData.author}</p>
        <hr className="my-4 border-t-[1.4px] opacity-20" />

        <Button variant="arrow" color="white">
          {cardData.cta}
        </Button>
      </div>
    </div>
  );
}
