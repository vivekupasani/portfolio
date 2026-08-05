import Image from "next/image";

export default function Hero() {
  return (
    /* .top-section: flex gap-8 items-start mb-5 | mobile: block */
    <div className="flex gap-8 items-start mb-5 max-[600px]:block">

      {/* .top-left: flex-1 flex flex-col justify-center */}
      <div className="flex-1 flex flex-col justify-center">

        <h1 className="text-[38px] font-bold mt-3.25 mb-5 text-black leading-none">
          i&apos;m vivek upasani
        </h1>

        {/* .intro */}
        <div>
          {/* mobile image: float right, shown only on ≤600px */}
          <Image
            src="/me.png"
            alt="Vivek Upasani"
            width={140}
            height={175}
            className="float-right mt-4 ml-4 mb-2 hidden max-[600px]:block aspect-4/5 object-cover w-35"
            priority
          />
          <p
            className="text-base mb-5 text-[#444] mt-4 leading-[1.7] "
            style={{ whiteSpace: "pre-line" }}
          >
            {`product focused engineer who ships fast`}
            <br className="hidden md:inline" />
            {` and focuses on user experience.\n\ni love building tech products.\n\nhere are a few things i've done:`}
          </p>
        </div>
      </div>

      {/* desktop image: shown only on >600px */}
      <Image
        src="/me.png"
        alt="Vivek Upasani"
        width={220}
        height={275}
        className="w-55 min-w-55 object-cover aspect-4/5 max-[600px]:hidden"
        priority
      />
    </div>
  );
}
