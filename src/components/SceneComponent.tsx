import Image from "next/image";
import { StoryScene } from "@/types/storyType";

import { images } from "../constants";

interface SceneComponentProps {
  storyData: { [key: string]: StoryScene };
  currentScene: string;
  setCurrentScene: (next: string) => void;
}

const SceneComponent = ({
  storyData,
  currentScene,
  setCurrentScene,
}: SceneComponentProps) => {
  const imageSrc = currentScene;

  console.log("imageSrc", currentScene, images[currentScene]);

  return (
    <div className="relative h-full flex flex-col items-center justify-center w-full  ">
      <div className="max-w-7xl">
        <p className="text-white z-10">{storyData[currentScene].text}</p>

        <div className="flex gap-5 items-center z-10 mt-5">
          {storyData[currentScene].options?.map((option) => (
            <button
              key={option.next}
              className="bg-slate-900 text-white py-2 px-4 rounded-md"
              onClick={() => setCurrentScene(option.next)}
            >
              {option.text}
            </button>
          ))}
          {storyData[currentScene].end && (
            <button
              className="bg-slate-900 text-white py-2 px-4 rounded-md"
              onClick={() => setCurrentScene("crossroads")}
            >
              Restart
            </button>
          )}
        </div>
      </div>

      <Image
        src={images[currentScene]}
        width={100}
        height={100}
        unoptimized={true}
        alt="HomeScreen image"
        className="absolute h-full w-full -z-10 object-top bg-red-950 top-0 left-0 "
      />
    </div>
  );
};

export default SceneComponent;
