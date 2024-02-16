import Image from "next/image";
import logoPemasaran from "../../../public/assets/img/logoPemasaran.svg";
import Kajur from "../../../public/assets/img/kajur.png";

const About = () => {
  return (
    <div className="md:container md:mx-auto">
      <div className="mt-28 flex flex-col gap-5  md:mx-10 md:p-0 px-4">
        <div className="flex justify-center mb-3">
          <Image
            className="md:w-72 w-48"
            width={250}
            height={250}
            src={logoPemasaran}
            alt="logo"
          />
        </div>
        <div className="kajur flex flex-col gap-5">
          <h3 className="font-bold md:text-2xl text-xl text-primary">
            Kepala Kejuruan Pemasaran
          </h3>
          <div className="flex gap-5">
            <Image
              width={200}
              className="rounded-lg md:w-72 w-48"
              height={200}
              src={Kajur}
              alt="kajur"
            />

            <div className="font-bold text-primary">
              <h3>Nama : Hendra Kuswandi</h3>
              <h3>NIP : 19991007</h3>
              <h3>Jabatan : Kepala Jurusan Pemasaran</h3>
            </div>
          </div>
        </div>
        <h3 className="font-bold md:text-2xl text-xl">
          Visi - Misi Kejuruan Pemasaran
        </h3>
        <div className="visi">
          <h3 className="font-bold md:text-xl text-lg ">Visi</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint natus
            optio voluptatum assumenda magnam laboriosam, eos dicta iste
            distinctio molestiae placeat iure error omnis ipsa, animi dolorum
            earum eum libero.
          </p>
        </div>
        <div className="misi">
          <h3 className="font-bold md:text-xl text-lg ">Misi</h3>
          <ul>
            {/* misi jurusan pemasaran */}
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
