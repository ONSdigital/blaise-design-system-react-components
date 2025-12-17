export function isObjectWithProperty<Type extends string>(value: unknown, propertyName: Type): value is Record<Type, unknown> {
    if (typeof value !== "object") {
        return false;
    }
    if (value === null) {
        return false;
    }
    return propertyName in value;
}
