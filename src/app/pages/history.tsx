import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { MapPin, Users, Ruler, Clock } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '123',
    label: 'Recorded Burials',
    detail:
      'The current reconciled roster identifies 123 individuals buried in the cemetery.',
  },
  {
    icon: Clock,
    value: 'Pre-1834',
    label: 'In Use Before 1834',
    detail:
      'The cemetery was already functioning before the Post purchase, and the earliest recorded burial now tied to the roster is William Pearce in 1843.',
  },
  {
    icon: Ruler,
    value: '½ Acre',
    label: 'In Size',
    detail:
      'Despite its small footprint, the site preserves a long burial history and dense family clustering.',
  },
];

const timelineEvents = [
  {
    period: 'Pre-1834',
    heading: 'Earliest use as a burial ground',
    body: 'The cemetery was already being used before it was formally tied to the Post family. Some local traditions place its origins before 1800, but the documentary evidence is strongest for an early pioneer burial ground in use before 1834. The Old Kingston Road — known as the Cornell or Cornwall Road before the 1830s — was built in 1802, making a cemetery on the property before that date very unlikely.',
  },
  {
    period: '1833–1834',
    heading: 'The land passes to Jordan Post IV',
    body: 'Lot 6, Concession 1 was transferred to Jordan Post IV, and the cemetery became closely associated with the Post family and the growing Highland Creek community. Evidence suggests the burial ground itself might have been older than Post ownership.',
  },
  {
    period: '1843',
    heading: 'Earliest documented burial',
    body: 'Eleven-year-old William Pearce becomes the earliest documented burial on the property, providing the first firm date in the cemetery\'s recorded history. Although Malinda Woodruff Post died in 1838, her presence in the cemetery is the result of a reburial in 1900, when she was moved to the site along with Jordan Post, William Post, and Malinda Post from the Post family farm.',
  },
  {
    period: '1860',
    heading: 'A Methodist church is documented on the site',
    body: "By 1860, mapping evidence shows a Methodist church standing within the cemetery grounds. This marks the beginning of the site's role as both a burial place and a centre of worship for the local Wesleyan Methodist community.",
  },
  {
    period: '1867–1868',
    heading: 'The church is enlarged',
    body: 'The original church building was extended in the late 1860s, reflecting the continued importance of the congregation in Highland Creek. The cemetery and church functioned together as a shared sacred landscape.',
  },
  {
    period: '1891',
    heading: 'Worship shifts to Centennial Church',
    body: 'When the Methodist congregation moved to the new Centennial Church, the old church at the cemetery ceased to serve as an active place of worship. The graveyard, however, remained in use for family burials.',
  },
  {
    period: 'c. 1920–1921',
    heading: 'The church is removed, and the site becomes cemetery-only',
    body: 'In the early 1920s, the former church building was sold and removed from the property. From that point on, the site continued as a cemetery alone, with later burials and memorials reflecting both family connection and renewed heritage interest.',
  },
];

export function History() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Page header */}
        <h1 className="mb-2">Cemetery History</h1>
        <p className="text-black mb-10">
          The History of Highland Creek Wesleyan Methodist Cemetery
        </p>

        <div className="space-y-10">

          {/* Statistics */}
          <section>
            <h2 className="mb-4 flex items-center gap-2">
              <Users className="size-5" />
              Statistics
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <Card key={stat.label} className="text-center">
                    <CardContent className="pt-6 pb-6 flex flex-col items-center gap-2">
                      <Icon className="size-6 text-green-700 mb-1" />
                      <span className="text-3xl text-black">{stat.value}</span>
                      <span className="text-black">{stat.label}</span>
                      <p className="text-gray-600 text-sm leading-snug mt-1">{stat.detail}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Narrative overview */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="size-5" />
                  Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The Highland Creek Wesleyan Methodist Cemetery is one of Scarborough's oldest surviving burial grounds and an important record of early rural settlement in the eastern Toronto region. Located on Old Kingston Road, the half-acre site was already functioning as a place of burial before its formal association with the Post family in the 1830s. Although local tradition places its origins before 1800, the surviving documentary evidence more securely supports its use before 1834, when Lot 6, Concession 1 became associated with Jordan Post IV. As a result, the cemetery preserves a rare material link to the pioneer era of Highland Creek and to the development of kin-based burial practices within a growing agricultural community.
                </p>
                <p>
                  Over the course of the nineteenth century, the site evolved from a local burying ground into a combined religious and commemorative landscape. By 1860, a Wesleyan Methodist church stood on the property, and the structure was enlarged in the late 1860s to accommodate the needs of the congregation. The arrangement of burials in family rows, together with the insertion of a church among the gravestones, reveals how religious life, kinship, and collective memory were closely intertwined in rural Ontario. The cemetery functioned not simply as a resting place for the dead, but as a sacred community space that reflected local identity, belief, and belonging.
                </p>
                <p>
                  Even after the congregation moved to Centennial Church in 1891, the cemetery remained an active place of family interment and remembrance. Following the removal of the former church building in the early 1920s, the site continued as a cemetery alone. Today, its surviving gravestones, later memorials, and long continuity of use make it an important heritage landscape. The cemetery offers valuable insight into the history of settlement, the formation of Methodist community life, and the enduring role of burial grounds in preserving the memory of Scarborough's earliest families.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Timeline */}
          <section>
            <h2 className="mb-6 flex items-center gap-2">
              <Clock className="size-5" />
              Timeline
            </h2>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[7.5rem] top-0 bottom-0 w-px bg-green-300 hidden sm:block" />

              <div className="space-y-8">
                {timelineEvents.map((event, index) => (
                  <div key={index} className="sm:flex gap-6 items-start">
                    {/* Period label */}
                    <div className="w-30 shrink-0 text-right hidden sm:block">
                      <span className="text-black text-sm">{event.period}</span>
                    </div>

                    {/* Dot */}
                    <div className="relative hidden sm:flex items-center justify-center shrink-0 mt-1">
                      <div className="w-3.5 h-3.5 rounded-full bg-green-600 ring-2 ring-white z-10" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      {/* Mobile period label */}
                      <p className="text-green-700 text-sm mb-0.5 sm:hidden">{event.period}</p>
                      <h3 className="text-black mb-1">{event.heading}</h3>
                      <p className="text-gray-600 leading-relaxed">{event.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}