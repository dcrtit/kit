export interface IEvent<T extends EventTarget> extends Event {
    target: T
}