// STLModel.js
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect.js';


const STLModel = () => {
    const mountRef = useRef(null);
    const modelRef = useRef(null);

    useEffect(() => {
        // Sizes
        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        }


        // Initialize the scene, camera, and renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Add lighting
        const ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 5, 5).normalize();
        scene.add(directionalLight);

        const pointLight = new THREE.PointLight(0xffffff, 1, 100);
        pointLight.position.set(10, 10, 10);
        scene.add(pointLight);

        const spotLight = new THREE.SpotLight(0xffffff);
        spotLight.position.set(10, 10, 10);
        spotLight.angle = Math.PI / 6;
        spotLight.penumbra = 0.1;
        spotLight.decay = 2;
        spotLight.distance = 200;
        scene.add(spotLight);

        const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
        scene.add(hemisphereLight);

        let effect = new AsciiEffect(renderer, ' .:-+*=%@#', { invert: true, resolution: .205 });
        effect.setSize(sizes.width, sizes.height);
        effect.domElement.style.color = 'white';
        effect.domElement.style.backgroundColor = 'white';

        // Load STL model
        const loader = new STLLoader();
        loader.load('/frant-landing/models/test2.stl', (geometry) => {
            const material = new THREE.MeshStandardMaterial({ color: 0x0077ff });
            const mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);

            // Adjust camera position
            camera.position.z = 5;
        });

        // Add OrbitControls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.enableZoom = true;


        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);

            if (modelRef.current) {
                modelRef.current.rotation.y += 0.01; // Rotate model around Y-axis
            }

            controls.update(); // Required for damping
            renderer.render(scene, camera);
        };
        animate();

        // Handle window resizing
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Clean up
        return () => {
            window.removeEventListener('resize', handleResize);
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} />;
};

export default STLModel;
