import { render, screen } from '@testing-library/react'
import { ChakraProvider } from '@chakra-ui/react'
import { MemoryRouter } from 'react-router-dom'
import PagesHero from '.'

describe('PagesHero', () => {
  it('renders the title as the only level-one heading', () => {
    render(
      <ChakraProvider>
        <MemoryRouter>
          <PagesHero title="Projects" subtitle="Our work" breadcrumb={[{ label: 'Home', link: '/' }]} />
        </MemoryRouter>
      </ChakraProvider>,
    )
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Projects')
  })

  it('renders the title as a paragraph when the page body owns the h1', () => {
    render(
      <ChakraProvider>
        <MemoryRouter>
          <PagesHero title="PROJECTS" titleAs="p" />
        </MemoryRouter>
      </ChakraProvider>,
    )
    expect(screen.queryByRole('heading', { level: 1 })).toBeNull()
    expect(screen.getByText('PROJECTS').tagName).toBe('P')
  })
})
