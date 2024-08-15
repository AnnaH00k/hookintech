"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three-stdlib";
import { BoxHelper } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const modelPaths = [
    "/models/charcooooooot.glb",
    "/models/OrchidFlower.glb",
    "/models/TyrannosaurusRex.glb",
    "/models/Adventurer.glb",
  ];
  function getRandomModelPath() {
    const randomIndex = Math.floor(Math.random() * modelPaths.length);
    return modelPaths[randomIndex];
  }

export default function Hooked0nLife() {
  const [gender, setGender] = useState("female");
  const [measurements, setMeasurements] = useState({
    height: 180,
    weight: 80,
    shoulders: 116,
    chest: 103,
    waist: 89,
    hips: 107,
    legs: 96,
  });

  const modelRef = useRef<THREE.Object3D | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMeasurements({
      ...measurements,
      [e.target.name]: Number(e.target.value), // Convert value to number
    });
  };

  const handleGenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(e.target.value);
  };

  const generate3DModelTRex = () => {
    const container = document.getElementById("3d-model-container-rex");

    if (!container) {
      console.error("3D model container not found");
      return;
    }

    // Clear the previous renderer content
    container.innerHTML = "";

    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000); // Adjust FOV and frustum
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Store the scene, camera, and renderer references for future use
    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;

    // Add light
    const ambientLight = new THREE.AmbientLight(0xffffff, 2); // White light with intensity 0.5
    scene.add(ambientLight);

    const light = new THREE.DirectionalLight(0xffffff, 1); // White light with intensity 1
    light.position.set(1, 1, 1).normalize();
    scene.add(light);

    // Set up controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;
    

    // Load the T. rex 3D model
    const loader = new GLTFLoader();
    const modelPath = getRandomModelPath();

    loader.load(
        modelPath,
        (gltf) => {
          const model = gltf.scene;
          console.log('Model loaded:', model); // Log the model to verify it’s loaded
  

        if (modelRef.current) {
          scene.remove(modelRef.current);
        }

        modelRef.current = model;
        scene.add(model);

        // Center the model in the scene
        const boundingBox = new THREE.Box3().setFromObject(model);
        const center = boundingBox.getCenter(new THREE.Vector3());
        model.position.sub(center); // Move model to center the bounding box

        // Adjust camera position and orientation for a close-up view
        const cameraDistance = boundingBox.getSize(new THREE.Vector3()).length() * 1;
        camera.position.set(0, cameraDistance * 0.5, cameraDistance); // Move the camera up and back
        camera.lookAt(center); // Ensure the camera looks at the center of the model

        // Adjust controls target
        controls.target.copy(center);

        // Resize the camera frustum based on the size of the model
        camera.near = cameraDistance / 10; // Set near plane
        camera.far = cameraDistance * 10; // Set far plane
        camera.updateProjectionMatrix();

        const animate = () => {
          requestAnimationFrame(animate);
          if (model) {
            model.rotation.y += 0.005;
          }
          controls.update(); // Update controls
          renderer.render(scene, camera);
        };
        animate();
      },
      undefined,
      (error) => {
        console.error('An error occurred loading the model:', error);
      }
    );
  };

  const generate3DModel = () => {
    const container = document.getElementById("3d-model-container");

    if (!container) {
      console.error("3D model container not found");
      return;
    }

    // Clear the previous renderer content
    container.innerHTML = "";

    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 1, 500); // Adjust FOV, near and far planes
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Store the scene, camera, and renderer references for future use
    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;

    // Add light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // White light with intensity 0.5
    scene.add(ambientLight);

    const light = new THREE.DirectionalLight(0xffffff, 1); // White light with intensity 1
    light.position.set(1, 1, 1).normalize();
    scene.add(light);

    // Set up controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;

    // Load the 3D model
    const loader = new GLTFLoader();
    loader.load(
      "/models/body_test_2.glb",
      (gltf) => {
        const model = gltf.scene;
        console.log('Model loaded:', model); // Log the model to verify it’s loaded

        if (modelRef.current) {
          scene.remove(modelRef.current);
        }

        modelRef.current = model;
        adjustCubes(model, measurements);
        scene.add(model);

        // Center the model in the scene
        const boundingBox = new THREE.Box3().setFromObject(model);
        const center = boundingBox.getCenter(new THREE.Vector3());
        model.position.sub(center); // Move model to center the bounding box

        // Adjust camera position and orientation
        const cameraDistance = Math.max(boundingBox.getSize(new THREE.Vector3()).length() * 1.5, 10);
        camera.position.set(0, cameraDistance * 0.5, cameraDistance); // Move the camera up and back
        camera.lookAt(0, 0, 0); // Ensure the camera looks at the center of the cubes

        // Adjust controls target
        controls.target.set(0, 0, 0);

        // Resize the camera frustum based on the size of the model
        camera.near = cameraDistance / 10; // Set near plane
        camera.far = cameraDistance * 10; // Set far plane
        camera.updateProjectionMatrix();

        const animate = () => {
          requestAnimationFrame(animate);
          if (model) {
            model.rotation.y += 0.01;
          }
          controls.update(); // Update controls
          renderer.render(scene, camera);
        };
        animate();
      },
      undefined,
      (error) => {
        console.error('An error occurred loading the model:', error);
      }
    );
  };

  const adjustCubes = (model: THREE.Object3D, measurements: any) => {
    if (!sceneRef.current) {
        console.error('Scene reference is not set');
        return;
    }
    const scene = sceneRef.current;
    const totalHeight = measurements.height;
    const baseWidth = 100; // Base width for scaling (adjust based on your model's dimensions)

    // Define proportions for height
    const proportions = {
        legs: 0.45,    // 45% of total height
        hip: 0.15,     // 15% of total height
        waist: 0.15,   // 15% of total height
        chest: 0.15,   // 15% of total height
        shoulders: 0.10 // 10% of total height
    };

    // Map cube names to their measurement properties
    const cubeMeasurements: { [key: string]: string } = {
        hip: 'hips',
        waist: 'waist',
        chest: 'chest',
        shoulders: 'shoulders' // Use actual 'shoulders' measurement
    };

    const cubeNames: (keyof typeof proportions)[] = ["legs", "hip", "waist", "chest", "shoulders"];

    let currentY = -totalHeight * proportions.legs / 2; // Start with legs cube at the bottom

    cubeNames.forEach((name) => {
        const cube = model.getObjectByName(name);
        if (cube) {
            console.log(`Adjusting ${name} cube`);

            const proportion = proportions[name];
            const measurementKey = cubeMeasurements[name] || name.toLowerCase();
            const measurement = measurements[measurementKey] || 100; // Default to 100 if measurement is not found

            // Scale dimensions
            cube.scale.y = (totalHeight * proportion) / 180; // Adjust height proportion
            cube.scale.x = (measurement / baseWidth) * 1.5; // Wider width
            cube.scale.z = (measurement / baseWidth) * 0.8; // Narrower depth

            // Position cubes
            cube.position.y = currentY + cube.scale.y * 0.5;
            currentY += cube.scale.y; // Move the next cube above the current one

            // Debugging: Color each cube differently
            const material = new THREE.MeshBasicMaterial();
            switch (name) {
                case "legs":
                    material.color.set(0x6b879a); // Blue
                    break;
                case "hip":
                    material.color.set(0x00ff00); // Green
                    break;
                case "waist":
                    material.color.set(0xff0000); // Red
                    break;
                case "chest":
                    material.color.set(0xffff00); // Yellow
                    break;
                case "shoulders":
                    material.color.set(0x00ffff); // Cyan
                    break;
            }
            (cube as THREE.Mesh).material = material;

            // Add a BoxHelper to visualize the bounding box of each cube
            const boxHelper = new BoxHelper(cube as THREE.Mesh, 0xffffff);
            scene.add(boxHelper);
        } else {
            console.warn(`Cube with name ${name} not found in the model`);
        }
    });
  };

  useEffect(() => {
    // Generate T. rex model when component mounts
    generate3DModelTRex();
  }, []); // Empty dependency array to run only on mount

  useEffect(() => {
    // Adjust cubes dynamically when measurements change
    if (modelRef.current) {
      adjustCubes(modelRef.current, measurements);
    }
  }, [measurements]);

  return (
    <main className="flex sm:flex-row-reverse  flex-col-reverse items-center min-h-screen justify-between py-20 bg-[#000000] w-full">
      <div className="flex flex-col items-center w-full max-w-4xl p-8 rounded-md shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Input Your Measurements</h2>
        <form className="flex flex-col space-y-4 text-[#6b879a] w-full">
          <label className="flex flex-col">
            Gender:
            <select value={gender} onChange={handleGenderChange} className="mt-2 p-2 rounded">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <label className="flex flex-col">
            Height (cm):
            <input
              type="number"
              name="height"
              value={measurements.height}
              onChange={handleInputChange}
              className="mt-2 p-2 rounded"
            />
          </label>
          <label className="flex flex-col">
            Weight (kg):
            <input
              type="number"
              name="weight"
              value={measurements.weight}
              onChange={handleInputChange}
              className="mt-2 p-2 rounded"
            />
          </label>
          <label className="flex flex-col">
            Chest (cm):
            <input
              type="number"
              name="chest"
              value={measurements.chest}
              onChange={handleInputChange}
              className="mt-2 p-2 rounded"
            />
          </label>
          <label className="flex flex-col">
            Waist (cm):
            <input
              type="number"
              name="waist"
              value={measurements.waist}
              onChange={handleInputChange}
              className="mt-2 p-2 rounded"
            />
          </label>
          <label className="flex flex-col">
            Hips (cm):
            <input
              type="number"
              name="hips"
              value={measurements.hips}
              onChange={handleInputChange}
              className="mt-2 p-2 rounded"
            />
          </label>
          <label className="flex flex-col">
            Shoulders (cm):
            <input
              type="number"
              name="shoulders"
              value={measurements.shoulders}
              onChange={handleInputChange}
              className="mt-2 p-2 rounded"
            />
          </label>
          <button
            type="button"
            onClick={generate3DModel}
            className="mt-4 bg-[#6b879a] text-white p-2 rounded"
          >
            Generate 3D Model
          </button>
        </form>
      </div>
      <div id="3d-model-container" className="w-full bg-[#6b879a] h-[80vh] mt-8 rounded-md">
        <div id="3d-model-container-rex" className="w-full bg-[#163950] h-[80vh] rounded-md"/>
        {/* The 3D model will be rendered here */}
      </div>
    </main>
  );
}
