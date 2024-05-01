// globals.d.ts
interface GtagEventParams {
  event_category?: string;
  event_label?: string;
  value?: number;
  non_interaction?: boolean;
  [key: string]: any;
}

interface GtagConfigParams {
  [key: string]: any;
}

interface GtagFunction {
  (command: "config", targetId: string, config?: GtagConfigParams): void;
  (command: "event", eventName: string, params?: GtagEventParams): void;
  (command: "set", params: GtagConfigParams): void;
}

declare global {
  interface Window {
    gtag?: GtagFunction;
  }
}

export {};
