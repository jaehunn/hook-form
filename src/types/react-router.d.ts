import { router } from '../main'

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export {}
