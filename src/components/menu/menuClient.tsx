'use client';

import { useEffect, useState } from 'react';
import Menu from './menu';
import SearchBar from '@/components/ui/searchBar';
import { CategoryType } from '@/types/menu';

export default function MenuClient({ initialData }: { initialData: CategoryType[] }) {
  const [data, setData] = useState(initialData);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/menu?search=${query}`);
      const result = await res.json();
      setData(result);
    };

    fetchData();
  }, [query]);

  return (
    <>
      <SearchBar />
      <Menu data={data} />
    </>
  );
}