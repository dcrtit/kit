export interface IEvent<T extends EventTarget> extends Event {
    target: T
}
export interface IStyleOptions {
    [key: string] : string
}