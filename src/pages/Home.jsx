import Banner from "../components/banners/Banner";
import Card from "../components/cards/Card";
import Feature from "../components/Feature";

export default function Home({ data }) {
  if (!data || data.length === 0) {
    return <div>No content available.</div>;
  }

  return (
    <>
      <section className="about-banners">
        {data.sections.map((item, index) => (
          <Banner key={index} data={item} index={index} type="home" />
        ))}
      </section>

      <section className="stories">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {data.stories.map((item, index) => (
            <Card key={index} cardData={item} />
          ))}
        </div>
      </section>

      <section className="features">
        <div className="relative w-full bg-pureWhite">
          <div className="mx-auto grid w-10/12 max-w-screen-2xl gap-[4rem] py-[5.5rem] md:grid-cols-3 md:gap-6">
            {data.features.map((item, index) => (
              <Feature key={index} featureData={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
