import Image from "next/image";
import maskotSatu from "../../../../public/assets/img/hero/maskot-1.JPG";

const Fasilitas = () => {
  return (
    <section className="container mx-auto mb-24">
      <div className="flex flex-col gap-10">
        <div className="">
          <Image
            className="w-full h-[25rem] object-cover"
            src={maskotSatu}
            alt="maskot"
            width={700}
            height={700}
          />
        </div>
        <div className="flex items-center gap-28 p-5">
          <h1 className="xl:font-extrabold lg:font-bold lg:text-3xl text-primary">
            Fasilitas
          </h1>
          <div className="">
            <h3 className="font-semibold text-2xl mb-2">Laboratorium</h3>
            <p className="text-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Excepturi doloribus odio nulla dicta. Corrupti, maxime?
            </p>
          </div>
          <div className="">
            <h3 className="font-semibold text-2xl mb-2">Laboratorium</h3>
            <p className="text-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Excepturi doloribus odio nulla dicta. Corrupti, maxime?
            </p>
          </div>
          <div className="">
            <h3 className="font-semibold text-2xl mb-2">Laboratorium</h3>
            <p className="text-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Excepturi doloribus odio nulla dicta. Corrupti, maxime?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fasilitas;
