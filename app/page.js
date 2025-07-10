import Image from "next/image";
import TopRestaurants from "./components/TopRestaurants";
import OnlineRestaurants from "./components/OnlineRestaurants";

export default async function Home() {
  async function Wait() {
    await new Promise(resolve => setTimeout(() => {
      resolve()
    }, 2000));
  }

  await Wait();
  return (
    <div className="theMain">
      <TopRestaurants />
      <OnlineRestaurants />
    </div>
  );
}
