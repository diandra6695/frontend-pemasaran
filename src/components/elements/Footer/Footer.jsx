import Image from "next/image";
import logoPemasaranWhite from "../../../../public/assets/img/logoPemasaranWhite.svg";
import Link from "next/link";
import {
  GlobeSimple,
  InstagramLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";

const Footer = () => {
  //mendapatkan tahun saat ini
  const year = new Date().getFullYear();
  return (
    <footer className="">
      <div className="bg-primary text-white w-full container py-10 px-20">
        <div className="flex gap-5">
          <div className=" flex flex-col gap-3 w-1/3">
            <Image
              width={250}
              height={250}
              src={logoPemasaranWhite}
              alt="logo"
            />
            <p className="text-xs">
              &copy;{year} PEMASARAN SMK NEGERI 1 BANGSRI | All Rights Reserved
            </p>
            <span className=" flex gap-2 items-center">
              <Link href={"https://smkn1bangsri.sch.id"}>
                <GlobeSimple size={30} weight="fill" />
              </Link>
              <Link href={"https://www.youtube.com/@SMKN1BANGSRI"}>
                <YoutubeLogo size={30} weight="fill" />
              </Link>
              <Link href={"https://www.instagram.com/smkn1bangsri.official"}>
                <InstagramLogo size={30} weight="fill" />
              </Link>
            </span>
          </div>
          <div className=" w-1/3">
            <h3 className="text-xl font-bold">Menu Utama</h3>
            <div className="flex gap-32 mt-2">
              <ul className="text-sm flex flex-col gap-1">
                <li>
                  <Link href="">Beranda</Link>
                </li>
                <li>
                  <Link href="">Tentang Kami</Link>
                </li>
                <li>
                  <Link href="">Kegiatan</Link>
                </li>
                <li>
                  <Link href="">Fasilitas</Link>
                </li>
              </ul>
              <ul className="text-sm flex flex-col gap-1">
                <li>
                  <Link href="">Guru</Link>
                </li>
                <li>
                  <Link href="">Kelas</Link>
                </li>
                <li>
                  <Link href="">Testimoni</Link>
                </li>
                <li>
                  <Link href="">Kontak</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className=" w-1/3">
            <h3 className="text-xl font-bold">Hubungi Kami</h3>
            <div className="flex flex-col gap-2">
              <div className="text-sm mt-2">
                <span className="font-bold">Alamat</span> : Jl. KH. Achmad
                Fauzan No. 17 Bangsri Jepara
              </div>
              <div className="text-sm">
                <span className="font-bold">Email</span> :
                smkn1bangsri@yahoo.co.id bdpsmkn1bangsri@yahoo.co.id
              </div>
              <div className="text-sm">
                <span className="font-bold">Phone</span> : kosong lapan berapa
                hayo
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
