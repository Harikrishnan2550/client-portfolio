"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { usePdfTextures } from "./usePdfTextures";
import * as THREE from "three";

function PageMesh({
  texture,
  position,
}: {
  texture: THREE.Texture;
  position: [number, number, number];
}) {
  return (
    <mesh position={position}>
      <boxGeometry args={[5, 7, 0.03]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export default function ThreePdfBook() {
  const textures = usePdfTextures("/sample-booklet.pdf");

  return (
    <div className="w-[350px] md:w-[600px] h-[500px] md:h-[800px]">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />

        {textures.map((texture, i) => (
          <PageMesh
            key={i}
            texture={texture}
            position={[0, 0, -i * 0.04]} // stacked pages depth
          />
        ))}

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
