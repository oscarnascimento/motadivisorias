/// <reference types="astro/client" />

// Environment variable types
interface ImportMetaEnv {
  readonly NODE_ENV: 'development' | 'production' | 'test';
  readonly ASTRO_PREVIEW?: string;
  readonly OBFUSCATE_BUILD?: string;
  readonly OBFUSCATION_VERBOSE?: string;
  readonly SITE_URL?: string;
  readonly SITE_NAME?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Declare custom modules if needed
declare module '*.astro' {
  const Component: any;
  export default Component;
}
