import Footer from "@/components/AEOS/Footer";
import Benifits from "@/components/contentflow/Benifits";
import Header from "@/components/contentflow/Header";
import Hero from "@/components/contentflow/Hero";
import Faq from "@/components/FluxAcadamy/Faq";
import Why_learn_with from "@/components/FluxAcadamy/Why_learn_with";
import LinkdinTweets from "@/components/growthschool/LinkdinTweets";
import How_this_works from "@/components/youtube_as_services/How_this_works";
import Our_creative_portfolio from "@/components/youtube_as_services/Our_cretive_portfolio";


export default function Home() {
  return (
    <div className="bg-[#17152f]">
      <main className="">
        <Header/>
          <Hero/>
          <How_this_works/>
          <Benifits/>
          <Why_learn_with/>
          <Our_creative_portfolio/>
          <LinkdinTweets/>
          <Faq/>
          <Footer/>
      </main>
    </div>
  );
}
