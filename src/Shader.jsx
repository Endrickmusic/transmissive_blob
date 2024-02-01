import { OrbitControls, shaderMaterial } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef, useMemo } from "react"

import vertexShader from "./shader/vertexShader.js"
import fragmentShader from "./shader/fragmentShader.js"
import { DoubleSide, Color } from "three"

export default function Experience(){

const mesh = useRef()

const uniforms = useMemo(
  () => ({
    uTime: { value:0.0 }
  }), []
)

useFrame((state, delta) => {
  mesh.current.material.uniforms.uTime.value += delta / 100
})

  return (
    <>
      <OrbitControls />    
      <mesh
        ref={mesh}
      >   
        <planeGeometry args={[1, 1, 128, 128]}/>
          <shaderMaterial 
            vertexShader = { vertexShader }
            fragmentShader = { fragmentShader }
            uniforms = { uniforms }
            side = { DoubleSide }
          />
          </mesh>
   </>
  )}