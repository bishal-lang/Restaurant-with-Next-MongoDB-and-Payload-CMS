'use client'

import * as XLSX from 'xlsx'
import { saveAs } from 'file-saver'

export interface MenuItem {
  id?: string
  name: string
  category: 'entrees' | 'mains' | 'sides' | 'sauces' | 'desserts'
  price: number
  description?: string | null
  image?: unknown
}

export function downloadMenuExcel(menuItems: MenuItem[]): void {
  const formatted = menuItems.map(({ image, id, ...item }) => ({
    Name: item.name,
    Category: capitalize(item.category),
    Price: item.price,
    Description: item.description ?? '',
  }))

  const worksheet = XLSX.utils.json_to_sheet(formatted)

  worksheet['!cols'] = [{ wch: 20 }, { wch: 15 }, { wch: 10 }, { wch: 40 }]

  const workbook = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Menu')

  const excelBuffer = XLSX.write(workbook, {
    bookType: 'xlsx',
    type: 'array',
  })

  const blob = new Blob([excelBuffer], {
    type: 'application/octet-stream',
  })

  saveAs(blob, 'menu.xlsx')
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
