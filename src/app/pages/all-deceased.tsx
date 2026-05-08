import { Link } from 'react-router';
import { people, getPlotById } from '../data/cemetery-data';
import { Card, CardContent } from '../components/ui/card';
import { User, Calendar, MapPin } from 'lucide-react';
import { Input } from '../components/ui/input';
import { useState, useMemo } from 'react';

type SortOption = 'lastName' | 'ageAtDeathAsc' | 'ageAtDeathDesc' | 'deathYearAsc' | 'deathYearDesc';

export function AllDeceased() {
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('lastName');

  const getLastName = (name: string) => {
    const parts = name.trim().split(' ');
    return parts[parts.length - 1];
  };

  const sortedPeople = useMemo(() => {
    const copy = [...people];
    switch (sortBy) {
      case 'lastName':
        return copy.sort((a, b) => getLastName(a.name).localeCompare(getLastName(b.name)));
      case 'ageAtDeathAsc':
        return copy.sort((a, b) => (a.ageAtDeath ?? Infinity) - (b.ageAtDeath ?? Infinity));
      case 'ageAtDeathDesc':
        return copy.sort((a, b) => {
          if (a.ageAtDeath == null && b.ageAtDeath == null) return 0;
          if (a.ageAtDeath == null) return 1;
          if (b.ageAtDeath == null) return -1;
          return b.ageAtDeath - a.ageAtDeath;
        });
      case 'deathYearAsc':
        return copy.sort((a, b) => (a.deathYear ?? Infinity) - (b.deathYear ?? Infinity));
      case 'deathYearDesc':
        return copy.sort((a, b) => {
          if (a.deathYear == null && b.deathYear == null) return 0;
          if (a.deathYear == null) return 1;
          if (b.deathYear == null) return -1;
          return b.deathYear - a.deathYear;
        });
      default:
        return copy;
    }
  }, [sortBy]);

  const filteredPeople = useMemo(() => {
    if (!search) return sortedPeople;
    
    const searchLower = search.toLowerCase();
    return sortedPeople.filter(person => 
      person.name.toLowerCase().includes(searchLower) ||
      (person.deathYear && person.deathYear.toString().includes(searchLower))
    );
  }, [search, sortedPeople]);

  // Group by first letter of sort key
  const groupedPeople = useMemo(() => {
    const groups: { [key: string]: typeof people } = {};
    
    filteredPeople.forEach(person => {
      let groupKey: string;
      switch (sortBy) {
        case 'lastName':
          groupKey = getLastName(person.name)[0].toUpperCase();
          break;
        case 'ageAtDeathAsc':
        case 'ageAtDeathDesc':
          if (person.ageAtDeath === null || person.ageAtDeath === undefined) {
            groupKey = 'Unknown';
          } else if (person.ageAtDeath < 20) {
            groupKey = '0–19';
          } else if (person.ageAtDeath < 40) {
            groupKey = '20–39';
          } else if (person.ageAtDeath < 60) {
            groupKey = '40–59';
          } else if (person.ageAtDeath < 80) {
            groupKey = '60–79';
          } else {
            groupKey = '80+';
          }
          break;
        case 'deathYearAsc':
        case 'deathYearDesc':
          if (!person.deathYear) {
            groupKey = 'Unknown';
          } else {
            const decade = Math.floor(person.deathYear / 10) * 10;
            groupKey = `${decade}s`;
          }
          break;
        default:
          groupKey = person.name[0].toUpperCase();
      }
      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }
      groups[groupKey].push(person);
    });
    
    return groups;
  }, [filteredPeople, sortBy]);

  const letters = Object.keys(groupedPeople).sort((a, b) => {
    if (a === 'Unknown') return 1;
    if (b === 'Unknown') return -1;
    const cmp = a.localeCompare(b, undefined, { numeric: true });
    return (sortBy === 'ageAtDeathDesc' || sortBy === 'deathYearDesc') ? -cmp : cmp;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-2">The Dead</h1>
        <p className="text-black mb-6">
          Complete list of individuals buried in the cemetery
        </p>

        <div className="mb-6">
          <Input
            type="text"
            placeholder="Search by name or date..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-md"
          />
          <div className="flex items-center gap-2 mt-3">
            <span className="text-sm text-gray-600">Sort by:</span>
            {([
              ['lastName', 'Last Name'],
              ['ageAtDeathAsc', 'Age at Death (Youngest)'],
              ['ageAtDeathDesc', 'Age at Death (Oldest)'],
              ['deathYearAsc', 'Year of Death (Oldest)'],
              ['deathYearDesc', 'Year of Death (Youngest)'],
            ] as const).map(([value, label]) => (
              <button
                key={value}
                onClick={() => setSortBy(value)}
                className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${
                  sortBy === value
                    ? 'bg-blue-100 border-blue-300 text-blue-700'
                    : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-50'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          {letters.map((letter) => (
            <div key={letter}>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center min-w-10 h-10 px-3 rounded-full bg-blue-100">
                  <span className="font-semibold text-blue-700">{letter}</span>
                </div>
                <h2>{letter}</h2>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2">
                {groupedPeople[letter].map((person) => {
                  const plot = getPlotById(person.plotId);
                  const age = person.ageAtDeath ?? 'Unknown';
                  
                  return (
                    <Link key={person.id} to={`/person/${person.id}`}>
                      <Card className="hover:shadow-md transition-shadow h-full">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 flex-shrink-0">
                              <User className="size-6 text-gray-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold mb-1">{person.name}</h3>
                              <div className="space-y-1 text-sm text-gray-600">
                                <div className="flex items-center gap-1">
                                  <Calendar className="size-3" />
                                  <span>Died {person.deathYear ?? 'Unknown'}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <span>Age {age}</span>
                                </div>
                                {plot && (
                                  <div className="flex items-center gap-1">
                                    <MapPin className="size-3" />
                                    <span>Plot {plot.number}</span>
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="text-gray-400">→</div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {filteredPeople.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No people found matching your search.</p>
          </div>
        )}

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>Total:</strong> {people.length} individuals buried in this cemetery
          </p>
        </div>
      </div>
    </div>
  );
}