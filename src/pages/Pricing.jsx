import Banner from "../components/banners/Banner";
import PricePlan from "../components/PricePlan";

export default function Pricing({ data }) {
  return (
    <>
      <section className="about-banners">
        <Banner data={data.header} type="feature" />
      </section>

      <section className="subscription-plans">
        <PricePlan data={data} />
      </section>
    </>
  );
}
