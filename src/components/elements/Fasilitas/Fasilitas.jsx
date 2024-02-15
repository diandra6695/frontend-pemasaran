import Image from "next/image";
import maskotSatu from "../../../../public/assets/img/hero/maskot-1.JPG";

const Fasilitas = () => {
  return (
    <section id="fasilitas" className="md:container md:mx-auto pt-24">
      <div className="flex md:mx-10 px-4 flex-col lg:gap-10 gap-5">
        <h1 className="xl:font-extrabold lg:font-bold lg:text-3xl text-2xl font-bold md:hidden block text-primary">
          Fasilitas
        </h1>
        <div className="">
          <Image
            className="w-full md:h-[25rem] h-48 object-cover"
            src={maskotSatu}
            alt="maskot"
            width={700}
            height={700}
          />
        </div>
        <div className="lg:flex lg:items-center gap-28 md:p-5">
          <h1 className="xl:font-extrabold md:block hidden lg:font-bold lg:text-3xl text-2xl font-bold text-primary">
            Fasilitas
          </h1>
          <div className="flex md:flex-row flex-col lg:gap-16 gap-5">
            <div className="">
              <h3 className="font-semibold text-lg mb-2">Laboratorium</h3>
              <p className="md:text-base text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Excepturi doloribus odio nulla dicta. Corrupti, maxime?
              </p>
            </div>
            <div className="">
              <h3 className="font-semibold text-lg mb-2">Laboratorium</h3>
              <p className="md:text-base text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Excepturi doloribus odio nulla dicta. Corrupti, maxime?
              </p>
            </div>
            <div className="">
              <h3 className="font-semibold text-lg mb-2">Laboratorium</h3>
              <p className="md:text-base text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Excepturi doloribus odio nulla dicta. Corrupti, maxime?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fasilitas;
