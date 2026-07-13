import Image from "next/image";
import logo from "@/images/primary logo.png";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export default function BrandLogo({ className = "h-12 w-12", priority = false }: BrandLogoProps) {
  return (
    <Image
      src={logo}
      alt="JAVIN Hotels Limited"
      className={`${className} object-contain`}
      priority={priority}
    />
  );
}
