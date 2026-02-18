import Image from "next/image";
import Link from "next/link";
import {
  alegreyaSans,
  alegreyaSC,
  newaLipi,
  notoSerifDevanagari,
} from "@/ui/fonts";

interface HeaderProps {
  title: string;
}

export default function Page({ title }: HeaderProps) {
  return (
    <div className="flex flex-col">
      {/* Cover photo */}
      <div className="w-full h-64 relative">
        <Image
          src="/cover-image-1.jpg"
          alt="generic cover image"
          fill
          className="object-cover"
        />
      </div>

      {/* Profile picture, title, etc. */}
      <div className="flex flex-col md:flex-row items-center mt-[-4rem] px-4 w-full max-w-4xl mx-auto">
        {/* Profile picture */}
        <div className="relative flex-shrink-0 w-60 h-60 rounded-full overflow-hidden border-4 border-white mx-auto md:mx-0 z-10">
          <Image
            src="/rukshana-1-copy.jpg"
            alt="rukshana profile picture"
            fill
            className="object-cover"
          />
        </div>

        {/* Client name, client description and contact buttons */}
        <div className="flex flex-col items-center justify-between w-full mt-4 md:mt-16">
          {/* Title here */}
          <div className="text-center md:ml-4 md:mt-4">
            <h1 className={`${alegreyaSC.className} text-4xl font-bold`}>
              <strong>{title}</strong>
            </h1>
          </div>

          {/* Language links */}
          <div className="mt-8 text-center flex-row">
            <Link
              className={`${newaLipi.className} font-bold mx-4 text-[#A1C265] hover:opacity-70 hover:transition hover:duration-500`}
              href="/ne"
            >
              𑐖𑐶𑐐𑐹 𑐴𑑂𑐩𑐳𑐶𑐂𑐎𑐵
            </Link>
            <Link
              className={`${notoSerifDevanagari.className} font-bold mx-4 text-[#A1C265] hover:opacity-70 hover:transition hover:duration-500`}
              href="/np"
            >
              मेरो परिचय
            </Link>
            <Link
              className={`${alegreyaSans.className} font-bold mx-4 text-[#A1C265] hover:opacity-70 hover:transition hover:duration-500`}
              href="/en"
            >
              My Introduction
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
