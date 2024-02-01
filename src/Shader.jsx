import { OrbitControls, shaderMaterial } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef, useMemo } from "react"

import vertexShader from "./shader/vertexShader.js"
import fragmentShader from "./shader/fragmentShader.js"
import { DoubleSide, Color } from "three"
import colors from 'nice-color-palettes'

export default function Experience(){

const mesh = useRef()

let palette = colors[Math.floor(Math.random() * colors.length)]

palette = palette.map((color) => new Color(color))

const uniforms = useMemo(
  () => ({
    uTime: { value:0.0 },
    uColor: { value: palette }
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