import { BillingDetails } from "../Components/index.js";
import { CustomHeading, ButtonMain } from "../Components/index.js";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const paymentMethods = [
  {
    name: "Direct Bank Transfer",
    body: "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won't be shipped until the funds have cleared in our account.",
  },
  {
    name: "Cheque Payment",
    body: "Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.",
  },
  {
    name: "PayPal",
    body: "Pay via PayPal, you can pay with your credit card if you don’t have a PayPal account.",
  },
];

const CheckoutMain = () => {
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePaymentMethod = (method) => {
    if (paymentMethod === method) {
      setPaymentMethod("");
    } else {
      setPaymentMethod(method);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-10 bg-white p-10 text-black max-md:grid-cols-1">
      <div className="flex flex-col gap-4">
        <CustomHeading
          title="Billing Details"
          justifyCenter={false}
          isSubtitle={true}
        />
        <BillingDetails />
      </div>

      <div className="flex flex-col gap-4">
        <CustomHeading
          title="Ship To Different Address"
          justifyCenter={false}
          isSubtitle={true}
        />
        <BillingDetails differentAddress={true} />
      </div>

      <div className="flex flex-col gap-4">
        <CustomHeading
          title="Order Details"
          justifyCenter={false}
          isSubtitle={true}
        />
        <table className="w-full">
          <thead className="bg-gray-100 font-bold uppercase">
            <tr className="">
              <td className="px-4 py-2">Product</td>
              <td className="px-4 py-2">Total</td>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-1">Product 1</td>
              <td className="px-4 py-1">$41.00</td>
            </tr>
            <tr>
              <td className="px-4 py-1">Product 2</td>
              <td className="px-4 py-1">$67.00</td>
            </tr>
            <tr>
              <td className="px-4 py-1">Product 3</td>
              <td className="px-4 py-1">$13.00</td>
            </tr>
            <tr>
              <td className="px-4 py-1">Vat</td>
              <td className="px-4 py-1">$10.00</td>
            </tr>
            <tr className="text-red font-semibold">
              <td className="px-4 py-1">Order Total:</td>
              <td className="px-4 py-1">$131.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex flex-col gap-4">
        <CustomHeading
          title="Payment Method"
          justifyCenter={false}
          isSubtitle={true}
        />

        <div className="flex w-full flex-col gap-2">
          {paymentMethods.map((method, index) => (
            <div
              key={index}
              className={`${paymentMethod === method.name ? "h-[calc(100%-200px)]" : "h-[58px]"} overflow-hidden transition-all duration-300 ease-in-out`}
            >
              <div
                onClick={() => handlePaymentMethod(method.name)}
                className="flex h-[58px] cursor-pointer justify-between bg-gray-100 p-4 font-bold text-black uppercase"
              >
                <h3>{method.name}</h3>
                {paymentMethod === method.name ? (
                  <ChevronUpIcon className="size-6" />
                ) : (
                  <ChevronDownIcon className="size-6" />
                )}
              </div>
              <div className="border border-gray-200">
                <p className="p-4 text-black">{method.body}</p>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <ButtonMain name="Place Order" isFullWidth />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutMain;
