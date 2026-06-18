import { describe, it, expect } from 'vitest'
import { parseCategoryFromHash } from './categoryFilter.js'

describe('parseCategoryFromHash', () => {
  it.each([
    ['', 'all'],
    ['#work', 'all'],
    ['#about', 'all'],
    ['#work/video', 'all'],
    ['#work/motion', 'motion'],
    ['#work/product', 'all'],
    ['#work/graphic', 'graphic'],
    ['#work/painting', 'all'],
    ['#work/', 'all'],
    [null, 'all'],
    [undefined, 'all'],
  ])('maps %j to %j', (hash, expected) => {
    expect(parseCategoryFromHash(hash)).toBe(expected)
  })
})
