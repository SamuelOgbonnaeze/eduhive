"use client";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import TestDropdown from "@/components/ui/dropdown-test";
import { MoreHorizontal } from "lucide-react";

export default function TestPage() {
    return (
        <div className="flex justify-center items-center h-screen space-y-7">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="w-4 h-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => alert("Clicked!")}>Click Me</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>



            <TestDropdown />
        </div>
    );
}
