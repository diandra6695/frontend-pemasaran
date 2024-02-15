"use client";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React, { useRef } from "react";

const Testimonial = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <section id="testimoni" className="md:container md:mx-auto pt-24">
      <div className="grid md:grid-cols-2 grid-cols-1 md:mx-10 px-4">
        <div className="flex flex-col gap-5">
          <h3 className="md:text-3xl text-2xl text-primary font-bold">
            Testimonial
          </h3>
          <p className="max-w-xl md:text-base text-sm md:mb-0 mb-5">
            Lorem ipsum dolor sit amet consectetur. Vitae amet hac sed risus. Mi
            tempus sapien sit maec Mi tempus sapien sitLorem ipsum dolor sit
            amet consectetur.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-xs"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              <CarouselItem>
                <Card className="p-5 flex flex-col gap-4">
                  <Image
                    className="h-[16rem] w-full object-cover rounded"
                    src={"/assets/img/hero/maskot-1.JPG"}
                    width={200}
                    height={200}
                    alt="maskot"
                  />

                  <CardTitle>Sudiro Gunawan</CardTitle>
                  <CardDescription>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                    expedita qui obcaecati consectetur eum voluptas dolorem!
                    Quas ratione quaerat possimus.
                  </CardDescription>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="p-5 flex flex-col gap-4">
                  <Image
                    className="h-[16rem] w-full object-cover"
                    src={"/assets/img/hero/maskot-1.JPG"}
                    width={200}
                    height={200}
                    alt="maskot"
                  />

                  <CardTitle>Sudiro Gunawan</CardTitle>
                  <CardDescription>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                    expedita qui obcaecati consectetur eum voluptas dolorem!
                    Quas ratione quaerat possimus.
                  </CardDescription>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="p-5 flex flex-col gap-4">
                  <Image
                    className="h-[16rem] w-full object-cover"
                    src={"/assets/img/hero/maskot-1.JPG"}
                    width={200}
                    height={200}
                    alt="maskot"
                  />

                  <CardTitle>Sudiro Gunawan</CardTitle>
                  <CardDescription>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                    expedita qui obcaecati consectetur eum voluptas dolorem!
                    Quas ratione quaerat possimus.
                  </CardDescription>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
