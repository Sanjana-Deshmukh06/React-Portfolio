import React, { Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
import cmpimg from '/src/assets/arrow.png';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');

   // State to control bounce animation
   const [bounce, setBounce] = useState(0);

   // Use useFrame to update the bounce animation
   useFrame((state, delta) => {
     setBounce((prev) => prev + delta * 2); // Control the speed of bounce
   });
 
   // Calculate the Y position for bounce effect using sine function
   const bounceY = 0.1 * Math.sin(bounce); // Adjust the amplitude with 0.1
 

  return (
    <mesh position={[0, bounceY, 0]}>
      <hemisphereLight intensity={isMobile ? 0 : 7} groundColor="black" />
      <pointLight intensity={isMobile ? 0 : 6} position={isMobile ? [0, -4, 0] : [0, -0.5, 0]} />
      <spotLight
        position={[-10, 30, 10]}
        angle={0.3}
        penumbra={1}
        intensity={isMobile ? 0 : 1.5}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.69 : 0.9}
        position={isMobile ? [0.8, -6.5, -1] : [0.5, -3.90, -1.5]}
        rotation={[-0.01, -0.57, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  // If on mobile, return an image instead of the 3D canvas
  if (isMobile) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <img
          src={cmpimg} // Replace this with the path to your static image
          alt="Computer Model"
          className="w-full h-auto max-w-[150px] absolute bottom-16 animate-arrowAnimation" // Ensure the image is responsive
        />
      </div>
    );
  }

  return (
    <Canvas
      frameLoop="demand"
      shadows
      camera={{
        position: isMobile ? [15, 5, 10] : [20, 3, 5],
        fov: isMobile ? 50 : 30,
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
