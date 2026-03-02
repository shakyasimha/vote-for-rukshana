import Link from "next/link";

export default function ContactPerson({ name, title, email, activeLang }: any) {
  return (
    // Use text-[#ac221f] for red and text-white for white
    <div className="flex-1 text-center flex flex-col justify-start mt-10 md:mt-0">
      <p className={`${activeLang === "nb" ? "font-bold" : "font-semibold"} text-[#f5f5fc] mb-1 text-xl`}>{name}</p>
      <p className="mb-2">{title}</p>
      <Link href={`mailto:${email}`} className="hover:opacity-60 transition duration-300">{email}</Link>
    </div>
  );
} 