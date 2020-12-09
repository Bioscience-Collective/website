import CoreLayout from "../components/Layout";
import Hero from "../components/Hero";
import IndexContent from "../components/PageSpec/Index/Content";
import Meta from "../components/Meta";
import CTAButton from "../components/PageSpec/Index/CTAButton";
import FAQ from "../components/PageSpec/Index/FAQ";

export default function IndexPage() {
  return (
    <CoreLayout>
      <Meta />
      <Hero
        title={`Bioscience Collective`}
        highlight={true}
        subtitle="Biology is the future. How will you change it?"
      />
      <IndexContent />

      <h1 className="pt-10 text-3xl text-primary font-bold pb-3">
        Who We Are.
      </h1>
      <CTAButton
        text="Signup to start a Chapter"
        href="https://airtable.com/shrRAUSyzeWc5Xw9z"
      />
      <FAQ />
    </CoreLayout>
  );
}