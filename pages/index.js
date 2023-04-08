import NavigationCard from "@components/NavigationCard";
import PostFormCard from "@/components/PostFormCard";

export default function Home() {
  return (
    <div className="flex mt-4 max-w-4xl mx-auto gap-6">
      <div className="w-1/3">
        <NavigationCard/>
      </div>
        <div className="grow">
          <PostFormCard/>
        </div>
    </div>
  );
}
