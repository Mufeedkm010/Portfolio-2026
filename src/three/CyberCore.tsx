import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import SecurityHUD from "./SecurityHUD";

function SecuritySphere() {
  const sphere = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!sphere.current) return;

    // Continuous slow rotation
    sphere.current.rotation.y += delta * 0.18;

    // Very subtle mouse influence
    const targetX = state.pointer.y * 0.15;
    const targetZ = state.pointer.x * 0.08;

    sphere.current.rotation.x +=
      (targetX - sphere.current.rotation.x) * 0.02;

    sphere.current.rotation.z +=
      (targetZ - sphere.current.rotation.z) * 0.02;
  });

  return (
    <group ref={sphere}>

      {/* OUTER WIREFRAME */}

      <mesh>
        <sphereGeometry args={[1.5, 24, 24]} />

        <meshBasicMaterial
          color="#00ff9c"
          wireframe
          transparent
          opacity={0.42}
        />
      </mesh>

      {/* SECONDARY WIREFRAME */}

      <mesh scale={1.08}>
        <sphereGeometry args={[1.5, 12, 12]} />

        <meshBasicMaterial
          color="#00ff9c"
          wireframe
          transparent
          opacity={0.08}
        />
      </mesh>

      {/* INNER CORE */}

      <mesh>
        <sphereGeometry args={[0.62, 24, 24]} />

        <meshBasicMaterial
          color="#00ff9c"
          transparent
          opacity={0.08}
        />
      </mesh>

      {/* CORE RING */}

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry
          args={[0.88, 0.012, 8, 64]}
        />

        <meshBasicMaterial
          color="#00ff9c"
          transparent
          opacity={0.65}
        />
      </mesh>

      {/* SECOND CORE RING */}

      <mesh rotation={[0.6, 0.4, 0]}>
        <torusGeometry
          args={[1.12, 0.008, 8, 64]}
        />

        <meshBasicMaterial
          color="#00ff9c"
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* CENTER CORE */}

      <mesh>
        <sphereGeometry args={[0.16, 16, 16]} />

        <meshBasicMaterial
          color="#00ff9c"
        />
      </mesh>

      {/* NETWORK NODES */}

      <SecurityNodes />

      {/* PARTICLES */}

      <Particles />

    </group>
  );
}

function PulsingNode() {
  const nodeRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!nodeRef.current) return;

    const pulse = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.25;

    nodeRef.current.scale.setScalar(pulse);
  });

  return (
    <mesh ref={nodeRef}>
      <sphereGeometry args={[0.055, 12, 12]} />

      <meshBasicMaterial
        color="#ff3b3b"
      />
    </mesh>
  );
}

function PulsingRing() {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ringRef.current) return;

    const pulse =
      1 + Math.sin(state.clock.elapsedTime * 3) * 0.35;

    ringRef.current.scale.setScalar(pulse);

    const material =
      ringRef.current.material as THREE.MeshBasicMaterial;

    material.opacity =
      0.35 + Math.sin(state.clock.elapsedTime * 3) * 0.25;
  });

  return (
    <mesh ref={ringRef}>
      <ringGeometry args={[0.08, 0.09, 24]} />

      <meshBasicMaterial
        color="#ff3b3b"
        transparent
        opacity={0.6}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function DataFlow({
  end,
}: {
  end: [number, number, number];
}) {
  const particleRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!particleRef.current) return;

    // Continuous movement from core → node
    const progress =
      (state.clock.elapsedTime * 0.35) % 1;

    particleRef.current.position.set(
      end[0] * progress,
      end[1] * progress,
      end[2] * progress
    );
  });

  return (
    <mesh ref={particleRef}>
      <sphereGeometry args={[0.025, 8, 8]} />

      <meshBasicMaterial
        color="#ffffff"
      />
    </mesh>
  );
}

function SecurityNodes() {
  const nodes = useMemo(
    () => [
      {
        position: [-1.45, 0.55, 0] as [number, number, number],
        label: "NETWORK",
      },
      {
        position: [1.45, -0.35, 0] as [number, number, number],
        label: "THREAT",
      },
      {
        position: [-0.7, -1.25, 0.15] as [number, number, number],
        label: "VAPT",
      },
      {
        position: [0.65, 1.25, -0.1] as [number, number, number],
        label: "SYSTEM",
      },
    ],
    []
  );

  return (
    <>
      {/* CONNECTION LINES */}
      {nodes.map((node) => {
        const points = [
          new THREE.Vector3(0, 0, 0),
          new THREE.Vector3(...node.position),
        ];

        const geometry =
          new THREE.BufferGeometry().setFromPoints(points);

        const material = new THREE.LineBasicMaterial({
          color: "#e2e60b",
          transparent: true,
          opacity: 0.8,
          linewidth: 2,

        });

        const line = new THREE.Line(geometry, material);

        return (
          <primitive
            key={`${node.label}-line`}
            object={line}
          />
        );
      })}

      {/* DATA FLOW */}
{nodes.map((node) => (
  <DataFlow
    key={`${node.label}-flow`}
    end={node.position}
  />
))}

      {/* SECURITY NODES */}
      {nodes.map((node) => (
        <group
          key={node.label}
          position={node.position}
        >
          {/* NODE */}
         <PulsingNode />

         <PulsingRing />

          {/* LABEL */}
          <Html
            distanceFactor={6}
            position={[0.12, 0.08, 0]}
            center
          >
            <div className="security-node-label">
              {node.label}
            </div>
          </Html>
        </group>
      ))}
    </>
  );
}

function Particles() {
  const particles = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const array = new Float32Array(220 * 3);

    for (let i = 0; i < 220; i++) {
      array[i * 3] =
        (Math.random() - 0.5) * 5;

      array[i * 3 + 1] =
        (Math.random() - 0.5) * 5;

      array[i * 3 + 2] =
        (Math.random() - 0.5) * 5;
    }

    return array;
  }, []);

  useFrame((_, delta) => {
    if (!particles.current) return;

    particles.current.rotation.y +=
      delta * 0.025;
  });

  return (
    <points ref={particles}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.014}
        color="#00ff9c"
        transparent
        opacity={0.45}
      />
    </points>
  );
}

function CyberCore() {
  return (
    <div className="cyber-core">
      <Canvas
        camera={{
          position: [0, 0, 4.5],
          fov: 45,
        }}
        dpr={[1, 1.5]}
      >
        <SecuritySphere />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping={true}
          dampingFactor={0.08}
          autoRotate={true}
          autoRotateSpeed={0.35}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={(Math.PI * 2) / 3}
        />
      </Canvas>

      <SecurityHUD />
    </div>
  );
}

export default CyberCore;