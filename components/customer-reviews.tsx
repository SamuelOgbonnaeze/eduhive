import Image, { StaticImageData } from "next/image";
import Quote from "../public/Images/quote-mark.png"
import Rating from "../public/Images/rating.png"
import Review1 from "../public/Images/review-1.png"
import Review2 from "../public/Images/review-2.png"
import Review3 from "../public/Images/review-3.png"

interface CardProps {
    image: StaticImageData
    review: string
    name: string
    role: string
}

const Data = [
    {
        review: "Using Eduhive has been a delightful experience. The platform is intuitive and  help us to access our  records with ease. ",
        name: "Duke Emeka",
        role: "Student",
        image: Review1
    },
    {
        review: "The secure system ensures our children information is protected, while making record management a breeze for everyone involved. ",
        name: "James Ali",
        role: "Parent",
        image: Review2
    },
    {
        review: "We’ve seen remarkable improvements in how we handle student records with Eduhive. It’s dependable, easy to use.",
        name: "Benson Mike",
        role: "Teacher",
        image: Review3
    }
]

const Card = ({ image, review, name, role }: CardProps) => {
    return (
        <div className="relative bg-[#F0F8FF] border-[#0F52BA]/20 flex flex-col py-4 px-2 rounded-[5px] border w-[331px] h-[250px] " >
            <Image
                src={Quote}
                width={20}
                height={20}
                alt="quotation mark"
                className="absolute -right-5 -top-[10px]"
            />
            <div className="flex flex-col gap-y-[20px] h-full ">
                <Image
                    src={Rating}
                    width={84}
                    height={16}
                    alt="rating"
                />
                <p className="font-normal text-base text-[#343A40] w-[310px] " >{review} </p>
                <div className="mb-[10px] flex gap-x-[30px] items-center bottom-0 ">
                    <Image
                        src={image}
                        width={50}
                        height={50}
                        alt="review-1"
                    />
                    <div className="flex flex-col justify-between ">
                        <p className="font-semibold text-sm ">{name}</p>
                        <p className="font-normal text-sm">{role}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
const CustomerReviews = () => {
    return (
        <div className="mt-[100px]">
            <div className=" flex flex-col items-center justify-center gap-y-5 text-center ">
                <p className="font-medium text-4xl text-[#0F52BA] ">What our customers say</p>
                <p className="font-normal text-lg text-[#292929] w-[650px]  ">Eduhive transforms record management, ensuring efficiency, security, and seamless collaboration, our customers trust and love it.</p>
            </div>
            <div className="grid grid-cols-3 items-center justify-between gap-x-5 mt-[30px] ">

                {Data.map((data) => (
                    <Card
                        key={data.name}
                        image={data.image}
                        review={data.review}
                        name={data.name}
                        role={data.role}
                    />
                ))}
            </div>
         
        </div>
    );
}

export default CustomerReviews;