'use client';
import {
  PerspectiveCamera,
  View as ViewImpl,
  OrbitControls,
} from '@react-three/drei';
import React, {
  forwardRef,
  Suspense,
  useImperativeHandle,
  useRef,
} from 'react';

import Three from '../../helpers/Three';

interface CommonProps {
  color: string;
}

export const Common: React.FC<CommonProps> = ({ color }) => (
  <Suspense fallback={null}>
    {color && <color attach={'background'} args={[color]} />}
    <ambientLight intensity={0.5} />
    <pointLight position={[20, 30, 10]} intensity={1} />
    <pointLight position={[-10, -10, -10]} color="blue" />
    <PerspectiveCamera
      makeDefault
      fov={40}
      position={[0, 0, 6]}
      near={0.01}
      far={5000}
      key={undefined}
      view={undefined}
      quaternion={undefined}
      attach={undefined}
      args={undefined}
      onUpdate={undefined}
      clear={undefined}
      up={undefined}
      scale={undefined}
      rotation={undefined}
      matrix={undefined}
      layers={undefined}
      dispose={undefined}
      raycast={undefined}
      onClick={undefined}
      onContextMenu={undefined}
      onDoubleClick={undefined}
      onPointerUp={undefined}
      onPointerDown={undefined}
      onPointerOver={undefined}
      onPointerOut={undefined}
      onPointerEnter={undefined}
      onPointerLeave={undefined}
      onPointerMove={undefined}
      onPointerMissed={undefined}
      onPointerCancel={undefined}
      onWheel={undefined}
      visible={undefined}
      type={undefined}
      id={undefined}
      uuid={undefined}
      name={undefined}
      parent={undefined}
      modelViewMatrix={undefined}
      normalMatrix={undefined}
      matrixWorld={undefined}
      matrixAutoUpdate={undefined}
      matrixWorldAutoUpdate={undefined}
      matrixWorldNeedsUpdate={undefined}
      castShadow={undefined}
      receiveShadow={undefined}
      frustumCulled={undefined}
      renderOrder={undefined}
      animations={undefined}
      userData={undefined}
      customDepthMaterial={undefined}
      customDistanceMaterial={undefined}
      isObject3D={undefined}
      onBeforeRender={undefined}
      onAfterRender={undefined}
      applyMatrix4={undefined}
      applyQuaternion={undefined}
      setRotationFromAxisAngle={undefined}
      setRotationFromEuler={undefined}
      setRotationFromMatrix={undefined}
      setRotationFromQuaternion={undefined}
      rotateOnAxis={undefined}
      rotateOnWorldAxis={undefined}
      rotateX={undefined}
      rotateY={undefined}
      rotateZ={undefined}
      translateOnAxis={undefined}
      translateX={undefined}
      translateY={undefined}
      translateZ={undefined}
      localToWorld={undefined}
      worldToLocal={undefined}
      lookAt={undefined}
      add={undefined}
      remove={undefined}
      removeFromParent={undefined}
      getObjectById={undefined}
      getObjectByName={undefined}
      getObjectByProperty={undefined}
      getObjectsByProperty={undefined}
      getWorldPosition={undefined}
      getWorldQuaternion={undefined}
      getWorldScale={undefined}
      getWorldDirection={undefined}
      traverse={undefined}
      traverseVisible={undefined}
      traverseAncestors={undefined}
      updateMatrix={undefined}
      updateMatrixWorld={undefined}
      updateWorldMatrix={undefined}
      toJSON={undefined}
      clone={undefined}
      copy={undefined}
      addEventListener={undefined}
      hasEventListener={undefined}
      removeEventListener={undefined}
      dispatchEvent={undefined}
      zoom={undefined}
      matrixWorldInverse={undefined}
      projectionMatrix={undefined}
      projectionMatrixInverse={undefined}
      isCamera={undefined}
      isPerspectiveCamera={undefined}
      aspect={undefined}
      focus={undefined}
      filmGauge={undefined}
      filmOffset={undefined}
      setFocalLength={undefined}
      getFocalLength={undefined}
      getEffectiveFOV={undefined}
      getFilmWidth={undefined}
      getFilmHeight={undefined}
      setViewOffset={undefined}
      clearViewOffset={undefined}
      updateProjectionMatrix={undefined}
      setLens={undefined}
    />
  </Suspense>
);

// @ts-ignore
const View = forwardRef(({ children, orbit, ...props }, ref) => {
  const localRef = useRef<HTMLDivElement>(null);
  useImperativeHandle(ref, () => localRef.current);

  return (
    <>
      <div ref={localRef} {...props} />
      <Three>
        {/* @ts-ignore */}
        <ViewImpl track={localRef}>
          {children}
          {orbit && <OrbitControls />}
        </ViewImpl>
      </Three>
    </>
  );
});
View.displayName = 'View';

export default View;
