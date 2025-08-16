// FILE: hooks/use3D.ts

import { useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Mesh } from 'three';

/
 * Custom hook to manage 3D interactions for luxury LRP cosmetics.
 * This hook is responsible for setting up 3D models and animations using three.js.
 * 
 * @returns JSX.Element - A React component containing the 3D canvas with luxury cosmetics models.
 */
export function use3D() {
  // Load 3D model for luxury LRP cosmetics product
  const { nodes, materials } = useGLTF('/models/luxuryLRPProduct.glb');

  const LuxuryModel = () => {
    const ref = useMemo<Mesh>(() => new Mesh(), []);
    
    // Rotate the model continuously for an elegant effect
    useFrame(() => {
      if (ref.current) {
        ref.current.rotation.y += 0.01;
      }
    });

    return (
      <mesh ref={ref} geometry={nodes.product.geometry} material={materials.product}>
        <primitive object={nodes.product} attach="geometry" />
      </mesh>
    );
  };

  return (
    <Canvas
      style={{ width: '100%', height: '100vh', background: 'white' }}
      camera={{ position: [0, 0, 3], fov: 45 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 5, 5]} intensity={1} />
      <LuxuryModel />
      <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
    </Canvas>
  );
}
