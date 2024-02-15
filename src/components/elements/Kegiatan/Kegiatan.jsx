import Button from "../utils/Button";
import maskotSatu from "../../../../public/assets/img/hero/maskot-1.JPG";
import Image from "next/image";

const Kegiatan = () => {
  return (
    <section id="kegiatan" className="md:container md:mx-auto px-6 pt-24">
      <div className="lg:grid flex flex-col lg:grid-cols-3 grid-flow-col gap-10">
        <div className="col-span-1 flex flex-col gap-7 justify-center">
          <h3 className="xl:font-black lg:font-bold xl:text-4xl lg:text-3xl text-2xl font-bold text-primary">
            Kegiatan Apa yang Kita Lakukan?
          </h3>
          <p className="md:text-base text-sm">
            Lorem ipsum dolor sit amet consectetur. Vitae amet hac sed risus. Mi
            tempus sapien sit maec Mi tempus sapien sitLorem ipsum dolor sit
            amet consectetur.
          </p>
          <p className="md:text-base text-sm">
            Lorem ipsum dolor sit amet consectetur. Vitae amet hac sed risus. Mi
            tempus sapien sit maec Mi tempus sapien sitLorem ipsum dolor sit
            amet consectetur.
          </p>
          <div className="md:block hidden">
            <Button text="Lihat Selengkapnya" link="/" />
          </div>
        </div>
        <div className="col-span-2 flex flex-col items-end gap-5 ">
          <div className="flex md:gap-8 gap-3">
            <div className="">
              <Image
                className="md:w-[16rem] md:h-[10rem] w-56 h-36 object-cover"
                src={maskotSatu}
                alt="maskot-satu"
                width={700}
                height={700}
              />
            </div>
            <div className="md:w-96 flex flex-col gap-3">
              <h3 className="font-bold text-xl">Berjualan</h3>
              <p className="md:text-base text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit
                Aliquid, et.
              </p>
            </div>
          </div>
          <div className="flex md:gap-8 gap-3">
            <div className="">
              <Image
                className="md:w-[16rem] md:h-[10rem] w-56 h-36 object-cover"
                src={maskotSatu}
                alt="maskot-satu"
                width={700}
                height={700}
              />
            </div>
            <div className="md:w-96 flex flex-col gap-3">
              <h3 className="font-bold text-xl">Berjualan</h3>
              <p className="md:text-base text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit
                Aliquid, et.
              </p>
            </div>
          </div>
          <div className="flex md:gap-8 gap-3">
            <div className="">
              <Image
                className="md:w-[16rem] md:h-[10rem] w-56 h-36 object-cover"
                src={maskotSatu}
                alt="maskot-satu"
                width={700}
                height={700}
              />
            </div>
            <div className="md:w-96 flex flex-col gap-3">
              <h3 className="font-bold text-xl">Berjualan</h3>
              <p className="md:text-base text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit
                Aliquid, et.
              </p>
            </div>
          </div>
        </div>
        <div className="md:hidden block">
          <Button text="Lihat Selengkapnya" link="/" />
        </div>
      </div>
    </section>
  );
};

export default Kegiatan;
