"use client";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui";
import Image from "next/image";

interface ReviewsInterface {
  avatar: string;
  name: string;
  jobs: string;
  review: string;
}

const reviewsData: ReviewsInterface[] = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Carlos Jose",
    jobs: "Conductor",
    review:
      "Sunt sint consequat occaecat reprehenderit consequat velit eiusmod qui excepteur voluptate elit reprehenderit tempor occaecat. ",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Maria Jose",
    jobs: "Vendedora",
    review:
      "Sunt sint consequat occaecat reprehenderit consequat velit eiusmod qui excepteur voluptate elit reprehenderit tempor occaecat. ",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Juan Carlos",
    jobs: "Chef",
    review:
      "Sunt sint consequat occaecat reprehenderit consequat velit eiusmod qui excepteur voluptate elit reprehenderit tempor occaecat. ",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Marcos Guzman",
    jobs: "Conductor",
    review:
      "Sunt sint consequat occaecat reprehenderit consequat velit eiusmod qui excepteur voluptate elit reprehenderit tempor occaecat.  ",
  },
];

export const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
        {/* Slide */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className="h-[350px]"
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                  <CardHeader className="p-0 mn-10">
                    <div className="flex items-center gap-x-4">
                      {/*Image */}
                      <Image
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt={person.name}
                        priority
                      />
                      {/* Name */}
                      <div className="flex flex-col">
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.jobs }</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground">{ person.review}</CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
