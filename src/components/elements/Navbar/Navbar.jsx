import Image from "next/image";
import logoPemasaran from "../../../../public/assets/img/logoPemasaran.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="container mx-auto">
      <div className="flex justify-between p-5 items-center">
        <div className="logo">
          <Image width={150} height={150} src={logoPemasaran} alt="logo" />
        </div>
        <div className="list">
          <ul className="flex justify-center gap-7 text-sm">
            <li>
              <Link href={"#"}>Beranda</Link>
            </li>
            <li>
              <Link href={"#"}>Tentang kami</Link>
            </li>
            <li>
              <Link href={"#"}>Kegiatan</Link>
            </li>
            <li>
              <Link href={"#"}>Fasilitas</Link>
            </li>
            <li>
              <Link href={"#"}>Testimoni</Link>
            </li>
            <li>
              <Link href={"#"}>Kontak</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
