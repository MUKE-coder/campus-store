import Link from "next/link";
import React from "react";
import { BiChevronRight } from "react-icons/bi";

export default function BreadCrumb({ data }) {
  return (
    <div className="flex items-center px-[1rem] text-[.8rem] gap-2 py-3 w-[full] text-[#0f172a] roboto font-[400]">
      <Link className="" href={data.base.path}>
        {data.base.title}
      </Link>
      <BiChevronRight size={18} />
      <h4 className="line-clamp-1">{data.currentSubCatName.title}</h4>
      <BiChevronRight size={18} />
      <h4 className="line-clamp-1">{data.currentTitle.title}</h4>
      <BiChevronRight size={18} />
      <h4 className="line-clamp-1 text-gray-600">
        {data.currentDescription.title}
      </h4>
    </div>
  );
}
