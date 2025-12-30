import { Loader2 } from "lucide-react";

function LoaderSpin({ classVariant = "h-12 w-12" }) {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-100/30 backdrop-blur-lg">
      <Loader2
        className={`${classVariant} animate-spin duration-2000 text-primary`}
      />
    </div>
  );
}

export default LoaderSpin;
