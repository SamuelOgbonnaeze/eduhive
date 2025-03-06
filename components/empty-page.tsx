import SorryImage from "@/public/Images/sorry.png"
import Image from "next/image";

const EmptyPage = () => {
    return (
        <div className="w-full h-full flex items-center justify-center px-4">
            <div className="max-w-sm w-full flex flex-col items-center text-center gap-y-3">
                <p className="font-bold text-2xl">Oh oh</p>
                <Image src={SorryImage} width={200} height={200} alt="Sorry Image" />
                <p className="text-muted-foreground text-lg">This page is currently under maintenance</p>
            </div>
        </div>
    );
}

export default EmptyPage;