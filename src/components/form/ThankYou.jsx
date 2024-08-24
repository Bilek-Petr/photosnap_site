export default function ThankYou() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center">
        <img
          src="svgs/icons8-checkmark-80.png"
          alt="checkmark"
          className="h-[100px] w-[100px]"
        />
        <p className="mt-4 text-[3rem] font-bold uppercase tracking-tight">
          Thank You!
        </p>
        <p className="mt-2 text-xl">The invitation was sent successfully</p>
      </div>
    </div>
  );
}
