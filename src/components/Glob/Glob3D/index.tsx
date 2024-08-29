import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
// @ts-ignore
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
// @ts-ignore
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect.js';

import './glob3d.scss'

const STLModel = ({modelName}: {modelName: String}) => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Sizes
        const sizes = {
            width: window.innerWidth / 2.8,
            height: window.innerHeight / 2.8
        };

        // Initialize the scene, camera, and renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(sizes.width, sizes.height);


        //Lights
        const pointLight1 = new THREE.PointLight(0xffffff, 1);
        pointLight1.position.set(5, -5, 5);
        scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0xffffff, .5);
        pointLight2.position.set(5, 5, 5);
        scene.add(pointLight2);


        // Initialize ASCII effect
        const effect = new AsciiEffect(renderer, ' =*#%@%#*+-@', { invert: true, resolution: 0.205 });
        effect.setSize(sizes.width, sizes.height);
        effect.domElement.style.backgroundColor = 'black';

        // @ts-ignore
        mountRef.current.appendChild(effect.domElement);

        // Load STL model
        const loader = new STLLoader();
        // @ts-ignore
        loader.load(`/frant-landing/models/${modelName}.stl`, (geometry) => {
            const material = new THREE.MeshStandardMaterial();
            material.flatShading = true;
            material.side = THREE.DoubleSide;

            const myMesh = new THREE.Mesh(geometry, material);

            geometry.computeVertexNormals();
            myMesh.geometry.center();

            myMesh.rotation.x = -90 * Math.PI / 180;

            myMesh.geometry.computeBoundingBox();
            const bbox = myMesh.geometry.boundingBox;

            myMesh.position.y = (bbox.max.z - bbox.min.z) / 5;

            camera.position.x = bbox.max.x * 4;
            camera.position.y = bbox.max.y;
            camera.position.z = bbox.max.z * 3;

            scene.add(myMesh);

            // Adjust camera position
            camera.position.z = 0.1;
        });

        // Add OrbitControls
        const controls = new OrbitControls(camera, effect.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.enableZoom = true;

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);

            controls.update(); // Required for damping
            effect.render(scene, camera); // Render the scene with ASCII effect
        };
        animate();

        // Handle window resizing
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth / 2.8, window.innerHeight / 2.8);
            effect.setSize(window.innerWidth / 2.8, window.innerHeight / 2.8);
        };

        window.addEventListener('resize', handleResize);

        // Clean up
        return () => {
            window.removeEventListener('resize', handleResize);
            // @ts-ignore
            mountRef.current.removeChild(effect.domElement);
        };
    }, []);

    return <div ref={mountRef} />;
};

export default STLModel;
