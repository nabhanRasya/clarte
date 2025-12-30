import Logo from "@/assets/logo.svg";
import Iridescence from "@/components/Iridescence";
import { TextLoop } from "@/components/motion-primitives/text-loop";

function WelcomeLayout({ children }) {
  return (
    <div className="min-h-screen w-full relative bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 z-10 pointer-events-none23">
        <Iridescence />
      </div>
      <div
        className="absolute inset-0 z-10"
        style={{
          background: `
          radial-gradient(circle at 50% 100%, oklch(16.489% 0.03526 281.831 / 0.4) 0%, transparent 60%),
          radial-gradient(circle at 50% 100%, oklch(16.489% 0.03526 281.831 / 0.4) 0%, transparent 70%),
          radial-gradient(circle at 50% 100%, oklch(16.489% 0.03526 281.831 / 0.5) 0%, transparent 80%)
      `,
        }}
      />
      <div className="absolute inset-y-10 flex flex-col items-start justify-start w-full px-8 z-10">
        <img src={Logo} alt="" className="w-12 h-12" />
      </div>
      <div className="flex flex-col items-start justify-end w-full min-h-screen px-8 py-6">
        <div className="children w-full z-10">
          <div className="title mb-12 flex flex-col items-start gap-1.5">
            <div className="flex justify-center">
              <span className="text-4xl font-extrabold text-accent">Cora</span>
              <img src={Logo} alt="Logo" className="w-5 h-5" />
            </div>
            <TextLoop className="text-lg text-accent font-bold">
              <span>Analyze my skin</span>
              <span>Recommend skincare routine</span>
              <span>Track my skin progress</span>
              <span>Suggest the right product</span>
            </TextLoop>

            {/* <h1 className="text-2xl text-accent font-bold">
                    <span>Analyze my skin Lorem ipsum dolor sit. Lorem, ipsum.</span>
                  </h1> */}
          </div>
          {children}
          <footer className="w-full mt-8">
            <div className="w-full mx-auto text-center leading-relaxed text-muted text-[0.5rem] font-thin tracking-wide">
              <p className="mb-1">
                By continuing, you agree to our{" "}
                <span className="underline underline-offset-2 font-medium">
                  Terms
                </span>{" "}
                and{" "}
                <span className="underline underline-offset-2 font-medium">
                  Privacy Policy
                </span>
                .
              </p>
              <p className="mb-1">
                Powered by AI technology — designed to understand your skin.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default WelcomeLayout;
