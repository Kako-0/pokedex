import { render } from "@testing-library/react";
import { withRouter } from 'react-router';

const PokemonDisplay = withRouter(({location}) =>{
    <div data-testid="pokemon-display">{location.pathname}</div>
})

jest.mock('react-router', () => ({
    withRouter: Comp => props => <Comp {...props} />
}))

test('display pokemon page', () => {
    const pathname = '/some-route';
    const { getByTestID } = render(<PokemonDisplay location={{pathname}}/>);
        expect(getByTestID('pokemon-display')).toHaveContent(pathname);
});
