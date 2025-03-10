import Pricing from "../pricing";

function hairColor() {
  return (
    <div>
      <Pricing
        title="Hair & Coloring Pricing"
        description="All Color Services include standard Blowdry, not Blowout or Special Styling"
        list={[
          "Root Touch Up - $85",
          "Junior Stylist Root Touch Up - $60",
          "Bang (Mini) Highlights - $60 (Does Not Included Standard Blowdry",
          "Bang (Mini) Highlights - $85 (Includeds Standard Blowdry for Short-Medium Hair)",
          "Partial Highlights - $100",
          "Full Highlights / Balayage - $150",
          "Haircut - Short Hair - $50",
          "Haircut - Medium Length Hair - $60",
          "Haircut - Long Hair - $70",
        ]}
      />
    </div>
  );
}

export default hairColor;
