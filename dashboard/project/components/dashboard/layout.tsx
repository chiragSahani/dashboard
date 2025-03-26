"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, LogOut, Settings, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [user, setUser] = useState<{ email: string } | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userData = localStorage.getItem("user");
      setUser(userData ? JSON.parse(userData) : null);
    }
  }, []);

  const handleLogout = useCallback(() => {
    localStorage.removeItem("user");
    router.push("/");
  }, [router]);

  const handleDeleteAccount = useCallback(() => {
    localStorage.removeItem("user");
    router.push("/");
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <LayoutDashboard className="h-8 w-8 text-gray-700" />
              <span className="text-lg font-semibold text-gray-800">Dashboard</span>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5 text-gray-600 hover:text-gray-800" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-52">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {user ? (
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4 text-gray-500" />
                    <span className="text-gray-700">{user.email}</span>
                  </DropdownMenuItem>
                ) : (
                  <DropdownMenuItem disabled>
                    <User className="mr-2 h-4 w-4 text-gray-300" />
                    <span className="text-gray-400">Not Logged In</span>
                  </DropdownMenuItem>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="hover:bg-red-50 hover:text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleDeleteAccount} className="hover:bg-red-50 hover:text-red-600">
                  <Settings className="mr-2 h-4 w-4" />
                  Delete Account
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>

      {/* Sidebar + Content */}
      <div className="flex">
        <aside className="w-64 bg-white shadow-md border-r min-h-screen p-4">
          <nav className="space-y-2">
            <Button variant="ghost" className="w-full flex items-center justify-start text-gray-700 hover:bg-gray-100">
              <LayoutDashboard className="mr-2 h-5 w-5" />
              Details
            </Button>
          </nav>
        </aside>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
