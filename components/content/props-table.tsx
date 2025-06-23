import React from "react";

type PropInfo = {
  prop: string;
  type: string;
  default: string;
  description: string;
};

type PropsTableProps = {
  propsData: PropInfo[];
};

const PropsTable = ({ propsData }: PropsTableProps) => {
  return (
    <div className="pb-8">
      <h2
        id="props"
        className="my-10 border-b border-neutral-300/50 pb-2 text-2xl font-semibold dark:border-neutral-800/60"
      >
        Props
      </h2>
      <div className="overflow-x-auto rounded-md border border-neutral-200 dark:border-neutral-900">
        <table className="min-w-full table-auto text-left text-sm">
          <thead className="text-primary/90">
            <tr>
              <th className="border-b border-neutral-200 px-4 py-2 dark:border-neutral-900">
                Prop
              </th>
              <th className="border-b border-neutral-200 px-4 py-2 dark:border-neutral-900">
                Type
              </th>
              <th className="border-b border-neutral-200 px-4 py-2 dark:border-neutral-900">
                Default
              </th>
              <th className="border-b border-neutral-200 px-4 py-2 dark:border-neutral-900">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="text-primary/70">
            {propsData.map((item) => (
              <tr
                key={item.prop}
                className="border-t border-neutral-200 dark:border-neutral-900"
              >
                <td className="px-4 py-2 font-mono text-[11px] sm:text-[13px]">
                  {item.prop}
                </td>
                <td className="px-4 py-2 font-mono text-[11px] sm:text-[13px]">
                  {item.type}
                </td>
                <td className="px-4 py-2 text-[11px] sm:text-[13px]">
                  {item.default}
                </td>
                <td className="px-4 py-2 text-[10px] sm:text-[13px]">
                  {item.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PropsTable;
