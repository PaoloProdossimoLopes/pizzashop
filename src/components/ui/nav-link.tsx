import { Link, LinkProps, useLocation } from 'react-router-dom'

interface NavLinkProps extends LinkProps {}

export function NavLink(props: NavLinkProps) {
  const { pathname } = useLocation()
  return (
    <Link
      data-isCurrentTab={pathname === props.to}
      className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground data-[isCurrentTab=true]:text-foreground"
      {...props}
    />
  )
}