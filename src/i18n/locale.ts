export type Locale = 'ja' | 'en';

export const defaultLocale: Locale = 'ja';

export function getLocale(url: URL): Locale {
  return url.pathname === '/en' || url.pathname.startsWith('/en/') ? 'en' : 'ja';
}

export function localePath(locale: Locale, path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (locale === 'ja') return normalized === '/en' ? '/' : normalized.replace(/^\/en/, '') || '/';
  if (normalized === '/') return '/en';
  if (normalized.startsWith('/en')) return normalized;
  return `/en${normalized}`;
}

export function alternateLocalePath(pathname: string): string {
  const locale = getLocale(new URL(pathname, 'https://allerise.com'));
  return localePath(locale === 'ja' ? 'en' : 'ja', pathname);
}
