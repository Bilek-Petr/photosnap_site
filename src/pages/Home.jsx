import Banner from "../components/banners/Banner";
import Card from "../components/cards/Card";

export default function Home({ data }) {
  if (!data || data.length === 0) {
    return <div>No content available.</div>;
  }

  return (
    <>
      <section className="about-banners">
        {data.sections.map((section, index) => (
          <Banner key={index} data={section} index={index} />
        ))}
      </section>

      <section className="stories">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {data.stories.map((story, index) => (
            <Card key={index} cardData={story} />
          ))}
        </div>
      </section>
    </>
  );
}
