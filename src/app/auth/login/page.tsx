import { titleFont } from '@/config/fonts';
import { LoginForm } from './ui/LoginForm';

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col max-w-[500px] w-full px-4">

        <h1 className={ `${ titleFont.className } text-4xl mb-5` }>Log in</h1>

        <LoginForm />
      </div>
    </div>
  );
}