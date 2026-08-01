import { Header } from "@/components/layout";
import { Hero } from "@/views/home";

export default function Home() {
  return (
    <div className="relative isolate flex flex-1 flex-col overflow-x-clip">
      <div
        aria-hidden="true"
        className="bg-light-grayish-blue rounded-bl-shape absolute top-0 right-0 -z-10 h-106.25 w-1/2 lg:h-106.75 lg:w-[48.96%]"
      />

      <Header />

      <main className="relative flex-1">
        <Hero />
      </main>
    </div>
  );
}
