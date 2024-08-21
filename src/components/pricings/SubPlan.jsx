// import Button from "../Button";

// export default function SubPlan({ subData }) {
//   const isPro = subData.plan === "Pro";
//   const textColor = isPro ? "text-pureWhite" : "text-pureBlack";

//   return (
//     <div
//       className={`m-auto w-10/12 p-10 ${isPro ? "bg-pureBlack lg:py-14" : "bg-pricePanelLight"}`}
//     >
//       <div className="text-center sm:grid sm:grid-cols-[2fr_1fr_1fr] sm:grid-rows-[min-content_1fr_1fr] lg:flex lg:flex-col">
//         <div
//           className={`mb-12 sm:mb-0 sm:text-left lg:mb-12 lg:text-center ${textColor}`}
//         >
//           <h4 className="mb-6 text-2xl font-bold">{subData.plan}</h4>
//           <p className="text-[0.9rem] opacity-55">{subData.description}</p>
//         </div>
//         <div
//           className={`mb-12 sm:col-start-3 sm:text-right lg:text-center ${textColor}`}
//         >
//           <p className="text-4xl font-bold tracking-[0.35rem]">
//             {subData.monthly_price}
//           </p>
//           <p className="text-s">per month</p>
//         </div>
//         <Button
//           variant="rectangle"
//           className={`text-xs sm:row-start-3 ${isPro && "bg-pureWhite !text-black"}`}
//         >
//           {subData.cta}
//         </Button>
//       </div>
//     </div>
//   );
// }

import Button from "../Button";

export default function SubPlans({ subData, isToggled }) {
  const isPro = subData.plan === "Pro";
  const textColor = isPro ? "text-pureWhite" : "text-pureBlack";
  const price = isToggled ? subData.yearly_price : subData.monthly_price;

  return (
    <div
      className={`m-auto w-10/12 p-10 ${isPro ? "bg-pureBlack lg:py-14" : "bg-pricePanelLight"}`}
    >
      <div className="text-center sm:grid sm:grid-cols-[15rem_1fr_min-content] sm:grid-rows-[min-content_1fr_1fr] lg:flex lg:flex-col">
        <div
          className={`mb-12 sm:mb-0 sm:text-left lg:mb-12 lg:text-center ${textColor}`}
        >
          <h4 className="mb-6 text-2xl font-bold">{subData.plan}</h4>
          <p className="text-[0.9rem] opacity-55">{subData.description}</p>
        </div>
        <div
          className={`mb-12 sm:col-start-3 sm:text-right lg:text-center ${textColor}`}
        >
          <p className="text-4xl font-bold tracking-[0.35rem]">{price}</p>
          <p className="text-s md:pr-2 lg:pr-0">
            per {isToggled ? "year" : "month"}
          </p>
        </div>
        <Button
          variant="rectangle"
          className={`text-xs sm:row-start-3 ${isPro && "bg-pureWhite !text-black"}`}
        >
          {subData.cta}
        </Button>
      </div>
    </div>
  );
}
