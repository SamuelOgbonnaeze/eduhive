"use client"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


const formSchema = z.object({
    firstname: z.string().min(2, {
        message: "First name is required",
    }),
    lastname: z.string().min(2, {
        message: "Last name is required",
    }),
    email: z.string().min(2, {
        message: "Email is required",
    }),
    phonenumber: z.string().min(2, {
        message: "Phone number is required",
    }),
    parentnumber: z.string().min(2, {
        message: "Parent phone number is required",
    }),
    grade: z.string().min(2, {
        message: "Grade is required",
    }),
    passport: z.string().min(2, {
        message: "Passport Image is required",
    }),
})

const AddRecordForm = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstname: "",
            lastname: "",
            email: "",
            phonenumber: "",
            parentnumber: "",
            grade: "",
            passport: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {

        console.log(values)
    }

    return (
        <div className="">
            <div className="bg-[#F0F8FF] py-[34px] px-3 rounded-b-[10px]">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className="grid grid-cols-2 gap-x-6 gap-y-5 ">
                            <FormField
                                control={form.control}
                                name="firstname"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>First Name</FormLabel>
                                        <FormControl>
                                            <Input className="bg-white shadow-sm rounded-[10px] max-w-[410px] h-[50px] border-[#0F52BA1A] " {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input className="bg-white shadow-sm rounded-[10px] max-w-[410px] h-[50px] border-[#0F52BA1A] " {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="lastname"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Last Name</FormLabel>
                                        <FormControl>
                                            <Input className="bg-white shadow-sm rounded-[10px] max-w-[410px] h-[50px] border-[#0F52BA1A] " {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="phonenumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone Number</FormLabel>
                                        <FormControl>
                                            <Input className="bg-white shadow-sm rounded-[10px] max-w-[410px] h-[50px] border-[#0F52BA1A] " {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="grade"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Grade</FormLabel>
                                        <FormControl>
                                            <Input className="bg-white shadow-sm rounded-[10px] max-w-[410px] h-[50px] border-[#0F52BA1A] " {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="parentnumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Parent Number</FormLabel>
                                        <FormControl>
                                            <Input className="bg-white shadow-sm rounded-[10px] max-w-[410px] h-[50px] border-[#0F52BA1A] " {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="passport"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Passport</FormLabel>
                                        <FormControl>
                                            <div className="bg-white shadow-sm rounded-[10px] max-w-[360px] h-[220px] flex border-dashed border border-[#0F52BA80] items-center justify-center text-center " {...field} >
                                                <p className="text-[#696969] font-normal text-lg ">Add passport</p>
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>



                    </form>
                </Form>
            </div>


            <div className="flex justify-end my-4 gap-x-2.5">
                <Button variant={"outline"} className="w-[140px] h-[53px] border border-[#0F52BA] hover:bg-[#0F52BA] hover:text-white text-[#0F52BA] rounded-[15px] py-3 px-2.5 font-medium text-lg " >Save as draft</Button>
                <Button  type="submit" className="w-[140px] h-[53px]  bg-[#0F52BA] hover:bg-white hover:text-[#0F52BA] hover:border-[#0F52BA] hover:border text-white rounded-[15px] py-3 px-2.5 font-medium text-lg "  >Submit</Button>
            </div>
        </div>
    );
}

export default AddRecordForm;