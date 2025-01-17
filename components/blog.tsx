import Image, { StaticImageData } from "next/image";

import BlogImage1 from "../public/Images/blog-image-1.png";
import BlogImage2 from "../public/Images/blog-image-2.png";
import BlogImage3 from "../public/Images/blog-image-3.png";
import { Button } from "./ui/button";

const Data = [
    {
        image: BlogImage1,
        blogCategory: "About us",
        date: "25 Apr, 2024",
        title: "Unlock your potential at Eduhive.",
        description: "Eduhive is a digital ID system designed to efficiently manage student records and optimize school administration.",
    },
    {
        image: BlogImage2,
        blogCategory: "Guide",
        date: "25 Apr, 2024",
        title: "Ready to elevate your journey with Eduhive.",
        description: "Explore advanced features like data analytics, customizable reporting, and integration capabilities.",
    },
    {
        image: BlogImage3,
        blogCategory: "Testimonials",
        date: "25 Apr, 2024",
        title: "Eduhive changed the way I approach my goals.",
        description: "Eduhive truly enhances efficiency and helps us focus more on delivering quality education.",
    },
];

interface CardProps {
    image: StaticImageData;
    blogCategory: string;
    date: string;
    title: string;
    description: string;
}

const Card = ({ image, blogCategory, date, title, description }: CardProps) => {
    return (
        <div className="flex flex-col rounded-[12px] border border-[#0F52BA]/10 bg-[#F0F8FF] w-full max-w-[320px] md:max-w-none mx-auto">
            <div className="rounded-t-[12px] overflow-hidden">
                <Image
                    src={image}
                    alt="Blog image"
                    className="w-full h-auto object-cover aspect-video"
                />
            </div>
            <div className="px-4 md:px-6 flex flex-col mt-3 gap-y-4 pb-5">
                <div className="flex gap-x-3 items-center">
                    <div className="bg-[#F1B53E] py-1 px-3 rounded-[5px]">
                        <p className="font-normal text-xs md:text-sm">{blogCategory}</p>
                    </div>
                    <p className="font-normal text-xs md:text-sm text-[#343A40]">{date}</p>
                </div>
                <div className="flex flex-col gap-y-2">
                    <p className="text-[#292929] font-semibold text-sm md:text-lg line-clamp-2">{title}</p>
                    <p className="text-[#292929] font-normal text-xs md:text-base line-clamp-3">{description}</p>
                </div>
                <div>
                    <Button className="bg-[#0F52BA] text-white hover:text-[#0F52BA] hover:bg-white font-medium text-sm px-4 py-2 border-[#0F52BA] shadow-md">
                        Read more
                    </Button>
                </div>
            </div>
        </div>
    );
};

const Blog = () => {
    return (
        <div className="mt-10 md:mt-16 px-4 md:px-8">
            <div className="flex flex-col items-center justify-center gap-y-6">
                <p className="font-medium text-2xl md:text-4xl text-[#0F52BA] text-center">Latest Blog Posts</p>
                <p className="max-w-[690px] font-normal text-sm md:text-lg text-center">
                    Interactive group-based workshops for both individuals and organizations, available as single sessions or series.
                </p>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 gap-6">
                {Data.map((data) => (
                    <Card
                        key={data.title}
                        title={data.title}
                        description={data.description}
                        blogCategory={data.blogCategory}
                        date={data.date}
                        image={data.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default Blog;