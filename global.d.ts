// global.d.ts
declare namespace FB {
  function init(params: {
    appId: string;
    autoLogAppEvents: boolean;
    xfbml: boolean;
    version: string;
  }): void;

  function ui(
    params: {
      method: string;
      href: string;
    },
    callback: (response?: any) => void
  ): void;
}

declare var FB: FB;
