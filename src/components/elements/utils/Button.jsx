import Link from "next/link";

const Button = ({ text, link }) => {
  return (
    <div className="">
      <Link
        href={link}
        className="bg-primary flex justify-center items-center text-white p-4 xl:text-base lg:text-sm lg:w-44 xl:w-48"
      >
        {text}
      </Link>
    </div>
  );
};

export default Button;
