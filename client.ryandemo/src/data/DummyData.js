const bb_result = {
  date: "2025-01-07",
  day: "day1",
  time: "11:00 AM",
  drink_amount: "1",
  drink_type: "tea",
  bladder_amount: "1",
  bowel_movement: "1",
  leaking_amount: "0",
  urine_amount: "1",
  urine_reason: "this is a sentence has 60 characters and is the max limit...",
  stool_amount: "2",
  stool_reason: "this is a sentence has 60 characters and is the max limit...",
  pelvic_pain: "4",
  pad_number: "4",
  pad_style: "test",
};
export { bb_result };

const healthCheck_result = {
  leakage_awareness: ["urine"],
  urge_bathroom: ["bladder"],
  difficulty_emptying: ["bladder"],
  pain_using: ["a menstrual cup"],
  pain_pressure: ["abdomen", "low back"],
  pressure_heaviness: ["vagina"],
  bulging_tissue: ["vagina"],
  vaginal_discharge: ["color"],
  vaginal_vulvar: ["dryness"],
  changes_awareness: ["vulvar sensation", "vaginal sensation"],
  conception_awareness: ["yes"],
  period_frequency: ["less than 21 days apart"],
  period_awareness: [
    "soaks through one or more tampons or pads every hour for several hours and/or days in a row",
  ],
  vaginal_awareness: ["yes"],
  hotflashes_awareness: ["yes"],
  sleep_awareness: ["yes"],
  headaches_awareness: ["yes"],
  mood_awareness: ["no"],
  breasts_awareness: ["yes"],
  additional_comments: "This is a test...",
};

export { healthCheck_result };
