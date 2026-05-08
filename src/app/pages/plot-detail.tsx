import { useParams, useNavigate, Link } from 'react-router';
import { getPlotById, getPeopleInPlot } from '../data/cemetery-data';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { ArrowLeft, MapPin, User } from 'lucide-react';

export function PlotDetail() {
  const { plotId } = useParams<{ plotId: string }>();
  const navigate = useNavigate();

  const plot = plotId ? getPlotById(plotId) : undefined;
  const occupants = plotId ? getPeopleInPlot(plotId) : [];

  if (!plot) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="mb-4">Plot Not Found</h1>
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
          onClick={() => navigate('/')}
          className="mb-6 gap-2"
        >
          <ArrowLeft className="size-4" />
          Back to Map
        </Button>

        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="size-5" />
                  Plot {plot.number}
                </CardTitle>
                <p className="text-black mt-1">Section {plot.section}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-3">
                  {occupants.length === 0 && 'No Burials'}
                  {occupants.length === 1 && '1 Person Buried Here'}
                  {occupants.length > 1 && `${occupants.length} People Buried Here`}
                </h3>

                {occupants.length === 0 ? (
                  <p className="text-gray-600">This plot is currently available.</p>
                ) : (
                  <div className="space-y-3">
                    {occupants.map((person) => (
                      <Link
                        key={person.id}
                        to={`/person/${person.id}`}
                        className="block"
                      >
                        <div className="flex items-center gap-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100">
                            <User className="size-5 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">{person.name}</p>
                            <p className="text-sm text-gray-600">
                              {person.deathYear ? `d. ${person.deathYear}` : 'Death year unknown'}
                              {person.ageAtDeath !== null && person.ageAtDeath !== undefined ? `, age ${person.ageAtDeath}` : ''}
                            </p>
                          </div>
                          <div className="text-gray-400">→</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}