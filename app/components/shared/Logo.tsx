import Image from "next/image";
import Link from "next/link";

const Logo = ({ dark }: { dark?: boolean }) => {
  return (
    <Link href="/">
      <Image
        alt="logo"
        src={dark ? "/amazon-logo-1.png" : "/amazon-logo-2.webp"}
        width={100}
        height={30}
      />
    </Link>
  );
};

export default Logo;
