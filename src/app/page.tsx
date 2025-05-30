"use client";

import {
  Checkout,
  CheckoutButton,
  CheckoutStatus,
} from "@coinbase/onchainkit/checkout";
import Image from "next/image";
import Footer from "src/components/Footer";
import WalletWrapper from "src/components/WalletWrapper";
import { useAccount } from "wagmi";
import LoginButton from "../components/LoginButton";
import SignupButton from "../components/SignupButton";

const productId = process.env.NEXT_PUBLIC_PRODUCT_ID;

export default function Page() {
  const { address } = useAccount();

  return (
    <div className="flex h-full w-96 max-w-full flex-col px-1 md:w-[1008px]">
      <section className="mt-6 mb-6 flex w-full flex-col md:flex-row">
        <div className="flex w-full flex-row items-center justify-between gap-2 md:gap-0">
          <h1 className="font-bold text-xl">Web3 E-Commerce</h1>
          <div className="flex items-center gap-3">
            <SignupButton />
            {!address && <LoginButton />}
          </div>
        </div>
      </section>
      <section className="templateSection flex w-full flex-col items-center justify-center gap-4 rounded-xl bg-gray-100 px-2 py-4 md:grow">
        <div className="flex h-[450px] w-[450px] max-w-full items-center justify-center rounded-xl">
          <div className="rounded-xl bg-[#F3F4F6] px-4 py-[11px]">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/product.jpg`}
              width={250}
              height={250}
              alt="Product"
              className="rounded-xl"
            />
          </div>
        </div>
        {address ? (
          <Checkout className="w-[450px]" productId={productId}>
            <CheckoutButton text="Buy me a coffee ☕️ / $5 USDC" />
            <CheckoutStatus />
          </Checkout>
        ) : (
          <WalletWrapper
            className="w-[450px] max-w-full"
            text="Sign in to buy me a coffee ☕️"
          />
        )}
      </section>
      <Footer />
    </div>
  );
}
