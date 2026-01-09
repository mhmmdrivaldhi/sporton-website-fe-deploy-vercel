import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-dark-alternate text-white px-4 md:px-16">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-center md:items-start pt-7 md:pt-8 pb-12 md:pb-24 gap-10">
        <div className="max-w-md text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <Image
              src="/images/logo-footer.svg"
              alt="Logo Footer"
              width={187}
              height={44}
            />
          </div>
          <p className="mt-6">
            Engineered for endurance and designed for speeed. Experience gear
            that moves as fast as you do.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-12 text-center md:text-left">
          <div className="flex flex-col gap-5 items-center md:items-start">
            <Link href="#">Home</Link>
            <Link href="#">Categories</Link>
            <Link href="#">Products</Link>
            <Link href="#">About</Link>
          </div>
          <div className="flex flex-col gap-5 items-center md:items-start">
            <Link href="#">Instagram</Link>
            <Link href="#">Facebook</Link>
            <Link href="#">Tiktok</Link>
            <Link href="#">Youtube</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="container mx-auto py-6 flex flex-col md:flex-row items-center md:justify-between gap-4 text-center">
          <div>
            SportsOn © 2025 All Rights Reserved.
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;