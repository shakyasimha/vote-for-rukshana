import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok, FaGlobe } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { font } from "@/lib/langFont";
import { type Language, languages } from "@/ui/languages";
import { notFound } from "next/navigation";

// Importing components
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import Footer from "@/components/Footer";
import MdxContent from "@/components/MdxContent";
import SocialLink from "@/components/SocialLink";
import ContactPerson from "@/components/ContactPerson";
interface PageProps {
  params: Promise<{ lang: string }>;
}

// Generate static pages for all enabled languages at build time
export async function generateStaticParams() {
  return languages.map((l) => ({ lang: l }));
}

export default async function Home({ params }: PageProps) {
  const { lang } = await params;

  // Validate that the URL lang is in our allowed list
  if (!languages.includes(lang as Language)) {
    notFound();
  }

  const currentLang = lang as Language;

  // Fallback logic: If it's a language that isn't fully supported yet, use 'ne' for UI labels
  const activeLangUI = (currentLang === "en" || currentLang === "nb") ? currentLang : "ne";

  // Logic to determine if we show the extra campaign sections
  const showFullContent = ['en', 'ne', 'nb'].includes(currentLang);

  return (
    <div className="flex flex-col min-h-screen bg-[#f7f7f7]">
      <Navbar />

      {/* Home / Profile section */}
      <div id="home">
        <Profile lang={currentLang} />
      </div>

      {/* Introduction */}
      <section id="introduction" className="max-w-4xl mx-auto w-full px-4 py-12">
        <MdxContent lang={currentLang} />
      </section>

      <hr className="mx-auto w-1/2 border-t border-gray-300" />

      {/* Manifesto */}
      {showFullContent && (
        <>
            <section id="manifesto" className="w-full bg-[#292f8c] text-[#f5f5fc] py-12">
                <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
                <h2 className={`${font[activeLangUI].headerFont} ${activeLangUI === "nb" ? "" : "font-bold"} mb-4 md:mb-0 text-4xl text-center md:text-left`}>
                    {activeLangUI === "en"
                    ? "Click here to read manifesto"
                    : activeLangUI === "nb"
                    ? "𑐖𑐶𑐐𑐹 𑐧𑐔𑑄𑐥𑑁 𑐣𑐾𑐥𑐵𑐮𑐨𑐵𑐳𑐵𑑄 𑐧𑑂𑐰𑐣𑐾𑐟 𑐠𑐣 𑐟𑐶𑐫𑐵𑐡𑐶𑐳𑑃 𑑋"
                    : "प्रतिबद्धता पत्र पढ्न क्लिक गर्नुहोस्"}
                </h2>

                <Link
                    href="/manifesto-np.pdf"
                    target="_blank"
                    className={`${font[activeLangUI].bodyFont} bg-[#ac221f] text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-lg md:text-xl text-center`}
                >
                    {activeLangUI === "en" ? "Read ->" : activeLangUI === "nb" ? "𑐧𑑂𑐰𑐣𑐵𑐡𑐶𑐳𑑃 ->" : "पढ्नुहोस् ->"}
                </Link>
                </div>
            </section>

            {/* Pamphlet Section */}
            <section id="pamphlet" className="w-full bg-[#f5f5fc] mx-auto px-4 py-12">
                <h2 className={`${font[activeLangUI].headerFont} ${activeLangUI === "nb" ? "" : "font-bold"} mb-8 text-4xl text-center text-[#ac221f]`}>
                {activeLangUI === "en" ? "Pamphlet" : "प्रचारपत्र"}
                </h2>
            </section>

            {/* Social Links */}
            <section id="links" className="w-full bg-[#292f8c] py-16">
                <h2 className={`${font[activeLangUI].headerFont} ${activeLangUI === "nb" ? "" : "font-bold"} mb-16 text-4xl text-center text-white`}>
                {activeLangUI === "en"
                    ? "Connect With Me On Social Media"
                    : activeLangUI === "nb"
                    ? "𑐖𑐶 𑐣𑐵𑐥𑑄 𑐳𑐵𑐩𑐵𑐖𑐶𑐎 𑐳𑑄𑐖𑐵𑐮𑐫𑑂 𑐳𑑂𑐰𑐵𑐣𑐵𑐡𑐶𑐳𑑃"
                    : "मेरो सामाजिक सञ्जालका खाताहरूसँग जोडिनुहोस्"}
                </h2>

                <div className={`${font[activeLangUI].headerFont} grid grid-cols-1 sm:grid-cols-2 max-w-xl mx-auto gap-x-12 gap-y-8 mb-8`}>
                <SocialLink href="https://www.facebook.com/rukshanainpolitics" icon={<FaFacebookF size={40} color="#1877F2" />} label={activeLangUI === "en" ? "Facebook" : activeLangUI === "nb" ? "𑐦𑐾𑐳𑐧𑐸𑐎" : "फेसबुक"} />
                <SocialLink href="https://www.instagram.com/rukshanainpolitics" icon={<FaInstagram size={40} color="#E4405F" />} label={activeLangUI === "en" ? "Instagram" : activeLangUI === "nb" ? "𑐂𑐣𑐳𑑂𑐟𑐵𑐐𑑂𑐬𑐵𑐩" : "ईन्स्टाग्राम"} />
                <SocialLink href="https://x.com/RukshanaNPolicy" icon={<FaXTwitter size={40} color="#000000" />} label={activeLangUI === "en" ? "X" : activeLangUI === "nb" ? "𑐊𑐎𑑂𑐳" : "एक्स्"} />
                <SocialLink href="https://www.tiktok.com/@rukshanainpolitics" icon={<FaTiktok size={40} color="#000" />} label={activeLangUI === "en" ? "TikTok" : activeLangUI === "nb" ? "𑐟𑐶𑐎𑐟𑐎" : "टिकटक"} />
                <div className="sm:col-span-2 flex justify-center">
                    <SocialLink href="https://rukshanakapali.com.np/" icon={<FaGlobe size={40} color="#f5f5fc" />} label={activeLangUI === "en" ? "Personal Website" : activeLangUI === "nb" ? "𑐠𑑅𑐐𑐸 𑐰𑐾𑐧𑐳𑐵𑐃𑐚" : "व्यक्तिगत वेबसाइट"} />
                </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="w-full bg-[#f5f5fc] mx-auto px-4 py-12">
                <h2 className={`${font[activeLangUI].headerFont} ${activeLangUI === "nb" ? "" : "font-bold"} mb-8 text-4xl text-center text-[#ac221f]`}>
                    {activeLangUI === "en" ? "Contact" : activeLangUI === "nb" ? "स्वापू" : "सम्पर्क"}
                </h2>
                <div className={`${font[activeLangUI].bodyFont} flex flex-col md:flex-row items-center justify-center md:gap-16 text-center text-black`}>
                <ContactPerson name={activeLangUI === "en" ? "Siddhartha Ratna Guvaju" : activeLangUI === "nb" ? "𑐳𑐶𑐡𑑂𑐢𑐵𑐬𑑂𑐠 𑐬𑐟𑑂𑐣 𑐐𑐸𑐨𑐵𑐖𑐸" : "सिद्धार्थ रत्न गुभाजु"} title={activeLangUI === "en" ? "Secretary" : activeLangUI === "nb" ? "𑐳𑐔𑐶𑐰" : "सचिव"} email="rukshanasecretariat1@gmail.com" activeLang={activeLangUI} />
                <div className="hidden md:block w-0.5 h-20 bg-[#ac221f] mx-4"></div>
                <ContactPerson name={activeLangUI === "en" ? "Pratik Thapa" : activeLangUI === "nb" ? "𑐥𑑂𑐬𑐟𑐶𑐎 𑐠𑐵𑐥𑐵" : "प्रतिक थापा"} title={activeLangUI === "en" ? "Secretary" : activeLangUI === "nb" ? "𑐳𑐔𑐶𑐰" : "सचिव"} email="rukshanasecretariat2@gmail.com" activeLang={activeLangUI} />
                </div>
            </section>
        </>
      )}

      <div className="mt-auto">
        <Footer lang={currentLang} />
      </div>
    </div>
  );
}

// Helper Components for cleaner code
// function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
//   return (
//     <Link href={href} target="_blank" className="flex flex-col items-center gap-3 text-white hover:scale-105 transition-transform duration-300 text-xl">
//       {icon}
//       {label}
//     </Link>
//   );
// }

// function ContactPerson({ name, title, email, activeLang }: any) {
//   return (
//     <div className="flex-1 text-center flex flex-col justify-start mt-10 md:mt-0">
//       <p className={`${activeLang === "nb" ? "font-bold" : "font-semibold"} mb-1 text-xl text-[#ac221f]`}>{name}</p>
//       <p className="mb-2">{title}</p>
//       <Link href={`mailto:${email}`} className="hover:opacity-60 transition duration-300">{email}</Link>
//     </div>
//   );
// }