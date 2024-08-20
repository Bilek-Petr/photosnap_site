import { useState } from "react";
import SubscribToggle from "./pricings/SubscribToggle";
import SubPlan from "./pricings/SubPlan";

export default function PricePlan({ data }) {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <>
      <SubscribToggle isToggled={isToggled} onToggle={setIsToggled} />

      <div className="m-auto flex w-11/12 max-w-screen-2xl flex-col gap-8 py-28 lg:w-10/12 lg:flex-row lg:justify-center">
        {data.sub_plans.map((item, index) => (
          <SubPlan key={index} subData={item} isToggled={isToggled} />
        ))}
      </div>
    </>
  );
}
