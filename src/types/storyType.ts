export interface StoryOption {
  text: string;
  next: string;
}
export interface StoryScene {
  text: string;
  options?: StoryOption[];
  end?: true;
}

export interface Story {
  [key: string]: StoryScene;
}
