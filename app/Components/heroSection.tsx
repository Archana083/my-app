import Image from "next/image";
import heroImg1 from "../../public/images/hero-img.webp";
export default function HeroSection() {
  return (
    <>
      <div className="pt-24 px-[7.5rem] flex flex-col items-center gap-8 self-stretch">
        <div className="flex justify-end flex-col items-center gap-12 self-stretch">
          <div className="flex flex-col items-center gap-6 self-stretch">
            <h2 className="text-[#fff] text-center font-mono text-[3.75rem] font-medium leading-[72px] tracking-[-0.075rem]">
              EV Charging Management System <br /> Smarter. Simpler.{" "}
              <span className="text-[#E87400]">Free</span>{" "}
            </h2>
            <h3 className="text-[#B0AEAE] text-center font-mono font-medium text-[1.5rem] leading-8">
              Bring your own OCPP chargers, or get ours—With our powerful <br />
              software, you’ll get paid instantly and it’s free to use.
            </h3>
          </div>
          <div className="flex items-start gap-5">
            <button className="flex py-[0.625rem] px-4 justify-center items-center gap-[0.375rem] rounded-full bg-[#FF8000]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10.8333 1.66663L3.41118 10.5732C3.12051 10.922 2.97517 11.0964 2.97295 11.2437C2.97102 11.3717 3.02808 11.4935 3.12768 11.574C3.24226 11.6666 3.46928 11.6666 3.92333 11.6666H9.99997L9.16663 18.3333L16.5888 9.42675C16.8794 9.07794 17.0248 8.90354 17.027 8.75624C17.0289 8.62819 16.9719 8.50637 16.8723 8.42588C16.7577 8.33329 16.5307 8.33329 16.0766 8.33329H9.99997L10.8333 1.66663Z"
                  stroke="#181D27"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="text-[#181D27] font-mono text-[1rem] font-medium leading-6 ">
                Become A Partner Now
              </span>
            </button>
            <button className="flex py-[0.625rem] px-4 justify-center items-center gap-[0.375rem] rounded-full bg-[#535862]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10.8333 1.66663L3.41118 10.5732C3.12051 10.922 2.97517 11.0964 2.97295 11.2437C2.97102 11.3717 3.02808 11.4935 3.12768 11.574C3.24226 11.6666 3.46928 11.6666 3.92333 11.6666H9.99997L9.16663 18.3333L16.5888 9.42675C16.8794 9.07794 17.0248 8.90354 17.027 8.75624C17.0289 8.62819 16.9719 8.50637 16.8723 8.42588C16.7577 8.33329 16.5307 8.33329 16.0766 8.33329H9.99997L10.8333 1.66663Z"
                  stroke="#fff"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="text-[#fff] font-mono text-[1rem] font-medium leading-6 ">
                Explore Platforms
              </span>
            </button>
          </div>
        </div>
        <Image src={heroImg1} alt="Hero Image" />
      </div>
    </>
  );
}
