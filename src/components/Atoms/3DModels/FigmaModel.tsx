/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 --types ./src/assets/3dModels/figma.glb --transform -s
*/

import { useGLTF } from '@react-three/drei'
import React from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import CanvasHOC from '../../Molecules/CanvasHOC/CanvasHOC'

type GLTFResult = GLTF & {
    nodes: {
        figma: THREE.Mesh
        cyclinder1: THREE.Mesh
        cyclinder2: THREE.Mesh
        cyclinder3: THREE.Mesh
        droplet: THREE.Mesh
    }
    materials: {}
}

const darkRedMaterial = new THREE.MeshPhysicalMaterial({
    color: '#f24d1d',
    roughness: 1,
    clearcoat: 1,
})
const lightRedMaterial = new THREE.MeshPhysicalMaterial({
    color: '#ff7262',
    roughness: 1,
    clearcoat: 1,
})
const purpleMaterial = new THREE.MeshPhysicalMaterial({
    color: '#a259ff',
    roughness: 1,
    clearcoat: 1,
})
const blueMaterial = new THREE.MeshPhysicalMaterial({
    color: '#1dbbfe',
    roughness: 1,
    clearcoat: 1,
})
const greenMaterial = new THREE.MeshPhysicalMaterial({
    color: '#11cf82',
    roughness: 1,
    clearcoat: 1,
})

function FigmaModel(props: JSX.IntrinsicElements['group']) {
    const { nodes, materials } = useGLTF(
        '/figma-transformed.glb'
    ) as unknown as GLTFResult
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.cyclinder3.geometry}
                material={purpleMaterial}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.droplet.geometry}
                material={greenMaterial}
                position={[0.1, -1.9, 0]}
                rotation={[0, 0, -0.79]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.figma.geometry}
                material={blueMaterial}
                position={[2, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.cyclinder1.geometry}
                material={darkRedMaterial}
                position={[1, 2, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.cyclinder2.geometry}
                material={lightRedMaterial}
                position={[1, 2, 0]}
            />
        </group>
    )
}

useGLTF.preload('/figma-transformed.glb')

export default CanvasHOC(FigmaModel, 'Figma', {
    rotation: [0, Math.PI / 8, 0],
    polar: [0, Math.PI / 8],
    azimuth: [-Math.PI / 6, Math.PI / 6],
})
