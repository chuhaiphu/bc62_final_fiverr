import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter as Router } from 'react-router-dom'
import RouteElements from './routes'
const queryClient = new QueryClient()
function App() {
  return (

    <QueryClientProvider client={queryClient}>
      <Router>
        <RouteElements />
      </Router>
    </QueryClientProvider>
  )
}

export default App
