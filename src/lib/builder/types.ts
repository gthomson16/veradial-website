export type DemoProfileVoiceSuggestion =
  | "female-warm"
  | "female-professional"
  | "male-warm"
  | "male-professional";

export interface DemoProfile {
  source: { type: "url" | "manual"; url?: string };
  business: { name: string; industry?: string; description?: string };
  contact: {
    phone?: string;
    email?: string;
    address?: string;
    websiteUrl?: string;
  };
  hours?: { raw: string };
  services: string[];
  pricing?: string;
  staff?: string[];
  greeting: { suggested: string; fallback: string };
  callRules?: {
    afterHours?: string;
    escalation?: string;
    bookingPolicy?: string;
  };
  voiceSuggestion?: DemoProfileVoiceSuggestion;
  confidence: { overall: number; notes?: string };
  generatedAt: string;
}

export interface BuilderGenerateSuccess {
  profile: DemoProfile;
}

export interface BuilderGenerateError {
  error: string;
  errorKind?: string;
}

export type BuilderGenerateResponse =
  | BuilderGenerateSuccess
  | BuilderGenerateError;
