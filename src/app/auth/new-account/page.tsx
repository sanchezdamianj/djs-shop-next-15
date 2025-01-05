import { titleFont } from "@/config/fonts";
import { RegisterForm } from "./ui/RegisterForm";


export default function NewAccountPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col max-w-[500px] w-full px-4">
      <h1 className={`${titleFont.className} text-4xl mb-5`}>New account</h1>
      <RegisterForm />
      </div>
    </div>
  );
}
