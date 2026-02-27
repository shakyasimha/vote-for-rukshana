import Link from "next/link";

export default function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link href={href} target="_blank" className="flex flex-col items-center gap-3 text-white hover:scale-105 transition-transform duration-300 text-xl">
      {icon}
      {label}
    </Link>
  );
}