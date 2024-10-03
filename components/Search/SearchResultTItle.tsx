import { ProductNameProps } from "@/types/types";

export default function SearchResultTItle({ productName }: ProductNameProps) {
  const count = 0
  return (
    <div className="bg-[#f7f4ed] py-8 gap-5 flex flex-col justify-center items-center ">
      <p className="text-3xl font-bold">Results for "<span className="capitalize">{productName}</span>"</p>
      {count > 0 ?
        <p className="text-lg "><b>{count}</b> {count > 1 ? 'Products' : 'Product'} Found {count > 1 ?'😊' : '🤓'}</p>
        :
        <p className="text-lg ">No Product Found 😔</p>}
    </div>
  )
}
