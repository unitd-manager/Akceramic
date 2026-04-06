import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

function Earth() {
  const ref = useRef();

  // 🌍 Load texture
  const texture = useLoader(THREE.TextureLoader, "/src/assets/earth.jpg");

  // rotation
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.0015;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        map={texture}
        metalness={0.2}
        roughness={0.7}
      />
    </mesh>
  );
}

// ☁️ Clouds layer (extra realism)
function Clouds() {
  const ref = useRef();
  const texture = useLoader(
    THREE.TextureLoader,
    "https://threejs.org/examples/textures/planets/earth_clouds_1024.png"
  );

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.0018;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.02, 64, 64]} />
      <meshStandardMaterial
        map={texture}
        transparent
        opacity={0.4}
      />
    </mesh>
  );
}

export default function Globe() {
  return (
    <div style={{ height: "500px", width: "100%" }}>
      <Canvas camera={{ position: [0, 0, 3] }} style={{ background: "#000" }}>

        {/* 🌌 Stars */}
        <Stars radius={100} depth={50} count={5000} factor={4} fade />

        {/* 💡 Lights */}
       <ambientLight intensity={0.9} />
<directionalLight position={[5, 5, 5]} intensity={3} />
<pointLight position={[0, 0, 3]} intensity={2} />

        {/* 🌍 Earth */}
        <Earth />
        <Clouds />

        <OrbitControls autoRotate autoRotateSpeed={0.6} enableZoom={false} />
      </Canvas>
    </div>
  );
}