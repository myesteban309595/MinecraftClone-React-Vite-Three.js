import {
 grassImg,
 dirtImg,
 logImg,
 glassImg,
 woodImg
} from './images.js'

import { NearestFilter, RepeatWrapping, TextureLoader } from 'three'


const grassTexture = new TextureLoader().load(grassImg)
const glassTexture = new TextureLoader().load(glassImg)
const dirtTexture = new TextureLoader().load(dirtImg)
const logTexture = new TextureLoader().load(logImg)
const woodTexture = new TextureLoader().load(woodImg)

const groundTexture = new TextureLoader().load(grassImg)

// definimos el mapeo tanto horizontal ocomo vertical y que se tiene que repetir

groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping
groundTexture.magFilter = NearestFilter // mejora la textura
grassTexture.magFilter = NearestFilter // mejora la textura
glassTexture.magFilter = NearestFilter // mejora la textura
dirtTexture.magFilter = NearestFilter // mejora la textura
logTexture.magFilter = NearestFilter // mejora la textura
woodTexture.magFilter = NearestFilter // mejora la textura

export {
    groundTexture,
    grassTexture,
    glassTexture,
    dirtTexture,
    logTexture,
    woodTexture
}