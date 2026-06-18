import { describe, it, expect } from 'vitest'
import { loadProjects, loadProfile } from './projects.js'

// Guard against a bad content edit (hand-written or from the CMS) reaching the
// repo: strict mode throws on the first invalid record, naming it. This is the
// check that would have flagged the partial-description bug before it shipped.
const projectModules = import.meta.glob('../../content/projects/*.json', { eager: true })
const rawProjects = Object.values(projectModules).map((m) => m.default ?? m)
import rawProfile from '../../content/profile.json'

describe('content/ is valid in strict mode', () => {
  it('loads at least one project', () => {
    expect(rawProjects.length).toBeGreaterThan(0)
  })

  it('every content/projects/*.json passes strict validation', () => {
    expect(() => loadProjects(rawProjects, { strict: true })).not.toThrow()
  })

  it('content/profile.json passes strict validation', () => {
    expect(() => loadProfile(rawProfile, { strict: true })).not.toThrow()
  })
})
