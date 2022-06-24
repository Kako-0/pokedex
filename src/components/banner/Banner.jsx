import './styles.scss';
import BannerImg from '../../common/assets/imgs/BannerComplete.svg';
import { useNavigate } from 'react-router';

function Banner() {
    const nav = useNavigate();
    return (
        <main className='BannerContainer'>
            <section className='BannerText'>
                <h1>Qual pokemon você escolheria?</h1>
                <p>Você pode saber o tipo de Pokémon, seus pontos fortes, fracos e habilidades.</p>
                <button className='BannerBtn' onClick={() => nav('../Pokemon', {replace:"true"})}>Veja os pokemons</button>
            </section>
            <img src={BannerImg} alt="banner" />
        </main>
    );
}

export default Banner;