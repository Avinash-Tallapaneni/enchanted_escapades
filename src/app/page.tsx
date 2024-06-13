import GameComponent from "@/components/GameComponent";

export default function Home() {
  return (
    <div className="w-full h-screen  flex flex-col items-center justify-center">
      <GameComponent />
      {/* <div className="my-4">
        <p className="text-sm text-center md:text-lg">
          © 2024 Design &amp; Developed by{" "}
          <span className="text-base font-bold md:text-xl">
            Avinash Tallapaneni.
          </span>
          All rights reserved.
        </p>
      </div> */}
    </div>
  );
}
