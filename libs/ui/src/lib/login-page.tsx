import { ReactNode } from 'react';
import bg from './assets/bg.webp?url';
import { LogIn } from 'lucide-react';

export function LoginPage(): ReactNode {
  return (
    <div
      className="size-full flex bg-cover bg-center bg-no-repeat items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div
        className="
          p-8
          w-full max-w-md
          rounded-3xl
          shadow-2xl
          backdrop-blur-md
          border border-opacity-30 border-white
          bg-gradient-to-br to-white/10 from-blue-100/90
          z-10
        "
      >
        <div className="text-center flex flex-col items-center justify-center gap-5">
          <LogIn />

          <h2 className="text-2xl font-semibold text-gray-800">Sign in with email</h2>
          <p className="text-sm text-gray-500">
            Make a new doc to bring your words, data, and teams together. For free
          </p>
        </div>
      </div>
    </div>
  );
}
