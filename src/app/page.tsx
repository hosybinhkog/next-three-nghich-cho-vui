import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const View = dynamic(
  // @ts-ignore

  () => import('../components/View').then((mod) => mod.default),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-96 w-full flex-col items-center justify-center">
        <svg
          className="-ml-1 mr-3 h-5 w-5 animate-spin text-black"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>
    ),
  }
);

import { Common } from '../components/View';
import { Logo, Dog, Duck } from '../components/Threejs/Example';
export default function Home() {
  return (
    <main>
      <div className="mx-auto flex w-full flex-col flex-wrap items-center md:flex-row  lg:w-4/5">
        <div className="flex w-full flex-col items-start justify-center p-12 text-center md:w-2/5 md:text-left">
          <p className="w-full uppercase">Next 13 + React Three Fiber</p>
          <h1 className="my-4 text-5xl font-bold leading-tight">
            Next 3D HoBinh Start
          </h1>
          <p className="mb-8 text-2xl leading-normal">
            Oh test github starter for React Next, React-three-fiber and
            Threejs.
          </p>
        </div>
        <div className="w-full text-center md:w-3/5 object-cover">
          {/* @ts-ignore */}
          <View className="flex h-96 w-full flex-col items-center justify-center">
            <Suspense fallback={null}>
              {/* @ts-ignore */}
              <Logo scale={0.6} position={[0, 0, 0]} />
              <Common />
            </Suspense>
          </View>
        </div>
      </div>
      <div className="mx-auto flex w-full flex-col flex-wrap items-center md:flex-row  lg:w-4/5 mt-10">
        <div className="w-full text-center md:w-1/2 object-cover">
          {/* @ts-ignore */}
          <View
            orbit
            className="flex animate-bounce relative h-96 w-full flex-col items-center justify-center"
          >
            <Suspense fallback={null}>
              {/* @ts-ignore */}
              <Duck route="/blob" scale={2} position={[0, -1.6, 0]} />
              <Common />
            </Suspense>
          </View>
        </div>
        <div className="w-full text-center md:w-1/2 object-cover">
          {/* @ts-ignore */}
          <View
            orbit
            className="flex h-96 w-full flex-col items-center justify-center"
          >
            <Suspense fallback={null}>
              {/* @ts-ignore */}
              <Dog
                scale={2}
                position={[0, -1.6, 0]}
                rotation={[0.0, -0.3, 0]}
              />
              <Common color={'lightpink'} />
            </Suspense>
          </View>
        </div>
      </div>
    </main>
  );
}
