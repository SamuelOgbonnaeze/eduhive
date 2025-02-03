import Image, { StaticImageData } from "next/image";
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
        <div className=" bg-[#F0F8FF] border-[#0F52BA]/20 flex flex-col py-4 px-2 rounded-[5px] border w-[331px] h-[270px] ">
            <div className="flex flex-col gap-y-5 h-full">
                <Image
                    src={Rating}
                    width={84}
                    height={16}
                    alt="rating"
                    className="sm:w-20 sm:h-4"
                />
                <p className="font-normal text-base text-[#343A40] w-[310px] sm:w-full">
                    {review}
                </p>
                <div className="mb-2.5 flex gap-x-7.5 items-center bottom-0 sm:gap-x-4">
                    {image && (
                        <Image
                            src={image}
                            width={50}
                            height={50}
                            alt="review-1"
                            className="sm:w-10 sm:h-10"
                        />
                    )}
                    <div className="flex flex-col justify-between">
                        <p className="font-semibold text-sm sm:text-xs">{name}</p>
                        <p className="font-normal text-sm sm:text-xs">{role}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CustomerReviews = () => {
    return (
        <div className="mt-[100px]">
            <div className=" flex flex-col items-center justify-center gap-y-3 md:gap-y-5 text-center ">
                <p className="font-medium text-2xl md:text-3xl lg:text-4xl text-[#0F52BA] ">What our customers say</p>
                <p className="font-normal text-base lg:text-lg text-[#292929] w-full md:w-[650px]  ">Eduhive transforms record management, ensuring efficiency, security, and seamless collaboration, our customers trust and love it.</p>
            </div>
            <div className="flex flex-cols-3 items-center justify-between gap-x-5 mt-[30px] overflow-x-scroll md:overflow-auto ">

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