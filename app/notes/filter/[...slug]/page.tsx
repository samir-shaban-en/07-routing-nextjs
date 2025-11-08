import FilterClient from './Filter.client';

type Props = {
  params: Promise<{ slug: string[] }>;
};

export default async function DocsPage({ params }: Props) {
  const { slug } = await params;

  return <FilterClient response={slug} />;
}
