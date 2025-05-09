import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/use-sync-external-store/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Outlet />
}
