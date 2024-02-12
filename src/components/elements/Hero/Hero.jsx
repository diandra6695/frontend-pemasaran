import Image from "next/image";
import Link from "next/link";
import maskotSatu from "../../../../public/assets/img/hero/maskot-1.JPG";

const Hero = () => {
  return (
    <div className="min-h-screen mt-12 mb-24">
      <div className="flex items-center">
        <div className="bg-primary w-7/12 h-full text-white">
          <div className="lg:p-24 xl:p-32 h-full flex flex-col gap-10 justify-center">
            <div className="border-l-2">
              <h3 className="text-3xl pl-2  font-bold ">Pemasaran</h3>
              <p className="pl-2">SMK Negeri 1 Bangsri</p>
            </div>
            <header>
              <h3 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Jurusan yang Mengenalkan Tentang Cara Berjualan
              </h3>
            </header>
            <div className="xl:text-xl lg:text-base">
              <p>
                Kami mengenalkan cara yang tepat dari berjualan seperti tata
                letak toko, harga yang direkomendasikan, ataupun perhitungan
                untng dan rugi
              </p>
            </div>
            <div className="button mt-5">
              <Link href="" className="border px-8 py-4 rounded-md">
                Selengkapnya
              </Link>
            </div>
          </div>
        </div>
        <div className="flex gap-20 items-center">
          <div className="gambar -m-16">
            <Image
              className="h-[40rem] w-[21rem] object-cover"
              width={1000}
              height={1000}
              src={maskotSatu}
              alt="hero"
            />
          </div>
          <div className="gambar ">
            <Image
              className="h-[40rem] w-[16rem] object-cover"
              width={1000}
              height={1000}
              src={maskotSatu}
              alt="hero"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
