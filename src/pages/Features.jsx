import Banner from "../components/banners/Banner";
import Feature from "../components/Feature";
import InvitePanel from "../components/InvitePanel";

export default function Features({ data }) {
  return (
    <>
      <section className="about-banners">
        <Banner data={data.header} type="feature" />
      </section>

      <section className="features">
        <div className="mx-auto grid w-10/12 max-w-screen-2xl gap-[4rem] py-[5.5rem] md:grid-cols-3 md:gap-6">
          {data.features.map((item, index) => (
            <Feature key={index} featureData={item} />
          ))}
        </div>
      </section>

      <section className="invite-banner">
        <InvitePanel data={data.invite} />
      </section>
    </>
  );
}
