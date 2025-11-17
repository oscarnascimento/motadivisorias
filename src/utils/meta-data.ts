import { siteConfig } from '@/config';

/**
 * Generate page title with site suffix
 * @param title - Page specific title
 * @returns Complete page title
 */
export function generatePageTitle(title?: string): string {
  if (!title) {
    return `${siteConfig.templateName} - ${siteConfig.templateSuffix}`;
  }
  return `${title} - ${siteConfig.templateName} | ${siteConfig.templateSuffix}`;
}

/**
 * Generate meta description with fallback
 * @param description - Page specific description
 * @returns Meta description
 */
export function generateMetaDescription(description?: string): string {
  if (!description) {
    return `${siteConfig.templateName} - ${siteConfig.templateKeyword}`;
  }
  return description;
}
