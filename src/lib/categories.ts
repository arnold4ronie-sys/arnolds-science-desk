import { categories, type CategoryNode } from '../data/categories';

/** Find a category by its slug path, at any depth. Returns undefined if the path is not valid. */
export function findCategory(path: string[]): CategoryNode | undefined {
  let level: CategoryNode[] | undefined = categories;
  let found: CategoryNode | undefined;

  for (const slug of path) {
    found = level?.find((c) => c.slug === slug);
    if (!found) return undefined;
    level = found.children;
  }

  return found;
}

/** Number of categories below a node, at all depths. */
export function countDescendants(node: CategoryNode): number {
  return (node.children ?? []).reduce(
    (sum, child) => sum + 1 + countDescendants(child),
    0
  );
}
