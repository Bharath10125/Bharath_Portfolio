import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, Stars } from '@react-three/drei';

// Individual Skill Sphere Component
function SkillSphere({ skill, position, index }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Floating animation
      const baseY = position[1];
      meshRef.current.position.y = baseY + Math.sin(state.clock.elapsedTime * 0.5 + index * 0.5) * 0.2;
      
      // Gentle rotation
      meshRef.current.rotation.y += 0.005;

      // Scale on hover
      const targetScale = hovered ? 1.4 : 1;
      meshRef.current.scale.x += (targetScale - meshRef.current.scale.x) * 0.1;
      meshRef.current.scale.y += (targetScale - meshRef.current.scale.y) * 0.1;
      meshRef.current.scale.z += (targetScale - meshRef.current.scale.z) * 0.1;
    }
  });

  // Color based on proficiency level
  const getLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case 'proficient': return '#4caf50';
      case 'intermediate': return '#2196f3';
      case 'beginner': return '#ff9800';
      default: return '#ffffff';
    }
  };

  const color = getLevelColor(skill.level);

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setHovered(false);
          document.body.style.cursor = 'auto';
        }}
      >
        <sphereGeometry args={[0.4, 24, 24]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.6 : 0.3}
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>

      {/* Skill Icon Billboard */}
      <Html
        position={[0, 0, 0]}
        center
        distanceFactor={8}
        style={{
          pointerEvents: 'none',
          userSelect: 'none',
          transition: 'all 0.3s ease',
          transform: hovered ? 'scale(1.3)' : 'scale(1)'
        }}
      >
        <div style={{
          background: 'rgba(10, 10, 10, 0.95)',
          borderRadius: '50%',
          padding: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: `2px solid ${color}`,
          boxShadow: `0 0 ${hovered ? '20px' : '10px'} ${color}`,
          width: '50px',
          height: '50px'
        }}>
          <img 
            src={skill.icon} 
            alt={skill.name}
            style={{ 
              width: '35px', 
              height: '35px',
              objectFit: 'contain',
              filter: 'brightness(1.2)'
            }}
          />
        </div>
      </Html>

      {/* Skill Name on Hover */}
      {hovered && (
        <Html position={[0, 0.8, 0]} center distanceFactor={6}>
          <div style={{
            background: 'rgba(0, 0, 0, 0.95)',
            color: 'white',
            padding: '10px 16px',
            borderRadius: '10px',
            fontSize: '13px',
            fontWeight: '600',
            whiteSpace: 'nowrap',
            border: `2px solid ${color}`,
            backdropFilter: 'blur(10px)',
            fontFamily: 'Poppins, sans-serif',
            boxShadow: `0 0 20px ${color}`,
            animation: 'fadeIn 0.3s ease'
          }}>
            {skill.name}
            <div style={{
              fontSize: '10px',
              color: color,
              marginTop: '4px',
              textAlign: 'center',
              fontWeight: '500'
            }}>
              {skill.level}
            </div>
          </div>
        </Html>
      )}
    </group>
  );
}

// Particle Field Background
function ParticleField() {
  const pointsRef = useRef();
  
  const particles = useMemo(() => {
    const count = 1000;
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const radius = 15 + Math.random() * 20;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
    }
    
    return positions;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#444444" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

// Main 3D Scene
function Skills3DScene({ skills }) {
  const groupRef = useRef();

  // Generate positions in a sphere formation using Fibonacci sphere algorithm
  const positions = useMemo(() => {
    const pos = [];
    const radius = 7;
    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    const angleIncrement = Math.PI * 2 * goldenRatio;
    
    skills.forEach((_, index) => {
      const t = index / skills.length;
      const inclination = Math.acos(1 - 2 * t);
      const azimuth = angleIncrement * index;
      
      const x = radius * Math.sin(inclination) * Math.cos(azimuth);
      const y = radius * Math.sin(inclination) * Math.sin(azimuth);
      const z = radius * Math.cos(inclination);
      
      pos.push([x, y, z]);
    });
    
    return pos;
  }, [skills]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4caf50" />
      <pointLight position={[0, 10, 0]} intensity={0.5} color="#2196f3" />

      {/* Stars Background */}
      <Stars radius={50} depth={50} count={2000} factor={3} saturation={0} fade speed={0.5} />

      {/* Particle Field */}
      <ParticleField />

      {/* Skill Spheres */}
      <group ref={groupRef}>
        {skills.map((skill, index) => (
          <SkillSphere
            key={skill.name}
            skill={skill}
            position={positions[index]}
            index={index}
          />
        ))}
      </group>

      {/* Camera Controls */}
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        enableDamping={true}
        dampingFactor={0.05}
        minDistance={8}
        maxDistance={25}
        autoRotate={false}
        rotateSpeed={0.5}
      />
    </>
  );
}

// Main Export Component
export default function Skills3D({ skills }) {
  if (!skills || skills.length === 0) {
    return (
      <div style={{
        width: '100%',
        height: '70vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#999',
        fontSize: '1.2rem',
        fontFamily: 'Poppins, sans-serif'
      }}>
        No skills to display
      </div>
    );
  }

  return (
    <div style={{ width: '100%', height: '75vh', position: 'relative', background: '#000' }}>
      <Canvas
        camera={{ position: [0, 0, 14], fov: 60 }}
        gl={{ antialias: true, alpha: false }}
        dpr={[1, 2]}
        style={{ background: '#000' }}
      >
        <color attach="background" args={['#000000']} />
        <fog attach="fog" args={['#000000', 10, 50]} />
        <Skills3DScene skills={skills} />
      </Canvas>
      
      {/* Instructions */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'rgba(0, 0, 0, 0.9)',
        color: 'white',
        padding: '14px 28px',
        borderRadius: '30px',
        fontSize: '13px',
        fontFamily: 'Poppins, sans-serif',
        backdropFilter: 'blur(10px)',
        border: '1px solid #333',
        display: 'flex',
        gap: '25px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        boxShadow: '0 5px 30px rgba(0,0,0,0.5)',
        zIndex: 10
      }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          🖱️ <strong>Drag</strong> to Rotate
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          🔍 <strong>Scroll</strong> to Zoom
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          👆 <strong>Hover</strong> Skills
        </span>
      </div>

      {/* Legend */}
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        background: 'rgba(0, 0, 0, 0.9)',
        color: 'white',
        padding: '15px 20px',
        borderRadius: '12px',
        fontSize: '12px',
        fontFamily: 'Poppins, sans-serif',
        backdropFilter: 'blur(10px)',
        border: '1px solid #333',
        zIndex: 10
      }}>
        <div style={{ fontWeight: '700', marginBottom: '10px', fontSize: '13px' }}>Skill Levels</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#4caf50', boxShadow: '0 0 10px #4caf50' }}></div>
            <span>Proficient</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#2196f3', boxShadow: '0 0 10px #2196f3' }}></div>
            <span>Intermediate</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff9800', boxShadow: '0 0 10px #ff9800' }}></div>
            <span>Beginner</span>
          </div>
        </div>
      </div>
    </div>
  );
}
