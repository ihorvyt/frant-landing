import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
// @ts-ignore
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
// @ts-ignore
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect.js';

import './glob3d.scss'

const STLModel = ({ modelName }: { modelName: String }) => {
    const mountRef = useRef(null);

    useEffect(() => {
        //LightMode
        let lightMode = true;

        // Creates empty mesh container
        const myMesh = new THREE.Mesh();

        // Scene
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0, 0, 0);

        // Lights
        const pointLight1 = new THREE.PointLight(0xffffff, 1);
        pointLight1.position.set(1, 1, 4);
        scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0xffffff, .5);
        pointLight2.position.set(-1, 1, -4);
        scene.add(pointLight2);

        // Material
        const material = new THREE.MeshStandardMaterial();
        material.flatShading = true;
        material.side = THREE.DoubleSide;

        // Sizes
        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        };

        // Camera
        const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 2000);

        // Renderer
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(sizes.width, sizes.height);

        let characters = ' .:-=+*#%@';
        const effectSize = { amount: 0.205 };
        let backgroundColor = 'black';
        let ASCIIColor = 'white';

        // Initialize ASCII effect
        let effect = new AsciiEffect(renderer, ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\n', { invert: true, resolution: effectSize.amount });
        effect.setSize(sizes.width, sizes.height);
        effect.domElement.style.color = ASCIIColor;
        effect.domElement.style.backgroundColor = backgroundColor;

        // @ts-ignore
        mountRef.current.appendChild(effect.domElement);

        // Load STL model
        const loader = new STLLoader();

        // @ts-ignore
        loader.load(`/frant-landing/models/${modelName}.stl`, (geometry) => {
            myMesh.material = material;
            myMesh.geometry = geometry;

            const tempGeometry = new THREE.Mesh(geometry, material);
            myMesh.position.copy(tempGeometry.position);

            geometry.computeVertexNormals();
            myMesh.geometry.center();

            myMesh.geometry.computeBoundingBox();
            const bbox = myMesh.geometry.boundingBox;

            // @ts-ignore
            myMesh.position.y = (bbox.max.z - bbox.min.z) / 5;

            // @ts-ignore
            camera.position.x = bbox.max.x * 4;
            // @ts-ignore
            camera.position.y = bbox.max.y;
            // @ts-ignore
            camera.position.z = bbox.max.z * 3;

            scene.add(myMesh);
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

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            effect.setSize(window.innerWidth, window.innerHeight);
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
