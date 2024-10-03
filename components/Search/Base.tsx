'use client'
import { useSearchParams } from "next/navigation";
import SearchResultTItle from "./SearchResultTItle";




export default function Base() {
    const searchParams = useSearchParams()
    const search = searchParams.get('search')

  return (
    <div>
        <SearchResultTItle productName={search}/>
    </div>
  )
}
