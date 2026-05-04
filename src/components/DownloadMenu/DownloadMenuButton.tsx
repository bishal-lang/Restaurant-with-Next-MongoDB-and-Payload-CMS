'use client'

import { Button, Tooltip } from '@mantine/core'
import { IconDownload } from '@tabler/icons-react'
import { downloadMenuExcel, MenuItem } from '@/lib/exportMenu'

type Props = {
  menuItems: MenuItem[]
}

export default function DownloadMenuButton({ menuItems }: Props) {
  const isDisabled = !menuItems || menuItems.length === 0

  return (
    <Tooltip
      label={isDisabled ? 'No menu items to export' : 'Download as Excel'}
      withArrow
      position="left"
    >
      <Button
        onClick={() => downloadMenuExcel(menuItems)}
        leftSection={<IconDownload size={18} />}
        disabled={isDisabled}
        variant="light"
        radius="md"
      >
        Download Excel
      </Button>
    </Tooltip>
  )
}
