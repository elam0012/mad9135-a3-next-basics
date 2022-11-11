import Image from "next/image";

function Header() {
  return (
    <div className="logo">
      <Image
        src= "/images/logo.jpg"
        height={100}
        width={100}
        alt="Profile Pic"/>
    </div>
  );
}

export default Header;