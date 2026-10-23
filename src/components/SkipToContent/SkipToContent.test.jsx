import { render, screen } from '@testing-library/react'
import { ChakraProvider } from '@chakra-ui/react'
import SkipToContent from '.'

describe('SkipToContent', () => {
  it('links to the main content landmark', () => {
    render(
      <ChakraProvider>
        <SkipToContent />
      </ChakraProvider>,
    )
    expect(screen.getByRole('link', { name: 'Skip to main content' })).toHaveAttribute('href', '#main-content')
  })
})
