import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
// @ts-ignore
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
// @ts-ignore
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect.js';

import './glob3d.scss'

const STLModel = ({ modelName, rotate, size, color }: { modelName: string, rotate: boolean, size: number, color: string }) => {
    const mountRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        let animationFrameId: number;

        // Scene
        const scene = new THREE.Scene();

        // Lighting
        const ambientLight = new THREE.AmbientLight(0x404040);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 5, 5).normalize();
        scene.add(directionalLight);

        const spotLight = new THREE.SpotLight(0xffffff);
        spotLight.position.set(10, 10, 10);
        spotLight.angle = Math.PI / 6;
        spotLight.penumbra = 0.1;
        spotLight.decay = 2;
        spotLight.distance = 200;
        scene.add(spotLight);

        const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
        scene.add(hemisphereLight);

        // Material
        const material = new THREE.MeshStandardMaterial({ flatShading: true, side: THREE.DoubleSide });

        // Sizes
        const sizes = {
            width: window.innerWidth / 2.5,
            height: window.innerWidth / 2.5
        };

        // Camera
        const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.01, 2000);

        // Renderer
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(sizes.width, sizes.height);

        // Initialize ASCII effect
        const effect = new AsciiEffect(renderer, ' !"#$%&\'()*+,-./0123456789@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_abcdefghijklmnopqrstuvwxyz{|}~\n', {
            invert: true,
            resolution: 0.15
        });
        effect.setSize(sizes.width, sizes.height);
        effect.domElement.style.color = 'white';
        effect.domElement.style.backgroundColor = 'transparent';

        if (mountRef.current) {
            mountRef.current.appendChild(effect.domElement);
        }

        // Load STL model
        const loader = new STLLoader();
        let myMesh: THREE.Mesh | null = null;
        // @ts-ignore
        loader.load(`/frant-landing/models/${modelName}.stl`, (geometry) => {
            myMesh = new THREE.Mesh(geometry, material);

            geometry.computeVertexNormals();
            myMesh.geometry.center();

            const bbox = myMesh.geometry.boundingBox;
            if (bbox) {
                myMesh.position.y = (bbox.max.z - bbox.min.z) / 24;
                camera.position.set(bbox.max.x * 4, bbox.max.y, bbox.max.z * 3);
            }

            myMesh.rotation.x = -Math.PI / 2;

            myMesh.scale.set(size, size ,size)
            scene.add(myMesh);
        });

        // Add OrbitControls
        const controls = new OrbitControls(camera, effect.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.enableZoom = false;

        // Animation loop
        const animate = () => {
            if (rotate) {
                scene.rotation.y += 0.004;
            }

            controls.update();
            effect.render(scene, camera);

            animationFrameId = requestAnimationFrame(animate);
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
            cancelAnimationFrame(animationFrameId);

            if (myMesh) {
                myMesh.geometry.dispose();
                (myMesh.material as THREE.Material).dispose();
                scene.remove(myMesh);
                myMesh = null;
            }

            controls.dispose();
            renderer.dispose();

            ambientLight.dispose();
            directionalLight.dispose();
            spotLight.dispose();
            hemisphereLight.dispose();
            material.dispose();

            if (mountRef.current) {
                mountRef.current.removeChild(effect.domElement);
            }
        };
    }, [modelName, rotate]);

    return <div ref={mountRef} className={`main-model ${color}`} />;
};

export default STLModel;
