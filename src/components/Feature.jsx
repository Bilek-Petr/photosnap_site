export default function Features({ featureData }) {
  return (
    <div className="feature | m-auto flex h-full flex-col items-center text-center">
      <div className="mb-8 flex h-28 items-center justify-center">
        <img src={featureData.image} alt={featureData.title} />
      </div>

      <div>
        <h4 className="pb-5 text-lg font-bold">{featureData.title}</h4>
        <p className="text-s text-modal">{featureData.description}</p>
      </div>
    </div>
  );
}
