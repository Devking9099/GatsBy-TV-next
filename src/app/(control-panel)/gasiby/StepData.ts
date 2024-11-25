// StepData.ts
export interface Step {
  icon: string;
  title: string;
  description: string;
}

export const StepDate: Step[] = [
  {
    icon: "assets/images/plan-icon/key.png",
    title: "Accessibility",
    description:
      "The Free Tier allows individuals and small projects to benefit from the API without financial commitment.",
  },
  {
    icon: "assets/images/plan-icon/scalability.png",
    title: "Scalability",
    description:
      "Clients can start with a lower-tier plan and upgrade as their needs grow.",
  },
  {
    icon: "assets/images/plan-icon/kindness.png",
    title: "Affordability",
    description:
      "Competitive pricing makes it accessible for startups and small businesses.",
  },
  {
    icon: "assets/images/plan-icon/diamond.png",
    title: "Value Addition",
    description:
      "Each tier offers additional features and support, providing clear incentives to upgrade.",
  },
  {
    icon: "assets/images/plan-icon/revenue-growth.png",
    title: "Revenue Generation",
    description:
      "Overage charges and annual billing encourage clients to monitor usage and commit long-term.",
  },
];
