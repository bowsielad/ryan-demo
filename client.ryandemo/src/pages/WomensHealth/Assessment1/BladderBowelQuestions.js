const questions = [
  {
    id: 1,
    question: "Currently on day",
    type: "radio",
    options: ["Day 1", "Day 2", "Day 3"],
    name: "day",
  },
  {
    id: 2,
    question: "Time of day",
    type: "time",
    name: "time",
  },
  {
    id: 3,
    question: "Amount and type of drink",
    type: "text",
    fields: [
      { label: "Amount", name: "drink_amount", type: "number", placeholder: "amount" },
      { label: "Type", name: "drink_type", type: "text", placeholder: "type" },
    ],
  },
  {
    id: 4,
    question: "Bladder: Amount in Container",
    type: "text",
    fields: [{ label: "Amount", name: "bladder_amount", type: "number", placeholder: "amount" }],
  },
  {
    id: 5,
    question: "Bowel Movement: Type",
    note: "(1. Liquid; 2. Toothpaste-like; 3. Formed but soft; 4. Formed and hard; 5. Pebble-like;)",
    type: "number",
    name: "bowel_movement",
    min: 1,
    max: 5,
    placeholder: "scale",
  },
  {
    id: 6,
    question: "Leaking and Urge?",
    type: "text",
    fields: [
      {
        label: "Urine Amount : (0=none, 5=very bad)",
        name: "urine_amount",
        type: "number",
        placeholder: "amount",
      },
      {
        label: "Urine Reason : (limited to 60 characters.)",
        name: "urine_reason",
        type: "text",
        placeholder: "reason",
        max: 60,
      },
      {
        label: "Stool Amount : (0=none, 5=very bad)",
        name: "stool_amount",
        type: "number",
        placeholder: "amount",
      },
      {
        label: "Stool Reason : (limited to 60 characters.)",
        name: "stool_reason",
        type: "text",
        placeholder: "reason",
        max: 60,
      },
    ],
  },
  {
    id: 7,
    question: "Pelvic Pain",
    note: "(0=no pain 10=very bad)",
    type: "number",
    name: "pelvic_pain",
    min: 0,
    max: 10,
    placeholder: "scale",
  },
  {
    id: 8,
    question: "Number and style of pads used in 24 hours",
    note: "Since your last dairy log",
    type: "text",
    fields: [
      { label: "Amount", name: "pad_number", type: "number", placeholder: "amount" },
      { label: "Style", name: "pad_style", type: "text", placeholder: "style" },
    ],
  },
];

export { questions };
