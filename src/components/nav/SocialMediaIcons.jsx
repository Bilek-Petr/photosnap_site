export default function SocialMediaIcons({ logos }) {
  return (
    <div className="m-auto flex w-full flex-row justify-center gap-3 py-10 md:row-start-3 md:justify-start md:py-0">
      {logos.map((logo, index) => (
        <img
          key={index}
          className="cursor-pointer brightness-0 contrast-100 invert filter transition-all duration-300 hover:filter-none"
          src={logo}
          alt={`Social media icon ${index + 1}`}
        />
      ))}
    </div>
  );
}
