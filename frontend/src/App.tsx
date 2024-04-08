import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router } from "./Router";
import { AuthProvider } from "./app/contexts/AuthContext";
import { ThemeProvider } from "./app/contexts/ThemeProvider";
import { Toaster } from "./lib/utils/ui/toaster";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    }
  }
})

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
        <Router />
        <Toaster />
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
