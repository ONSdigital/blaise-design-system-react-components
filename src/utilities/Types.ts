export function isObjectWithProperty<Type extends string>(
    value: unknown,
    property: Type,
): value is Record<Type, unknown> {
    if (typeof value !== "object") {
        return false;
    }

    if (value === null) {
        return false;
    }

    return property in value;
}
