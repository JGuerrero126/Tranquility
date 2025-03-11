import Pricing from "../pricing";

function waxing() {
  return (
    <div>
      <Pricing
        title="Waxing Pricing"
        list={[
          "Eyebrow Shaping - $20",
          "Eyebrow Clean-Up - $12",
          "Upper Lip - $8",
          "Chin - $12",
          "Full Face - $40",
          "Under Arms - $18",
          "Half Arm - $25",
          "Full Arm - $45",
          "Half Leg - $30",
          "Full Leg - Starting at $50",
          "Bikini - $35",
          "Forehead - $10",
          "Sideburns - $15",
          "Back - Starting at $50",
        ]}
      />
    </div>
  );
}

export default waxing;
