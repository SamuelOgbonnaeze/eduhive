import { Ellipsis } from 'lucide-react';

interface CalendarCardProps {
    time: string;
    topic: string;
    subject: string;
}

const CalendarCard = ({ time, topic, subject }: CalendarCardProps) => {
    return (
        <div className="flex relative">
            <div className="flex -mt-3">
                <p className='p-1 font-medium text-sm sm:text-base'>{time}</p>
            </div>
            <div className="px-2 flex flex-col border-l border-black gap-y-2 font-normal text-sm sm:text-base">
                <p>{topic}</p>
                <p>{subject}</p>
            </div>
        </div>
    );
};

const calendarData = [
    { time: "10:00", topic: "Set Theorem", subject: "Further Maths" },
    { time: "12:30", topic: "Alkane, Alkene, Alkyne", subject: "Organic Chemistry" },
    { time: "15:00", topic: "Photosynthesis", subject: "Biology" },
    { time: "17:00", topic: "Newton's Laws", subject: "Physics" },
];

const StudentCalendar = () => {
    function getFormattedDate(): string {
        const date = new Date();
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();

        const capitalizeFirstLetter = (str: string): string =>
            str.charAt(0).toUpperCase() + str.slice(1);

        const ordinalSuffix = (n: number): string => {
            const s = ["th", "st", "nd", "rd"];
            const v = n % 100;
            return n + (s[(v - 20) % 10] || s[v] || s[0]);
        };

        return `${ordinalSuffix(day)} of ${capitalizeFirstLetter(month)}, ${year}`;
    }

    return (
        <div className="mt-4 font-poppins text-[#292929]">
            <div className="w-full flex justify-between items-center">
                <p className="font-semibold text-lg sm:text-xl">Calendar</p>
                <Ellipsis size={16} />
            </div>

            <div className="mt-4">
                <p className="text-[#29292980] font-medium text-sm sm:text-base">{getFormattedDate()}</p>
            </div>

            <div className="flex flex-col mt-7 gap-y-5">
                {calendarData.map((event, index) => (
                    <CalendarCard
                        key={index}
                        time={event.time}
                        topic={event.topic}
                        subject={event.subject}
                    />
                ))}
            </div>
        </div>
    );
};

export default StudentCalendar;
