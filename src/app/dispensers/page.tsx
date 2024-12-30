import Image from "next/image";
import ProductSide from "@/../public/images/product_side.jpg";
import ProductZoom from "@/../public/images/product_zoom.jpg";

export default function DispensersPage() {
  return (
    <div className="bg-luna-beige">
      <div className="flex flex-col items-center pt-2 pb-20">
        <main className="text-luna-blue text-center mb-14 flex flex-col items-center">
          <h1 className="font-bold text-3xl mt-6 mb-12">OUR DISPENSERS</h1>
          <div className="leading-none flex flex-col gap-y-4 w-10/12 md:w-1/2">
            <p>
              Our subscription-based model allows us to supply organisations
              with menstrual product dispensers and send menstrual product top
              ups at regular intervals. Our unique approach includes a
              commitment to donate one menstrual product for every product we
              supply.
            </p>
            <p>
              Our talented team has developed our own menstrual product
              dispensers. We manufacture the dispensers ourselves at UCL to keep
              our costs down. This allows us to price below all of our
              competitors which maximises our sales and therefore our impact
              through donations.
            </p>
            <p>
              By partnering with organisations, we aim to create a sustainable
              solution that ultimately contributes towards the eradication of
              period poverty in the UK.
            </p>
            <p>Email us at team@thelunainitiative.org for all enquiries.</p>
          </div>
        </main>
        <div className="flex flex-col gap-y-9 items-center">
          <Image
            src={ProductSide}
            alt="luna product"
            className="w-3/4 md:w-[400px]"
          />
          <Image
            src={ProductZoom}
            alt="luna product"
            className="w-3/4 md:w-[400px]"
          />
        </div>
      </div>
    </div>
  );
}
