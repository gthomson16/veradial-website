import type { Preset } from "./calls/types";

export const DEMO_PRESETS: Preset[] = [
  {
    id: "appointment-confirmation",
    title: "Confirm an appointment",
    subtitle: "A short reminder call that verifies time and availability.",
    goal: "Confirm a scheduled appointment and capture whether the recipient can still attend.",
  },
  {
    id: "lead-follow-up",
    title: "Follow up with a lead",
    subtitle: "A polite check-in after a missed inquiry or quote request.",
    goal: "Follow up with a prospective customer and ask whether they still want help.",
  },
  {
    id: "simple-update",
    title: "Deliver an update",
    subtitle: "A concise outbound call for routine customer communication.",
    goal: "Deliver a brief update and ask whether the recipient has any questions.",
  },
];
