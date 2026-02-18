"use client";

type Props = {
  ContentComponent: React.ComponentType;
  lang: "en" | "ne" | "new";
};

const MdxContent = ({ ContentComponent }: Props) => {
  return (
    <div className="w-full py-20 px-6 md:px-20 bg-[#f5f5f5] text-black">
      <div className="max-w-5xl mx-auto">
        {/* Just render the MDX component directly */}
        <ContentComponent />
      </div>
    </div>
  );
};

export default MdxContent;