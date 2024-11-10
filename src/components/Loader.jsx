import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="flex flex-col items-center justify-center absolute">
        {/* Rotating Circle Loader */}
      
        <div className="w-16 h-16 border-t-4 border-b-4 border-transparent border-t-purple-500 border-b-pink-500 rounded-full animate-spin"></div>
        <p className="text-sm text-white font-semibold ">
          Loading... {Math.round(progress)}%
        </p>
      </div>
    </Html>
  );
};

export default Loader;
