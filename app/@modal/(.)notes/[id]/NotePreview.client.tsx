'use client';
import css from './NotePreview.module.css';
import { useRouter } from 'next/navigation';
import Modal from '@/components/Modal/Modal';

type Props = {
  children: React.ReactNode;
};
const NotePreviewClient = ({ children }: Props) => {
  const router = useRouter();
  const close = () => router.back();

  return (
    <Modal onClose={close}>
      {children}
      <button className={css.backBtn} onClick={close}>
        Close
      </button>
    </Modal>
  );
};

export default NotePreviewClient;
