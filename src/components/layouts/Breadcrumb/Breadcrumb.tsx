import Link from 'next/link';
import { createBreadcrumbJsonLd } from './createBreadcrumbJsonLd';
import { JsonLd } from './JsonLd';

type Item = {
  pathname?: string;
  title: string;
};

type Props = {
  items: Item[];
};

export const Breadcrumb = ({ items }: Props) => {
  return (
    <div>
      <ol className="col-start-2 flex gap-2">
        {items.map(({ pathname, title }, i) => (
          <li key={title}>
            {items.length === i + 1 ? title : <Link href={pathname!}>{title}</Link>}
          </li>
        ))}
      </ol>
      <JsonLd schema={createBreadcrumbJsonLd(items)} />
    </div>
  );
};
