export default function PricingTable({ tableData }) {
  const { title, subtitle, plans, featuresAvailabity } = tableData;

  return (
    <div className="m-auto my-24 w-10/12 max-w-3xl text-left text-xs uppercase tracking-widest">
      <h2 className="hidden text-4xl font-bold uppercase tracking-widest md:flex md:justify-center">
        {title}
      </h2>
      <h3 className="border-b-[1px] border-pureBlack pb-6 font-bold md:hidden">
        {subtitle}
      </h3>
      <table className="w-full">
        <thead className="hidden md:table-header-group">
          <tr className="border-b-[1px] border-pureBlack">
            <th className="py-6">{subtitle}</th>
            {plans.map((plan, index) => (
              <th className="w-[20%] text-center" key={index}>
                {plan}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.keys(featuresAvailabity).map((feature, featureIndex) => (
            <tr
              key={featureIndex}
              className="grid grid-cols-3 border-b-[1px] border-lightGrey md:table-row"
            >
              <th className="col-span-3 py-3 md:table-cell md:w-auto md:py-6">
                {feature}
              </th>
              {featuresAvailabity[feature].map((available, planIndex) => (
                <td
                  key={planIndex}
                  className="text-left md:table-cell md:w-auto md:pr-0 md:text-center"
                >
                  <div className="mb-3 flex flex-col justify-between gap-2 md:block">
                    <span className="text-[0.625rem] text-gray-500 md:hidden">
                      {plans[planIndex]}
                    </span>
                    <span>
                      {available && (
                        <img
                          className="inline"
                          src="/images/pricing/desktop/check.svg"
                          alt="check"
                        />
                      )}
                    </span>
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
