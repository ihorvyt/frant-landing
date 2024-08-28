import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect.js';

import './glob3d.scss'

const STLModel = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Sizes
        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        };

        // Initialize the scene, camera, and renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(sizes.width, sizes.height);

        // Add lighting
        const ambientLight = new THREE.AmbientLight(0xBCED09);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xBCED09, 1);
        directionalLight.position.set(5, 5, 5).normalize();
        scene.add(directionalLight);

        // Initialize ASCII effect
        const effect = new AsciiEffect(renderer, ' =*#%@%#*+-@', { invert: true, resolution: 0.205 });
        effect.setSize(sizes.width, sizes.height);
        effect.domElement.style.backgroundColor = 'black';

        mountRef.current.appendChild(effect.domElement);

        // Load STL model
        const loader = new STLLoader();
        loader.load('/frant-landing/models/test2.stl', (geometry) => {
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
            camera.position.z = 2;
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
            renderer.setSize(window.innerWidth, window.innerHeight);
            effect.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Clean up
        return () => {
            window.removeEventListener('resize', handleResize);
            mountRef.current.removeChild(effect.domElement);
        };
    }, []);

    return <div ref={mountRef} />;
};

export default STLModel;
