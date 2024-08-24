import Button from "./Button";

export default function InvitePanel({ data }) {
  return (
    <div className="relative flex justify-center">
      <div className="before-gradient-height absolute left-0 top-0 h-full"></div>
      <div className="max-h-72 w-full">
        <picture>
          <source media="(max-width: 770px)" srcSet={data.images.mobile} />
          <source media="(max-width: 1024px)" srcSet={data.images.tablet} />
          <img
            className="h-full w-full object-cover"
            src={data.images.desktop}
            alt="aesthetic background image"
          />
        </picture>
      </div>

      <div className="absolute bottom-16 m-auto w-10/12 max-w-screen-2xl gap-28 text-4xl font-bold uppercase md:flex md:justify-between md:text-5xl">
        <h3 className="text-pureWhite">{data.beta_message}</h3>
        <Button variant="arrow" color="white" className="shrink-0" to="/invite">
          {data.cta}
        </Button>
      </div>
    </div>
  );
}
