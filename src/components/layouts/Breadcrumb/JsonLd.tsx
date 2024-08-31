import { ReactElement } from 'react';
import Script from 'next/script';
import type { Thing, WithContext } from 'schema-dts';

type Props = {
  schema: WithContext<Thing>;
};

export const JsonLd = ({ schema }: Props): ReactElement => {
  console.log(`schema: ${schema}`);
  return (
    <Script
      id="my-script"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
