import PokemonForm from '../../pokemon/presentation/PokemonForm';
import RandomPokemon from '../../pokemon/presentation/RandomPokemon';

export default function Home() {
  return (
    <div>
      <RandomPokemon />
      <PokemonForm />
    </div>
  );
}
