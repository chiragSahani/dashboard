import { redirect } from "next/navigation";
import LoginForm from "@/components/auth/login-form";

export default function Home() {
  return <LoginForm />;
}