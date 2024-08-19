import Card from "../components/cards/Card";
import Banner from "../components/banners/Banner";

export default function Stories({ data }) {
  console.log(data);
  return (
    <>
      <section className="about-banners">
        <Banner data={data.header} type="story" />
      </section>

      <section className="stories">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {data.stories.map((item, index) => (
            <Card key={index} cardData={item} />
          ))}
        </div>
      </section>
    </>
  );
}
