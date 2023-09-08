import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <main className="">
      <div className="mt-[120px]">
        <h1 className="text-5xl font-bold text-center">
          World's most complete movie database
        </h1>
        <img
          src="/assets/undraw_awards_fieb.svg"
          alt=""
          className="w-96 m-auto md:w-full md:max-w-xl mb-6 pt-2"
        />
      </div>
      <SearchBar />
    </main>
  );
}
