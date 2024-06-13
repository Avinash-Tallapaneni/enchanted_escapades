"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import story from "../story/story.json";
import { Story } from "@/types/storyType";
import SceneComponent from "./SceneComponent";
import HomeScreen from "./HomeScreen";

const GameComponent = () => {
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [currentScene, setCurrentScene] = useState<string>("crossroads");

  const storyData: Story = story as unknown as Story;

  const handleStart = () => setGameStarted(true);
  const handleSceneChange = (next: string) => setCurrentScene(next);

  return (
    <div className="w-full h-screen  flex flex-col items-center justify-center">
      <AnimatePresence mode="popLayout">
        {!gameStarted ? (
          <motion.div
            key="homepage"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full h-full flex items-center justify-center"
          >
            <HomeScreen handleStart={handleStart} />
          </motion.div>
        ) : (
          <motion.div
            key={currentScene}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full h-screen flex flex-col items-center justify-start gap-10"
          >
            <SceneComponent
              storyData={storyData}
              currentScene={currentScene}
              setCurrentScene={handleSceneChange}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GameComponent;
