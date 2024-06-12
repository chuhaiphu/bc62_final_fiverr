import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { BrowserRouter as Router } from 'react-router-dom'
import RouteElements from './routes'
const queryClient = new QueryClient()
function App() {
  return (

    <QueryClientProvider client={queryClient}>
      <Router>
        <RouteElements />
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position='bottom' />
    </QueryClientProvider>
  )
}

export default App
