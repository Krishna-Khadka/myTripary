import Download from "@/components/download/Download";
import ServiceCard from "@/components/servicecard/ServiceCard";
import Hero from "./home/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServiceCard />
      <Download />
    </main>
  );
}
