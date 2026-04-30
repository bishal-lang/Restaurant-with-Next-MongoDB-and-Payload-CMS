'use client';

import { TextInput, ActionIcon } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const [value, setValue] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (!value.trim()) return;

    router.push(`/search?q=${encodeURIComponent(value)}`);
  };

  return (
    <TextInput
      placeholder="Search menu..."
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') handleSearch();
      }}
      leftSection={
        <ActionIcon
          variant="subtle"
          onClick={handleSearch}
          styles={{
            root: {
              '&:hover': { backgroundColor: 'transparent' },
            },
          }}
        >
          <IconSearch size={16} />
        </ActionIcon>
      }
      radius="md"
      size="sm"
    />
  );
}