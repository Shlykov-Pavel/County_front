import { AboutSection } from "../components/home/AboutSection";
import { BreedsSection } from "../components/home/BreedsSection";
import { CtaSection } from "../components/home/CtaSection";
import { DogsSection } from "../components/home/DogsSection";
import { Entries } from "../components/home/Entries";
import { Hero } from "../components/home/Hero";
import { NewsSection } from "../components/home/NewsSection";
import { PuppiesSection } from "../components/home/PuppiesSection";
import { ReviewsSection } from "../components/home/ReviewsSection";
import { StatsSection } from "../components/home/StatsSection";

/**
 * Страница — только композиция секций. Запросы к API живут в секциях,
 * которым эти данные нужны.
 */
export function HomePage() {
  return (
    <>
      <Hero />
      <Entries />
      <PuppiesSection />
      <BreedsSection />
      <DogsSection />
      <StatsSection />
      <AboutSection />
      <NewsSection />
      <ReviewsSection />
      <CtaSection />
    </>
  );
}
