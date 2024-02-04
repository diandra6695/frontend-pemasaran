import Image from "next/image";
import Link from "next/link";
import maskotSatu from "../../../../public/assets/img/hero/maskot-1.JPG";

const Hero = () => {
  return (
    <div className="min-h-screen">
      <div className="flex items-center">
        <div className="bg-primary md:w-7/12 h-screen text-white">
          <div className="md:p-16 lg:p-32 h-full flex flex-col gap-10 justify-center">
            <div className="border-l-2">
              <h3 className="text-3xl pl-2  font-bold ">Pemasaran</h3>
              <p className="pl-2">SMK Negeri 1 Bangsri</p>
            </div>
            <header>
              <h3 className="md:text-3xl lg:text-5xl font-light">
                Jurusan yang Mengenalkan Tentang Cara Berjualan
              </h3>
            </header>
            <div className="lg:text-xl">
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
        <div className="flex items-center">
          <div className="gambar -m-16">
            <Image
              className="h-[50rem] w-[28rem] object-cover"
              width={1000}
              height={1000}
              src={maskotSatu}
              alt="hero"
            />
          </div>
          <div className="gambar ">
            <Image
              className="h-[50rem] ml-28 w-[20rem] object-cover"
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