export default function Banner({ data }) {
  return (
    <section className="banners">
      <div className="flex h-[41rem] w-full flex-col md:flex-row">
        <div className="flex items-center justify-center bg-pureBlack text-pureWhite md:w-[38rem]">
          <div className="px-7 py-[4.33rem] md:px-12 md:py-24">
            <h2 className="mb-6 text-3xl font-bold uppercase leading-[3rem] tracking-[0.2em] md:text-[2.5rem] md:leading-[3rem] md:tracking-[0.2em]">
              Create and share your photo stories.
            </h2>
            <p className="mb-6 text-base text-lightGrey opacity-75">
              Photosnap is a platform for photographers and visual storytellers.
              We make it easy to share photos, tell stories and connect with
              others.
            </p>
            <a href="#">Get an invite</a>
          </div>
        </div>
        <div className="flex-shrink-[4] flex-grow-[3] basis-auto">
          <picture>
            <source
              media="(max-width: 720px)"
              srcSet="/images/home/mobile/create-and-share.jpg"
            />

            <img
              className="h-full w-full object-cover"
              src="/images/home/desktop/create-and-share.jpg"
              alt="Create and share"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
