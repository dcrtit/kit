// @todo: добавить поддержку типа "объект" для path
export type TBreadcrumbPath = string

export interface IBreadcrumb {
    name: string
    path?: TBreadcrumbPath
}

// @todo: Investigate, where `no-shadow` error is coming from.
// eslint-disable-next-line no-shadow
export enum EBreadcrumbsCSSClasses {
    List = 'list',
    ListItem = 'listItem',
    ListItemLink = 'listItemLink'
}

export interface IBreadcrumbsCSSOptions {
    classes: Record<EBreadcrumbsCSSClasses, string>
    mergeWithDefaults: boolean
}

export interface ILinkOptions {
    href?: TBreadcrumbPath
    to?: TBreadcrumbPath
}

export type TLinkBreadcrumbTag = 'a' | 'nuxt-link' | 'router-link'
export type TBreadcrumbTag = TLinkBreadcrumbTag | 'div'
export type THrefAttribute = 'href' | 'to'