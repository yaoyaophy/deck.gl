import {
  ScenegraphLayer, SimpleMeshLayer
} from '@deck.gl/mesh-layers';
import {registerLoaders} from '@loaders.gl/core';
import {GLTFLoader} from '@loaders.gl/gltf';
import {OBJLoader} from '@loaders.gl/obj';

import makeLayerDemo from './layer-demo';
import {DATA_URI} from '../constants/defaults';

registerLoaders([GLTFLoader, OBJLoader]);

export const ScenegraphLayerDemo = makeLayerDemo({
  Layer: ScenegraphLayer,
  dependencies: ['https://unpkg.com/@loaders.gl/gltf@latest/dist/dist.min.js'],
  loaders: ['GLTFLoader'],
  getTooltip: '({object}) => object && `${object.name}\n${object.address}`',
  props: `{
    data: '${DATA_URI}/bart-stations.json',
    pickable: true,
    scenegraph: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/BoxAnimated/glTF-Binary/BoxAnimated.glb',
    getPosition: d => d.coordinates,
    getOrientation: d => [0, Math.random() * 180, 90],
    _animations: {
      '*': {speed: 5}
    },
    sizeScale: 500,
    _lighting: 'pbr'
  }`
});

export const SimpleMeshLayerDemo = makeLayerDemo({
  Layer: SimpleMeshLayer,
  dependencies: ['https://unpkg.com/@loaders.gl/obj@latest/dist/dist.min.js'],
  loaders: ['OBJLoader'],
  getTooltip: '({object}) => object && `${object.name}\n${object.address}`',
  props: `{
    data: '${DATA_URI}/bart-stations.json',
    pickable: true,
    mesh: '${DATA_URI}/humanoid_quad.obj',
    getPosition: d => d.coordinates,
    getColor: d => [Math.sqrt(d.exits), 140, 0],
    getOrientation: d => [0, Math.random() * 180, 0],
    sizeScale: 30
  }`
});
