/**
 * Returns an asset path correctly prefixed for the deployment base path.
 * When deployed under /auto-show/, assets must be /auto-show/assets/...
 * In development (npm run dev), Next.js uses basePath from next.config.js.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '/auto-show';

export function assetPath(path: string): string {
  // path should start with /assets/...
  return `${BASE_PATH}${path}`;
}
