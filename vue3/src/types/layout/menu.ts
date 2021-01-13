export interface MenuItem {
  key: string
  title: string
  icon?: string
  path?: string
  children?: MenuItem[]
  id?: string
  parent_id?: string
}
export interface MenusInfo {
  selectedKeys: string[]
  list: MenuItem[]
  openKeys: string[]
}