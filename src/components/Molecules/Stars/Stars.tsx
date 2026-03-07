'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useTheme } from '../../../context/ThemeContext'

const STAR_COUNT = 150
const CAMERA_Z = 200

type Particle = {
    time: number
    x: number
    y: number
    z: number
    speed: number
}

type StarEngine = {
    material: THREE.MeshBasicMaterial
    pointLight: THREE.PointLight
}

const Stars = () => {
    const { darkMode } = useTheme()
    const mountRef = useRef<HTMLDivElement | null>(null)
    const engineRef = useRef<StarEngine | null>(null)

    useEffect(() => {
        if (!mountRef.current) {
            return
        }

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        )
        camera.position.set(0, 0, CAMERA_Z)

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
        })
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        mountRef.current.appendChild(renderer.domElement)

        const color = darkMode ? '#ffffff' : '#000000'
        const particles: Particle[] = Array.from(
            { length: STAR_COUNT },
            () => ({
                time: Math.random() * 100,
                x: Math.random() * 200 - 100,
                y: Math.random() * 200 - 100,
                z: Math.random() * 200 - 100,
                speed: (Math.random() * (1 - 0.01) + 0.01) / 3,
            })
        )

        const geometry = new THREE.DodecahedronGeometry(0.12, 0)
        const material = new THREE.MeshBasicMaterial({
            color,
        })
        const stars = new THREE.InstancedMesh(geometry, material, STAR_COUNT)
        const dummy = new THREE.Object3D()

        const pointLight = new THREE.PointLight(color, 50, 100)
        pointLight.position.set(0, 0, CAMERA_Z + 10)
        scene.add(stars)
        scene.add(pointLight)
        engineRef.current = { material, pointLight }

        const onContextLost = (event: Event) => {
            event.preventDefault()
        }

        const onVisibilityChange = () => {
            if (document.visibilityState === 'visible') {
                renderer.setAnimationLoop(animate)
            } else {
                renderer.setAnimationLoop(null)
            }
        }

        const animate = () => {
            const scrollTop =
                window.scrollY ||
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0
            const scrollOffset = scrollTop * 0.08

            stars.rotation.z = scrollTop * 0.0002
            stars.rotation.x = scrollTop * 0.00006

            particles.forEach((particle, index) => {
                particle.time += particle.speed * 0.25
                dummy.position.set(
                    particle.x,
                    particle.y,
                    particle.z + ((particle.time + scrollOffset) % 100)
                )
                dummy.updateMatrix()
                stars.setMatrixAt(index, dummy.matrix)
            })

            stars.instanceMatrix.needsUpdate = true
            renderer.render(scene, camera)
        }

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        }

        window.addEventListener('resize', handleResize)
        renderer.domElement.addEventListener(
            'webglcontextlost',
            onContextLost,
            false
        )
        document.addEventListener('visibilitychange', onVisibilityChange)
        renderer.setAnimationLoop(animate)

        return () => {
            renderer.setAnimationLoop(null)
            window.removeEventListener('resize', handleResize)
            renderer.domElement.removeEventListener(
                'webglcontextlost',
                onContextLost
            )
            document.removeEventListener('visibilitychange', onVisibilityChange)
            geometry.dispose()
            material.dispose()
            renderer.dispose()
            scene.clear()

            if (
                mountRef.current &&
                mountRef.current.contains(renderer.domElement)
            ) {
                mountRef.current.removeChild(renderer.domElement)
            }
            engineRef.current = null
        }
    }, [])

    useEffect(() => {
        const engine = engineRef.current
        if (!engine) {
            return
        }

        const color = darkMode ? '#ffffff' : '#000000'
        engine.material.color.set(color)
        engine.pointLight.color.set(color)
    }, [darkMode])

    return (
        <div
            ref={mountRef}
            style={{
                width: '100vw',
                height: '100vh',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 0,
                pointerEvents: 'none',
                background: 'transparent',
            }}
            aria-hidden
        />
    )
}

export default Stars
