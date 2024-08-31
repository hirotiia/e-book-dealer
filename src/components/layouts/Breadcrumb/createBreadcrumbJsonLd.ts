import type { BreadcrumbList, WithContext } from 'schema-dts';

export type BreadcrumbItem = {
  pathname?: string;
  title: string;
};

export function createBreadcrumbJsonLd(items: BreadcrumbItem[]): WithContext<BreadcrumbList> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(({ pathname, title }, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: title,
      item: pathname,
    })),
  };
}
