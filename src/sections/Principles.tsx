import React from "react";
import Image from "next/image";

const Principles = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-9 py-48">
      <h2 className="mb-12 text-3xl xl:text-5xl">
        <span className="text-amber-300 font-semibold">Core</span> Principles
      </h2>
      <div className="mx-auto flex w-full max-w-[1000px] flex-col gap-8 xl:h-[600px] xl:flex-row">
        <article className="flex flex-row xl:flex-col justify-between items-center relative rounded-2xl bg-white bg-opacity-10 backdrop-blur-2xl">
          <div className="p-6 xl:p-9">
            <h3 className="text-2xl xl:text-3xl mb-4">
              Defragmenting liquidity
            </h3>
            <p className="xl:text-xl">
              Simple DeFi legos (AMM, Perps, Lend) and pools built into the
              chain and powered by{" "}
              <span className="text-amber-300 ">validators</span>
            </p>
          </div>
          <Image
            className="w-44 xl:w-full "
            src={
              "https://www.berachain.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduv0g402y%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FnewFoundation%2Fcapitalefficiency_d138q8&w=1080&q=75"
            }
            alt={"alt"}
            height={256}
            width={256}
          />
        </article>
        <article className="flex flex-row xl:flex-col justify-between items-center relative rounded-2xl bg-white bg-opacity-10 backdrop-blur-2xl">
          <div className="p-6 xl:p-9">
            <h3 className="text-2xl xl:text-3xl mb-4">
              Defragmenting liquidity
            </h3>
            <p className="xl:text-xl">
              Simple DeFi legos (AMM, Perps, Lend) and pools built into the
              chain and powered by{" "}
              <span className="text-amber-300 ">validators</span>
            </p>
          </div>
          <Image
            className="w-44 xl:w-full "
            src={
              "https://www.berachain.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduv0g402y%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FnewFoundation%2Fcapitalefficiency_d138q8&w=1080&q=75"
            }
            alt={"alt"}
            height={256}
            width={256}
          />
        </article>
        <article className="flex flex-row xl:flex-col justify-between items-center relative rounded-2xl bg-white bg-opacity-10 backdrop-blur-2xl">
          <div className="p-6 xl:p-9">
            <h3 className="text-2xl xl:text-3xl mb-4">
              Defragmenting liquidity
            </h3>
            <p className="xl:text-xl">
              Simple DeFi legos (AMM, Perps, Lend) and pools built into the
              chain and powered by{" "}
              <span className="text-amber-300 ">validators</span>
            </p>
          </div>
          <Image
            className="w-44 xl:w-full "
            src={
              "https://www.berachain.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduv0g402y%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1%2FnewFoundation%2Fcapitalefficiency_d138q8&w=1080&q=75"
            }
            alt={"alt"}
            height={256}
            width={256}
          />
        </article>
      </div>
    </section>
  );
};

export default Principles;
