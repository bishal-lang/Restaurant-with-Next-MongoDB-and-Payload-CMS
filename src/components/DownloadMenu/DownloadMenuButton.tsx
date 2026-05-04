'use client'

import { downloadMenuExcel, MenuItem } from '@/lib/exportMenu'

type Props = {
  menuItems: MenuItem[]
}

export default function DownloadMenuButton({ menuItems }: Props) {
  return <button onClick={() => downloadMenuExcel(menuItems)}>Download Excel</button>
}
