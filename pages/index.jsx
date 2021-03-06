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

      <h1 className="pt-10 text-5xl font-bold pb-3 whoru">
        Who We Are.
      </h1>
      <p className="text-white text-green-200">
      We are a group of student scientists committed to making the life sciences accessible to all.<br/> As biology is becoming increasingly relevant, it is imperative that everyone is invited and heard.<br/> We take pride in our shared vision and values, as well as our commitment to equity and workplace democracy.
      </p>
      <p className="p-3"></p>
      <CTAButton
        text="Start a Chapter!"
        href="https://airtable.com/shrRAUSyzeWc5Xw9z"
      />
      <p className="p-6"></p>
      <FAQ />
    </CoreLayout>
  );
}
