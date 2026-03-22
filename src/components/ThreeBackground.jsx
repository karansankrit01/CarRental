import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float, Stars, Environment } from '@react-three/drei'

const ThreeBackground = () => {
  return (
    <div className='absolute inset-0 w-full h-full overflow-hidden' style={{ zIndex: -1 }}>
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }} className='w-full h-full'>
        <Environment preset="city" />
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 20, 10]} intensity={2} color="#ffffff" />
        
        {/* Floating abstract torus knot */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <mesh>
            <torusKnotGeometry args={[5, 1, 200, 32, 2, 3]} />
            <meshPhysicalMaterial 
              color="#e2e8f0" 
              metalness={0.7} 
              roughness={0.1} 
              clearcoat={1}
              clearcoatRoughness={0.1} 
              envMapIntensity={2}
            />
          </mesh>
        </Float>
        
        {/* Add subtle moving particles in the background */}
        <Stars radius={100} depth={50} count={3000} factor={3} saturation={0} fade speed={1} />
        
        <OrbitControls autoRotate autoRotateSpeed={1.0} enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  )
}

export default ThreeBackground
