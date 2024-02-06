import CardAbout from "../utils/CardAbout";
import maskotSatu from "../../../../public/assets/img/hero/maskot-1.JPG";
import Image from "next/image";
import Link from "next/link";
import Button from "../utils/Button";

const TenatangKami = () => {
  return (
    <div className="mb-24">
      <div className="container mx-auto">
        <div className="flex gap-10 justify-center items-center">
          <div className="xl:w-[24rem] lg:w-[20rem]">
            <div className="">
              <Image
                src={maskotSatu}
                className="xl:h-[35rem] xl:w-[25rem] lg:h-[25rem] object-cover"
                width={700}
                height={700}
                alt="maskot"
              />
            </div>
            <div className=" flex flex-col gap-4 p-8 bg-primary text-white text-xl">
              <h1 className="font-bold xl:text-2xl lg:text-xl">Siapa Kita?</h1>
              <h3 className="xl:text-base lg:text-sm">
                kita telah merupakan salah satu jurusan yang ada di SMK Negeri 1
                Bangsri yang mendalami bidang pemasaran
              </h3>
            </div>
          </div>
          <div className="xl:w-[24rem] lg:w-[20rem]">
            <div className=" flex flex-col gap-4 p-8 bg-primary text-white text-xl">
              <h1 className="font-bold xl:text-2xl lg:text-xl">
                Apa yang kita Pelajari?
              </h1>
              <h3 className="xl:text-base lg:text-sm">
                kita telah merupakan salah satu jurusan yang ada di SMK Negeri 1
                Bangsri yang mendalami bidang pemasaran
              </h3>
            </div>
            <div className="">
              <Image
                src={maskotSatu}
                className="xl:h-[35rem] xl:w-[25rem] lg:h-[25rem] object-cover"
                width={700}
                height={700}
                alt="maskot"
              />
            </div>
          </div>
          <div className="xl:w-[25rem] lg:w-[20rem] flex flex-col gap-10 p-2">
            <h3 className="xl:font-black lg:font-bold xl:text-4xl lg:text-3xl text-primary">
              Tentang Kami
            </h3>
            <p className="xl:text-xl lg:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              doloribus aut rem quidem nesciunt recusandae? Illo quod eum dolore
              officiis ipsa, minus, aperiam quaerat nostrum a ipsam officia
              fugiat hic nemo reiciendis aliquid amet architecto doloribus
              voluptate. Quia dolores omnis laudantium, necessitatibus sunt
              quod, ad nisi quas fugiat aperiam voluptas.
            </p>
            <Button text="Lihat Selengkapnya" link="/" />
          </div>
          <CardAbout />
        </div>
      </div>
    </div>
  );
};

export default TenatangKami;
