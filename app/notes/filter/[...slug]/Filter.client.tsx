'use client';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { getNotesByCategories } from '@/lib/api';
import NoteList from '@/components/NoteList/NoteList';

interface FilterClientProps {
  response: string[];
}
const FilterClient = ({ response }: FilterClientProps) => {
  const { data = [] } = useQuery({
    queryKey: ['notes', response[0]],
    queryFn: () => getNotesByCategories(response[0]),
    placeholderData: keepPreviousData,
  });

  return <>{data.length > 0 && <NoteList notes={data} />}</>;
};

export default FilterClient;
