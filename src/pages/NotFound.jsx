export default function NotFound() {
  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden text-center font-bold">
      <div className="absolute inset-0 z-0">
        <img
          src="svgs/bgNotFound.svg"
          alt="Background"
          className="opacity-83 h-full w-full object-cover"
        />
      </div>
      <div className="relative z-10">
        <p className="text-5xl">
          Sorry, the page you're looking for doesn't exist
        </p>
        <p className="s:text-[13rem] text-stroke overflow-hidden text-[8rem] text-transparent drop-shadow-2xl md:text-[20rem]">
          404
        </p>
      </div>
    </div>
  );
}
