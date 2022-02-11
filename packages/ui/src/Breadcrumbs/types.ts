export interface IBreadcrumb {
    name: string
    path?: TBreadcrumbPath
}

export interface ILinkOptions {
    href?: TBreadcrumbPath
    to?: TBreadcrumbPath
}

// todo довить поддержку типа "объект" для path
export type TBreadcrumbPath = string
export type TLinkBreadcrumbTag = 'a' | 'nuxt-link' | 'router-link'
export type TBreadcrumbTag = TLinkBreadcrumbTag | 'div'
export type TLinkAttribute = 'href' | 'to'


