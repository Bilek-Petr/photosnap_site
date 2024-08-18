import Banner from "../components/Banner/Banner";

export default function Home({ data }) {
  return (
    <>
      {data.sections.map((section, index) => (
        <Banner key={index} data={section} index={index} />
      ))}
    </>
  );
}
