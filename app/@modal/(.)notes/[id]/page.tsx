import NotePreviewClient from './NotePreview.client';
import NoteDetails from '@/app/notes/[id]/page';
type Props = {
  params: Promise<{ id: string }>;
};

const NotePreview = async ({ params }: Props) => {
  return (
    <>
      <NotePreviewClient>
        <NoteDetails params={params} />
      </NotePreviewClient>
    </>
  );
};

export default NotePreview;
