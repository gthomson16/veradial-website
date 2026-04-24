export const DEMO_FUNNEL_CONTRACT_VERSION = "2026-04-24.v1";

export const DEMO_FUNNEL_CONTRACT_HEADER = "x-demo-funnel-contract-version";

export function isExpectedDemoContract(version: string | null | undefined) {
  return version === DEMO_FUNNEL_CONTRACT_VERSION;
}
