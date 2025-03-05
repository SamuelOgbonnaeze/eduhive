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

const formSchema = z.object({
    username: z.string().min(2).max(50),
    userId: z.string().min(2).max(50),
    password: z.string().min(1).max(50),
    userRole: z.enum(["admin", "student"]),
})

const SignUpForm = () => {
    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        mode: "onChange", // Ensures validation updates dynamically
        defaultValues: {
            username: "",
            userId: "",
            password: "",
            userRole: undefined,
        },
    })

    // Handle form submission
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        router.push(values.userRole === "admin" ? "/admin" : "/students")
    }

    return (
        <div className="w-full max-w-[600px]">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input className="font-semibold" placeholder="Username" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

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

                    {/* User Role Selection */}
                    <FormField
                        control={form.control}
                        name="userRole"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <select
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                        onChange={(e) => field.onChange(e.target.value)}
                                        value={field.value || ""}
                                    >
                                        <option value="" disabled>Select Role</option>
                                        <option value="admin">Admin</option>
                                        <option value="student">Student</option>
                                    </select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="w-full">
                        <Button
                            className="flex mx-auto w-[200px] md:w-[330px] bg-[#0F52BA] text-white hover:bg-white hover:text-[#0F52BA] border border-[#0F52BA] rounded-[20px]"
                            type="submit"
                            disabled={!form.formState.isValid} // Disable button if form is invalid
                        >
                            Sign Up
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}

export default SignUpForm;
