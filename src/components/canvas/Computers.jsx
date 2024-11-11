import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={isMobile ? 7 : 7} groundColor="black" />

      <pointLight intensity={isMobile ? 2 : 6}
        position={isMobile ? [0, -4, 0] : [0, -0.5, 0]} />

      <spotLight
        position={[-10, 30, 10]}
        angle={0.3}
        penumbra={1}
        intensity={isMobile ? 0.5 : 1.5}
        castShadow
        shadow-mapSize={1024}
      />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.69 : 0.9}
        position={isMobile ? [0.6, -6.5, -1] : [0, -3.90, -1.5]}
        rotation={[-0.01, -0.57, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    //Add a Listener for changes to the screen size
    const mediaQuery = window.matchMedia(
      '(max-width:500px)');
    //set the initial value of the 'isMobile' state variable
    setIsMobile(mediaQuery.matches);
    //Define a callback fun to handle changes to media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }
    //Add callback fun as a listener for changes 
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    //Remove the listener
    return () => {
      {
        mediaQuery.removeEventListener('change', handleMediaQueryChange)
      }
    }
  }, [])

  return (
    <Canvas
      frameLoop="demand"
      shadows
      camera={{
        position: isMobile ? [15, 5, 10] : [20, 3, 5],
        fov: isMobile ? 50 : 30,
      }}
      gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />} >
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
  )
}

export default ComputersCanvas;
