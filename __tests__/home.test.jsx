import { render, screen, waitFor } from '@testing-library/react'
import HomePage from '@/pages/index'
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import userEvent from '@testing-library/user-event'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

jest.mock('@tanstack/react-query', () => {

  const originalModule = jest.requireActual('@tanstack/react-query')

  return ({
    ...originalModule,
    useQuery: jest.fn()
  })
});

const mockedRequest = useQuery

const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('Home', () => {
  it('render repos when initialize app', async () => {
    mockedRequest.mockImplementationOnce(() => ({
      isLoading: false,
      isError: false,
      data: [
      ]
    }));

    render(<HomePage />, { wrapper })

    const result = screen.findAllByRole('link', {})

    expect(result.length).toBeFalsy()
  })


  it('render repos when type input search', async () => {
    const user = userEvent.setup()

    mockedRequest.mockImplementation(() => ({
      isLoading: false,
      isError: false,
      data: [
        { id: 1, name: "repository 1", owner: { login: 'hamid' }, forks: 10, open_issues: 35 },
      ]
    }));

    render(<HomePage />, { wrapper })

    const input = screen.getByRole('textbox', {})

    await user.type(input, 'hamid')

    await waitFor(() => {
      const repository = screen.getByRole('heading', { level: 3 })
      const openIssues = screen.getByTestId('open_issues')
      const forks = screen.getByTestId('forks')


      expect(repository.textContent).toContain('repository 1')
      expect(forks.textContent).toContain('10')
      expect(openIssues.textContent).toContain('35')
    })
  })
})