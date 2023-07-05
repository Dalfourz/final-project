'use client'
import MovieCards from "@/components/MovieCards";
import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";
import SearchInput from "@/components/SearchInput";
import SearchResult from "@/components/SearchResult";



export default function Home() {
  return (
    <main className="">

      <img src="/assets/undraw_awards_fieb.svg" alt="" 
      className="m-auto w-full xl:max-w-2xl mb-6"/>
      {/* <SearchInput /> */}
      <SearchBar />
      {/* <SearchResult /> */}
    </main>
  )
}
