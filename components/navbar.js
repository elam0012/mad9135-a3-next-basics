import Link from "next/link";

function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/team">Team</Link>
    </nav>
  );
}

export default Navbar;