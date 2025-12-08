import { type HtmlHTMLAttributes } from "react";
import merge from "@/lib/merge";

interface TableProps extends HtmlHTMLAttributes<HTMLTableElement> {
  className?: string;
  headers: TableHeader[];
  data: Record<string, any>[];
}

export interface TableHeader {
  label: string;
  key: string;
}

const Table = ({ className, headers, data }: TableProps) => {
  return (
    <table className={merge("w-full border border-separate border-gray-400 border-spacing-0 rounded-t-md", className)}>
      <thead className="bg-blue-100">
        <tr>
          {headers.map((header, i) => {
            return (
              <th key={i} className={merge("font-normal", i === 0 && "rounded-tl-md", i === headers.length - 1 && "rounded-tr-md")}>
                {header.label}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rIndex) => {
          return (
            <tr key={rIndex} className={merge("text-center font-extralight", rIndex % 2 == 1 && "bg-gray-100")}>
              {headers.map((header, cIndex) => {
                return (
                  <td key={cIndex} className="py-1">
                    {row[header.key]}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default Table;
