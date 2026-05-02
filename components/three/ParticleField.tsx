"use client";

import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Particles = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const scrollRef = useRef(0);

  // Memoize particle positions
  const { positions, colors } = useMemo(() => {
    const count = 1000;
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    
    // Primary: #A0B4D0 (160, 180, 208)
    // Secondary: #E8EDF5 (232, 237, 245)
    const colorPrimary = new THREE.Color('#A0B4D0');
    const colorSecondary = new THREE.Color('#E8EDF5');

    for (let i = 0; i < count; i++) {
      // 40x40x10 space
      pos[i * 3] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;

      const mixedColor = Math.random() > 0.8 ? colorSecondary : colorPrimary;
      cols[i * 3] = mixedColor.r;
      cols[i * 3 + 1] = mixedColor.g;
      cols[i * 3 + 2] = mixedColor.b;
    }
    return { positions: pos, colors: cols };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    
    // Base rotation + scroll influence
    const scrollFactor = scrollRef.current * 0.0005;
    pointsRef.current.rotation.y += delta * (0.05 + scrollFactor);
    pointsRef.current.rotation.x += delta * 0.02;

    // Drifting upward
    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 1] += delta * 0.5;
      if (positions[i + 1] > 20) positions[i + 1] = -20;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation={true}
      />
    </points>
  );
};

const ParticleField = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none -z-10">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        onCreated={({ gl }) => {
          gl.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        }}
      >
        <ambientLight intensity={0.5} />
        <Particles />
      </Canvas>
    </div>
  );
};

export default ParticleField;
