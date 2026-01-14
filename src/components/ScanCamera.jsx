import { useEffect, useRef, useState } from "react";
import CameraRotateIcon from "@/assets/camera-rotate.svg";
import BackIcon from "@/assets/caret-left.svg";
import { TextShimmerWave } from "@/components/motion-primitives/text-shimmer-wave";

export default function ScanCamera() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [image, setImage] = useState(null);
  const [facingMode, setFacingMode] = useState("user");

  // START CAMERA
  useEffect(() => {
    startCamera();

    return () => stopCamera();
  }, [facingMode]);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode,
          width: { ideal: 720 },
          height: { ideal: 720 },
        },
      });

      videoRef.current.srcObject = mediaStream;
      setStream(mediaStream);
    } catch (err) {
      alert("Camera access denied or not available");
    }
  };

  const stopCamera = () => {
    stream?.getTracks().forEach((track) => track.stop());
  };

  // CAPTURE IMAGE
  const capture = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0);

    const base64 = canvas.toDataURL("image/jpeg", 0.9);
    setImage(base64);
  };

  return (
    <div
      className={`w-full max-w-sm h-screen transition-all duration-500 ease-in-out ${
        image && "pt-16"
      }`}
    >
      <div
        className={`relative w-full h-full overflow-hidden bg-black transition-all duration-500 ease-in-out ${
          image && "rounded-4xl"
        }`}
      >
        {image ? (
          <img
            src={image}
            alt="Skin Capture"
            className="w-full h-full object-cover scale-x-[-1]"
          />
        ) : (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="w-full h-full object-cover scale-x-[-1]"
          />
        )}

        <div className="absolute inset-0 flex items-end justify-center pb-4 px-3 ">
          <div className="flex justify-between items-center w-full bg-gray-200/10 rounded-full px-7 py-3 backdrop-blur-xl">
            <button
              onClick={() =>
                setFacingMode((p) => (p === "user" ? "environment" : "user"))
              }
            >
              <img src={BackIcon} width={40} alt="" />
            </button>
            <div className="p-1 border-2 border-[#e8eaf6] rounded-full">
              <button
                onClick={capture}
                className="bg-[#e8eaf6]  p-5 rounded-full"
              ></button>
            </div>
            <button
              onClick={() =>
                setFacingMode((p) => (p === "user" ? "environment" : "user"))
              }
              className=""
            >
              <img src={CameraRotateIcon} width={35} alt="" />
            </button>
          </div>
        </div>
      </div>
      {image && (
        <div className="absolute inset-0 top-5 flex items-start justify-center text-xl font-bold text-gray-900/70">
          <TextShimmerWave
            className="transition-all duration-[3000ms] ease-in-out"
            duration={1}
            spread={1}
            zDistance={1}
            scaleDistance={1.1}
            rotateYDistance={20}
          >
            Analyzing...
          </TextShimmerWave>
        </div>
      )}

      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
}

// SEND TO BACKEND AI
async function sendToAI(base64) {
  await fetch("/api/skin-analyze", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ image: base64 }),
  });
}
