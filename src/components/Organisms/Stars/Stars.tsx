import { PerspectiveCamera } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useMemo, useRef, useTransition } from 'react'
import * as THREE from 'three'
import { InstancedMesh, PointLight, Vector3 } from 'three'
import { useTheme } from '../../../context/ThemeContext'

const cameraPosVector = new Vector3(0, 0, 200)

function Random(min: number, max: number) {
    return Math.random() * (max - min) + min
}

const Star = () => {
    const [, startTransition] = useTransition()
    const { darkMode } = useTheme()
    const color = darkMode === true ? 'white' : 'black'

    const light = useRef<PointLight>(null)
    const mesh = useRef<InstancedMesh>(null)
    const count = 100

    const particles = useMemo(() => {
        const temp = []
        for (let i = 0; i < count; i++) {
            const time = Random(0, 100)
            const x = Random(-100, 100)
            const y = Random(-100, 100)
            const z = Random(-100, 100)
            const speed = Random(0.01, 1) / 3

            temp.push({ time, x, y, z, speed })
        }
        return temp
    }, [count])

    const dummy = useMemo(() => new THREE.Object3D(), [])

    useFrame(() => {
        startTransition(() => {
            particles.forEach((particle, index) => {
                const { x, y, z, speed } = particle
                particle.time += speed
                const t = particle.time
                dummy.position.set(x, y, z + (t % 100))
                dummy.updateMatrix()
                mesh.current?.setMatrixAt(index, dummy.matrix)
            })
            if (mesh.current) mesh.current.instanceMatrix.needsUpdate = true
        })
    })

    return (
        <>
            <pointLight
                ref={light}
                distance={100}
                intensity={50}
                color={`${color}`}
                position={[
                    cameraPosVector.x,
                    cameraPosVector.y,
                    cameraPosVector.z + 10,
                ]}
            />
            <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
                <sphereGeometry args={[0.12]} />
                <dodecahedronGeometry args={[0.12, 0]} />
                <meshBasicMaterial color={`${color}`} />
            </instancedMesh>
        </>
    )
}
export const Stars = () => {
    return (
        <Canvas
            style={{
                height: '100vH',
                position: 'fixed',
                top: '0',
                left: '0',
                background: 'var(--background)',
            }}
            flat
            shadows={false}
        >
            <>
                <PerspectiveCamera makeDefault position={cameraPosVector} />
                <Star />
            </>
        </Canvas>
    )
}

export default Stars
