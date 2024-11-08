import { Html, useProgress } from '@react-three/drei';
import { RingLoader } from 'react-spinners'; // Importing a spinner loader component

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      {/* Spinner Loader */}
      <RingLoader
        color="#915eff"
        size={90} // Adjust the size as per your preference
        loading={true}
      />
      <p
        style={{
          fontSize: 14,
          color: "#f1f1f1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        Loading...
      </p>
    </Html>
  );
};

export default Loader;
