export function toggleTaskCompletion(current: Set<string>, id: string) {
  const next = new Set(current);
  const justCompleted = !next.has(id);

  if (justCompleted) next.add(id);
  else next.delete(id);

  return { next, justCompleted };
}
