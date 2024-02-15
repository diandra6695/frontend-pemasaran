import CardAbout from "../utils/CardAbout";
import maskotSatu from "../../../../public/assets/img/hero/maskot-1.JPG";
import Image from "next/image";
import Link from "next/link";
import Button from "../utils/Button";

const TenatangKami = () => {
  return (
    <section id="about" className="pt-24">
      <div className="md:container md:mx-auto px-4">
        <div className="flex lg:flex-row flex-col gap-10 justify-center items-center">
          <div className="flex gap-2">
            <div className="xl:w-[24rem] lg:w-[20rem]">
              <div className="">
                <Image
                  src={maskotSatu}
                  className="xl:h-[35rem] xl:w-[25rem] lg:h-[25rem] h-60 object-cover"
                  width={700}
                  height={700}
                  alt="maskot"
                />
              </div>
              <div className=" flex flex-col gap-4 lg:p-6 p-5 bg-primary text-white text-xl">
                <h1 className="font-bold xl:text-2xl lg:text-xl text-lg">
                  Siapa Kita?
                </h1>
                <h3 className="xl:text-base lg:text-sm text-xs">
                  kita telah merupakan salah satu jurusan yang ada di SMK Negeri
                  1 Bangsri yang mendalami bidang pemasaran
                </h3>
              </div>
            </div>
            <div className="xl:w-[24rem] lg:w-[20rem]">
              <div className=" flex flex-col gap-4 p-6 bg-primary text-white text-xl">
                <h1 className="font-bold xl:text-2xl lg:text-xl text-lg">
                  Apa yang kita Pelajari?
                </h1>
                <h3 className="xl:text-base lg:text-sm text-xs">
                  kita telah merupakan salah satu jurusan yang ada di SMK Negeri
                  1 Bangsri yang mendalami bidang pemasaran
                </h3>
              </div>
              <div className="">
                <Image
                  src={maskotSatu}
                  className="xl:h-[35rem] xl:w-[25rem] lg:h-[25rem] h-60 object-cover"
                  width={700}
                  height={700}
                  alt="maskot"
                />
              </div>
            </div>
          </div>
          <div className="xl:w-[25rem] lg:w-[20rem] flex flex-col lg:gap-10 gap-5 p-2">
            <h3 className="xl:font-black lg:font-bold xl:text-4xl lg:text-3xl text-2xl font-bold text-primary">
              Tentang Kami
            </h3>
            <p className="xl:text-xl lg:text-base text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              doloribus aut rem quidem nesciunt recusandae? Illo quod eum dolore
              officiis ipsa, minus, aperiam quaerat nostrum a ipsam officia
              fugiat hic nemo reiciendis aliquid amet architecto doloribus
              voluptate. Quia dolores omnis laudantium, necessitatibus sunt
              quod, ad nisi quas fugiat aperiam voluptas.
            </p>
            <Button text="Lihat Selengkapnya" link="/" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TenatangKami;
