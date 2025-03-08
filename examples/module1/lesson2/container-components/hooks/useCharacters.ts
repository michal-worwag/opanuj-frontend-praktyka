import { useEffect, useState } from 'react';

import type { Character } from '../types/Character';

const useCharacters = ({
  name,
  gender,
  sortOption,
}: {
  name: string;
  gender: string;
  sortOption: string;
}) => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    fetch(
      `https://rickandmortyapi.com/api/character/?name=${name}&gender=${gender}`
    )
      .then((response) => response.json())
      .then((data) => setCharacters(data.results || []))
      .catch((error) => console.error('Error fetching data:', error));
  }, [name, gender]);

  const sortedCharacters = [...characters].sort((a, b) => {
    if (sortOption === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortOption === 'created') {
      return new Date(a.created).getTime() - new Date(b.created).getTime();
    }
    return 0;
  });

  return { characters: sortedCharacters };
};

export default useCharacters;
