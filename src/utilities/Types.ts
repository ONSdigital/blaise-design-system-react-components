export function isObjectWithProperty<Type extends string>(value: any, propertyName: Type): value is Record<Type, any> {
    if (typeof value != "object") {
        return false;
    }
    if (value == null) {
        return false;
    }
    return propertyName in value;
}
