import type { Character } from '../types/Character';

const CharacterListItem = ({ character }: { character: Character }) => {
  return (
    <li className="flex flex-col items-center">
      <h3>{character.name}</h3>
      <img src={character.image} alt={character.name} />
    </li>
  );
};

export default CharacterListItem;
