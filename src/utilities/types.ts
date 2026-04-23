export function isObjectWithProperty<K extends PropertyKey>(
  value: unknown,
  property: K,
): value is Record<K, unknown> {
  if (value === null || (typeof value !== "object" && typeof value !== "function")) {
    return false;
  }

  return property in value;
}
