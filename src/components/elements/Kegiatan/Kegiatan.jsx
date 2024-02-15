import Button from "../utils/Button";
import maskotSatu from "../../../../public/assets/img/hero/maskot-1.JPG";
import Image from "next/image";

const Kegiatan = () => {
  return (
    <section className="container mx-auto mb-24">
      <div className="grid mx-10 grid-cols-3 grid-flow-col gap-10">
        <div className="col-span-1 flex flex-col gap-7 justify-center">
          <h3 className="xl:font-black lg:font-bold xl:text-4xl lg:text-3xl text-primary">
            Kegiatan Apa yang Kita Lakukan?
          </h3>
          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur. Vitae amet hac sed risus. Mi
            tempus sapien sit maec Mi tempus sapien sitLorem ipsum dolor sit
            amet consectetur.
          </p>
          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur. Vitae amet hac sed risus. Mi
            tempus sapien sit maec Mi tempus sapien sitLorem ipsum dolor sit
            amet consectetur.
          </p>
          <Button text="Lihat Selengkapnya" link="/" />
        </div>
        <div className="col-span-2 flex flex-col items-end gap-5 ">
          <div className="flex gap-8">
            <div className="">
              <Image
                className="w-[16rem] h-[10rem] object-cover"
                src={maskotSatu}
                alt="maskot-satu"
                width={700}
                height={700}
              />
            </div>
            <div className="w-96 flex flex-col gap-3">
              <h3 className="font-bold text-xl">Berjualan</h3>
              <p className="text-base">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit
                Aliquid, et.
              </p>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="">
              <Image
                className="w-[16rem] h-[10rem] object-cover"
                src={maskotSatu}
                alt="maskot-satu"
                width={700}
                height={700}
              />
            </div>
            <div className="w-96 flex flex-col gap-3">
              <h3 className="font-bold text-xl">Berjualan</h3>
              <p className="text-base">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit
                Aliquid, et.
              </p>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="">
              <Image
                className="w-[16rem] h-[10rem] object-cover"
                src={maskotSatu}
                alt="maskot-satu"
                width={700}
                height={700}
              />
            </div>
            <div className="w-96 flex flex-col gap-3">
              <h3 className="font-bold text-xl">Berjualan</h3>
              <p className="text-base">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit
                Aliquid, et.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kegiatan;
