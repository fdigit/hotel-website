import type { ViewTransition as CanaryViewTransition } from "react/canary";

declare module "react" {
  export const ViewTransition: typeof CanaryViewTransition;
}
