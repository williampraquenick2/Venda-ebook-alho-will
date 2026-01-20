
export {};

declare global {
  interface Window {
    fbq: (
      type: string,
      event: string,
      params?: {
        value?: number;
        currency?: string;
        [key: string]: any;
      }
    ) => void;
  }
}
