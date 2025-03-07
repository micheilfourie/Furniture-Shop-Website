import { AboutImage } from "../assets";

const AboutMain = () => {
  return (
    <div className="mx-auto my-20 grid w-full max-w-[1450px] grid-cols-1 items-center gap-10 bg-white p-10 text-black lg:grid-cols-2">
      <img src={AboutImage} alt="" />
      <div className="bg-offwhite flex flex-col gap-4 p-10 lg:w-[165%] lg:-translate-x-[40%]">
        <h1 className="text-lg font-bold uppercase">About Hurst</h1>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          nemo ipsa est, voluptatibus sapiente, laudantium quod a aperiam rem
          dolorum nesciunt autem deserunt sint non ad, nobis reiciendis vitae
          at. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          <br />
          Voluptates nemo ipsa est, voluptatibus sapiente, laudantium quod a
          aperiam rem dolorum nesciunt autem deserunt sint non ad, nobis
          reiciendis vitae at.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          nemo ipsa est, voluptatibus sapiente, laudantium quod a aperiam rem
          dolorum nesciunt autem deserunt sint non ad, nobis reiciendis vitae
          at.
        </p>
      </div>
    </div>
  );
};

export default AboutMain;
