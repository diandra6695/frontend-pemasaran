import Image from "next/image";
import logoPemasaran from "../../../../public/assets/img/logoPemasaran.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full px-20 fixed z-10 top-0 bg-white">
      <div className="flex justify-between p-5 items-center">
        <div className="logo">
          <Image width={150} height={150} src={logoPemasaran} alt="logo" />
        </div>
        <div className="list">
          <ul className="flex justify-center gap-7 text-sm">
            <li>
              <Link href={""}>Beranda</Link>
            </li>
            <li>
              <Link href={"#about"}>Tentang kami</Link>
            </li>
            <li>
              <Link href={"#kegiatan"}>Kegiatan</Link>
            </li>
            <li>
              <Link href={"#fasilitas"}>Fasilitas</Link>
            </li>
            <li>
              <Link href={"#kelas"}>Kelas</Link>
            </li>
            <li>
              <Link href={"#testimoni"}>Testimoni</Link>
            </li>
            <li>
              <Link href={"#kontak"}>Kontak</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
