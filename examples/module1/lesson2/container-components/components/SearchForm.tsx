import CustomSelect from './CustomSelect';
import SearchInput from './SearchInput';

type SearchFormProps = {
  name: string;
  setName: (name: string) => void;
  gender: string;
  setGender: (gender: string) => void;
  sortOption: string;
  setSortOption: (sortOption: string) => void;
};

function SearchForm({
  name,
  setName,
  gender,
  setGender,
  sortOption,
  setSortOption,
}: SearchFormProps) {
  return (
    <form className="space-x-4 flex items-end justify-center">
      <SearchInput name={name} setName={setName} />
      <CustomSelect
        label="Gender"
        options={[
          { value: '', label: 'Any Gender' },
          { value: 'female', label: 'Female' },
          { value: 'male', label: 'Male' },
          { value: 'genderless', label: 'Genderless' },
          { value: 'unknown', label: 'Unknown' },
        ]}
        value={gender}
        onChange={(value) => setGender(value)}
      />
      <CustomSelect
        label="Sort by"
        options={[
          { value: '', label: 'Initial' },
          { value: 'name', label: 'Name' },
          { value: 'created', label: 'Created Date' },
        ]}
        value={sortOption}
        onChange={(value) => setSortOption(value)}
      />
    </form>
  );
}

export default SearchForm;
