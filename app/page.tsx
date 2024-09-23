import Link from "next/link";

import { MapPin, PhoneCall } from "lucide-react";

import Header from "./header";
import Feature from "./feature";
import Service from "./service";

export default function Home() {
  return (
    <>
      <Header />
      <div className="relative z-10 mt-[-50px]">
        <div className="absolute z-0 inset-0 top-[-200px] pointer-events-none backdrop-blur-[50px] backdrop-brightness-50 backdrop-saturate-200 [mask-image:linear-gradient(to_bottom,transparent_0,black_200px)]"></div>
        <div className="relative z-10">
          <section className="container mx-auto p-5">
            <h1 className="flex flex-col items-center justify-center">
              <span className="text-4xl font-semibold text-center text-white">
                查理 Repair 當面維修
              </span>
              <span className="text-lg text-center mt-2">
                Apple iPhone iPad 維修 -{" "}
                <span className="inline-block">林口 iPhone 維修</span>
              </span>
            </h1>
          </section>
          <Feature />
          <Service />
          <section className="container mx-auto p-5">
            <h2 className="text-2xl font-semibold text-center">地址 & 電話</h2>
            <div className="grid grid-cols-1 auto-rows-fr sm:grid-cols-2 gap-5 mt-10">
              <Link
                href="https://maps.app.goo.gl/wjADk7ahCG3MCvrB6"
                target="_blank"
                className="sm:text-balance rounded-xl bg-slate-300/10 p-5 sm:p-10 text-center flex items-center gap-5 justify-center transition hover:bg-slate-300/20 hover:scale-105"
              >
                <span className="w-fit">
                  林口iPhone維修 - 2樓查理 Repair <br />
                  333桃園市龜山區復興北路8號2樓
                </span>
                <MapPin className="flex-none" />
              </Link>
              <Link
                href="tel:0987654321"
                className="rounded-xl bg-slate-300/10 p-5 sm:p-10 text-center flex items-center gap-3 justify-center transition hover:bg-slate-300/20 hover:scale-105"
              >
                <span className="w-fit text-2xl tabular-nums font-semibold">
                  0987654321
                </span>
                <PhoneCall className="flex-none" />
              </Link>
            </div>
          </section>
          <footer className="container mx-auto p-5 pb-10">
            <p className="text-center text-balance text-xs">
              &copy; Copyright 2024 查理 Repair 當面維修
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
