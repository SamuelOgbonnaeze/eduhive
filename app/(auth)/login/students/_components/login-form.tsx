"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const formSchema = z.object({
    userId: z.string().min(2).max(50),
    password: z.string().min(6).max(6),
    userRole: z.enum(["admin", "student"]),
})

const StudentLoginForm = () => {
    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        mode: "onChange", 
        defaultValues: {
            userId: "",
            password: "",
            userRole: undefined,
        },
    })

  
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        router.push("/students")
    }

    return (
        <div className="w-full max-w-[600px]">
        
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="userId"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input className="font-semibold" placeholder="User ID" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input type="password" className="font-semibold" placeholder="Password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="userRole"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Select onValueChange={field.onChange} value={field.value}>
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Select Role" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="student">Student</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="w-full">
                        <Button
                            className="flex mx-auto w-[200px] md:w-[330px] bg-[#0F52BA] text-white hover:bg-white hover:text-[#0F52BA] border border-[#0F52BA] rounded-[20px]"
                            type="submit"
                            disabled={!form.formState.isValid} 
                        >
                            Login
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}

export default StudentLoginForm;
