import Data from "@/components/data";
import Image from "next/image";

export default function Home() {
  return (
    <article>
      <header className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
          <div className="h-12 w-12 relative">
            <Image
              src="/database.svg"
              alt="Database icon"
              fill={true}
            />
          </div>
        </div>
        <div>
          <div className="text-xl font-medium text-black">Data API builder for Azure databases</div>
        </div>
      </header>
      <section>
        <Data />
      </section>
    </article>
  );
}
