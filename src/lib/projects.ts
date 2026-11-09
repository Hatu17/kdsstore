import { allProjects } from 'content-collections'

export const projects = [...allProjects].sort(
  (a, b) => a.order - b.order || a.title.localeCompare(b.title),
)

export function projectId(path: string) {
  return path.replace(/[^a-z0-9-]/gi, '-')
}
