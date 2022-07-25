// @todo: добавить поддержку типа "объект" для path
export type TBreadcrumbPath = string

export interface IBreadcrumb {
    name: string
    path?: TBreadcrumbPath
}

export interface ILinkOptions {
    href?: TBreadcrumbPath
    to?: TBreadcrumbPath
}

export type TLinkBreadcrumbTag = 'a' | 'nuxt-link' | 'router-link'
export type TBreadcrumbTag = TLinkBreadcrumbTag | 'div'
export type THrefAttribute = 'href' | 'to'