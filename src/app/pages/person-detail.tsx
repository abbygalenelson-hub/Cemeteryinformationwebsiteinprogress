import { useParams, useNavigate, Link } from 'react-router';
import { getPersonById, getPlotById, getRelatedPeople } from '../data/cemetery-data';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { ArrowLeft, Calendar, MapPin, Users, Info, Headphones } from 'lucide-react';
import { Separator } from '../components/ui/separator';

export function PersonDetail() {
  const { personId } = useParams<{ personId: string }>();
  const navigate = useNavigate();

  const person = personId ? getPersonById(personId) : undefined;
  const plot = person ? getPlotById(person.plotId) : undefined;
  const relatives = personId ? getRelatedPeople(personId) : [];

  if (!person) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="mb-4">Person Not Found</h1>
          <Button onClick={() => navigate('/')}>Return to Map</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6 gap-2"
        >
          <ArrowLeft className="size-4" />
          Back
        </Button>

        <Card>
          <div className="flex flex-col md:flex-row">
            <div className="flex-1">
              <CardHeader>
                <CardTitle>{person.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Basic Information Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-black">Death Year</p>
                    <p className="font-medium">{person.deathYear || 'Unknown'}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-black">Age at Death</p>
                    <p className="font-medium">{person.ageAtDeath !== null ? person.ageAtDeath : 'Unknown'}</p>
                  </div>
                  {person.familyKinshipGroup && (
                    <div className="space-y-1">
                      <p className="text-sm text-black">Family Kinship Group</p>
                      <p className="font-medium">{person.familyKinshipGroup}</p>
                    </div>
                  )}
                  {person.researchConfidence && (
                    <div className="space-y-1">
                      <p className="text-sm text-black">Strength of Evidence</p>
                      <p className="font-medium">{person.researchConfidence}</p>
                    </div>
                  )}
                </div>

                {/* Biography */}
                {person.notes && (
                  <>
                    <Separator />
                    <div>
                      <h3 className="font-semibold mb-2">Notes</h3>
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line"
                        dangerouslySetInnerHTML={{
                          __html: person.notes
                            .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                            .replace(/(?<!\w)_(.+?)_(?!\w)/g, '<em>$1</em>')
                        }}
                      />
                    </div>
                  </>
                )}

                <Separator />

                {/* Burial Location */}
                <div>
                  <h3 className="font-semibold mb-2">Burial Location</h3>
                  {plot && (
                    <Link to={`/plot/${plot.id}`}>
                      <div className="flex items-center gap-2 p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                        <MapPin className="size-4 text-gray-600" />
                        <span>Plot {plot.number}{plot.section ? `, Section ${plot.section}` : ''}</span>
                        <span className="ml-auto text-gray-400">→</span>
                      </div>
                    </Link>
                  )}
                </div>

                {/* Gravestone Information */}
                {(person.gravestoneType || person.materialCondition || person.gprStatus) && (
                  <>
                    <Separator />
                    <div>
                      <h3 className="font-semibold mb-3">Gravestone Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {person.gravestoneType && (
                          <div className="space-y-1">
                            <p className="text-sm text-black">Type</p>
                            <p className="font-medium">{person.gravestoneType}</p>
                          </div>
                        )}
                        {person.materialCondition && (
                          <div className="space-y-1">
                            <p className="text-sm text-black">Material / Condition</p>
                            <p className="font-medium">{person.materialCondition}</p>
                          </div>
                        )}
                        {person.gprStatus && (
                          <div className="space-y-1">
                            <p className="text-sm text-black">GPR Status</p>
                            <p className="font-medium">{person.gprStatus}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}

                {/* Family Relationships */}
                {relatives.length > 0 && (
                  <>
                    <Separator />
                    <div>
                      <h3 className="font-semibold mb-3 flex items-center gap-2">
                        <Users className="size-4" />
                        Family Relationships
                      </h3>
                      <div className="space-y-2">
                        {relatives.map((rel, index) => (
                          <Link
                            key={index}
                            to={`/person/${rel.person.id}`}
                            className="block"
                          >
                            <div className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                              <div className="flex-1">
                                <p className="font-medium">{rel.person.name}</p>
                                <p className="text-sm text-black capitalize">{rel.type}</p>
                              </div>
                              <div className="text-gray-400">→</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}