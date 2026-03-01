import { type Language, languages } from "@/ui/languages";
import { notFound } from "next/navigation";

// Importing components
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import Footer from "@/components/Footer";

// Link for vercel blob
const blobLink = "https://lkboz6oqmifnolbs.public.blob.vercel-storage.com/MVI_0518.MP4";


export default async function Home() {

  return (
    <div className="flex flex-col min-h-screen bg-[#f7f7f7]">
      <Navbar />

      {/* Home / Profile section */}
      <div id="home">
        <Profile lang="ne" />
      </div>

      {/* Video content for NSL */}
      <section id="introduction" className="max-w-4xl mx-auto w-full px-4 py-12">
        <video 
            controls 
            className="w-full rounded-lg shadow-md"
            preload="metadata"
        >
            <source src={blobLink} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
      </section>

      <div className="mt-auto">
        <Footer lang="ne" />
      </div>
    </div>
  );
}