import { CustomHeading, ButtonMain } from "../Components";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

const ContactMain = () => {
  return (
    <div className="mx-auto my-10 flex max-w-[1450px] justify-center bg-white max-lg:flex-col-reverse">
      <div className="flex w-[50%] flex-col gap-6 py-10 pl-10 max-lg:w-full max-lg:pr-10">
        <CustomHeading
          title="Contact Details"
          isSubtitle={true}
          justifyCenter={false}
        />

        <div className="flex items-center gap-4">
          <div className="bg-orange p-2">
            <MapPinIcon className="size-8 text-white" />
          </div>

          <p className="ml-2">
            28 Green Tower, Street Name,
            <br />
            New York City, USA
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-orange p-2">
            <PhoneIcon className="size-8 text-white" />
          </div>
          <div>
            <p className="ml-2">012-345-6789</p>
            <p className="ml-2">+880 1234 123456</p>
          </div>
        </div>

        <div className="mb-2 flex items-center gap-4">
          <div className="bg-orange p-2">
            <EnvelopeIcon className="size-8 text-white" />
          </div>
          <div>
            <p className="ml-2">hurst@example.com</p>
            <p className="ml-2">info@example.com</p>
          </div>
        </div>

        <CustomHeading
          title="Send Message"
          isSubtitle={true}
          justifyCenter={false}
        />

        <input
          type="text"
          placeholder="Enter Your Name"
          className="border border-gray-200 p-3 outline-0"
        />
        <input
          type="email"
          placeholder="Enter Your Email"
          className="border border-gray-200 p-3 outline-0"
        />
        <textarea
          type="text"
          placeholder="Enter Your Message"
          className="h-[215px] resize-none border border-gray-200 p-3 outline-0"
        />
        <div>
          <ButtonMain name="Submit" isFullWidth={true} />
        </div>
      </div>

      <div className="w-[60%] p-10 max-lg:w-full max-lg:p-0">
        <iframe
          className="h-[800px] w-full max-lg:h-[600px] max-sm:h-[400px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96703.48933474459!2d-74.04692658955925!3d40.76237572299312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f0710ab5eb%3A0x164a1e643b2fb871!2sGreen%20Tower%20Development!5e0!3m2!1sen!2sza!4v1741351203613!5m2!1sen!2sza"
          width="600"
          height="450"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactMain;
