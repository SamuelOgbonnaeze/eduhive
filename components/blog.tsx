import Image, { StaticImageData } from "next/image"

import BlogImage1 from "../public/Images/blog-image-1.png"
import BlogImage2 from "../public/Images/blog-image-2.png"
import BlogImage3 from "../public/Images/blog-image-3.png"
import { Button } from "./ui/button";

const Data = [
    {
        image: BlogImage1,
        blogCategory: "About us",
        date: "25 Apr, 2024",
        title: "Unlock your potential at Eduhive.",
        description: "Eduhive is a digital ID system designed to efficiently manage student records and optimize school administration."
    },
    {
        image: BlogImage2,
        blogCategory: "Guide",
        date: "25 Apr, 2024",
        title: "Ready to elevate your journey with Eduhive.",
        description: "Explore advanced features like data analytics, customizable reporting, and integration capabilities."
    },
    {
        image: BlogImage3,
        blogCategory: "Testimonials",
        date: "25 Apr, 2024",
        title: "Eduhive changed way I approach my goal",
        description: "Eduhive truly enhances efficiency and helps us focus more on delivering quality education."
    },
    
]

interface CardProps {
    image: StaticImageData,
    blogCategory: string,
    date: string,
    title: string,
    description: string,
}
const Card = ({ image, blogCategory, date, title, description }: CardProps) => {
    return (
        <div className="flex flex-col rounded-[12px] border border-[#0F52BA]/10 bg-[#F0F8FF] " >
            <Image
                src={image}
                width={400}
                height={225}
                alt="BlogImage1"
                className="w-full object-cover"
            />
            <div className="px-5 flex flex-col mt-2 gap-y-5 pb-5">
                <div className="flex gap-x-4 items-center">
                    <div className="bg-[#F1B53E] py-1 px-3 rounded-[5px]">
                        <p className="font-normal text-base ">{blogCategory}</p>
                    </div>
                    <p className="font-normal text-base text-[#343A40] " >{date}</p>
                </div>
                <div className="flex flex-col  gap-y-[10px] " >
                    <p className="text-[#292929] font-semibold text-base ">{title}</p>
                    <p className="text-[#292929] font-normal text-base w-[320px] ">{description}</p>
                </div>
                <div className=" w-[150px]" >
                    <Button className="bg-[#0F52BA] text-white hover:text-[#0F52BA] hover:bg-white font-medium text-xl border-[#0F52BA] shadow-md ">Read more</Button>
                </div>
            </div>
        </div>
    )
}

const Blog = () => {
    return (
        <div className="mt-[70px] ">
            <div className=" flex flex-col items-center justify-center gap-y-9 ">
                <p className="font-medium text-4xl text-[#0F52BA] ">Latest Blog Posts</p>
                <p className="w-[690px] font-normal text-lg text-center ">Interactive group-based workshops for both individuals and organization, available as single sessions or series</p>
            </div>
            <div className="w-full grid grid-cols-3 mt-[30px] gap-x-4 ">
               {Data.map((data)=>(
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
}

export default Blog;