import styles from './Banana3D.module.css';
import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";


const Model = React.lazy(() => import('./Model'));


export const Banana3D = (): JSX.Element => {
	return (
		<div id='wrapper' className={styles.bananaWrapper}>
			<Canvas
				camera={{ position: [10, 100, -100], fov: 5 }}
			>
				<ambientLight intensity={0.1} />
				<directionalLight intensity={0.4} />
				<Suspense fallback={null}>
					<Model position={[2, 1, 1]} />
				</Suspense>
			</Canvas>
		</div>
	);
};