import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { RobustImage } from '../components/robust-image';
import graveMapImage from '../../imports/grave_map-1.jpg';
import droneImage from '../../imports/July11_500MHz_Plot1_drone_mm+labels.png';
import timesliceImage from '../../imports/timeslice_1.04_m_depth_heat-1.png';

export function GroundPenetratingRadar() {
  const surveyAreas = [
    { date: 'June 16', detail: '500 MHz plot, 4 × 12.4 m' },
    { date: 'June 18', detail: '500 MHz plot, 4 × 18 m' },
    { date: 'June 18', detail: '500 MHz plot, 23.4 × 1.75 m' },
    { date: 'July 11', detail: '200 MHz plot, 4 × 21.5 m with a lower section of about 8.5 × 11.75 m' },
    { date: 'July 11', detail: '500 MHz plot, 2 × 24 m' },
    { date: 'July 11', detail: '500 MHz plot, 15.5 × 3.75 m' },
    { date: 'October 14', detail: '250 MHz plot, 8.7 × 4.25 m' },
    { date: 'October 14', detail: '500 MHz plot, 6 × 7.25 m' },
    { date: 'October 14', detail: '250 MHz plot, 4 × 11.3 m' },
  ];

  const mapLegend = [
    { label: 'Headstones / monuments', description: 'visible grave markers' },
    { label: 'Footstones', description: 'smaller markers placed at the foot of a grave' },
    { label: 'Buried stones', description: 'markers partly or fully below the surface' },
    { label: 'Probable burials', description: 'anomalies likely to represent burials' },
    { label: 'Suspected burials', description: 'anomalies that may represent burials' },
    { label: 'To be surveyed', description: 'areas not yet covered by GPR' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Page Title */}
        <h1 className="mb-2">Ground-Penetrating Radar at Highland Creek Wesleyan Cemetery</h1>

        {/* Intro */}
        <p className="text-black mb-8 leading-relaxed">
          Ground-penetrating radar, or GPR, is helping us better understand the Highland Creek Wesleyan Cemetery without disturbing the ground. This work is part of a larger non-invasive study that combines archival research, surface mapping, and subsurface survey to improve the cemetery record and identify burials, buried markers, and other features no longer visible above ground.
        </p>

        {/* GPR Survey Map Image */}
        <div className="mb-10">
          <RobustImage
            src={graveMapImage}
            alt="Annotated Cemetery GPR Survey Map"
            className="w-full h-auto rounded-lg border border-gray-300 shadow-sm mb-6"
            retries={3}
          />
        </div>

        <div className="space-y-6 mt-16">

          {/* Reading the Map */}
          <Card>
            <CardHeader>
              <CardTitle>Reading the map</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>The map combines visible markers with interpreted survey results:</p>
              <ul className="space-y-2">
                {mapLegend.map((item, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="font-semibold text-black shrink-0">{item.label}</span>
                    <span className="text-gray-600">= {item.description}</span>
                  </li>
                ))}
              </ul>
              <p className="pt-2">
                The cemetery is one of Highland Creek's earliest burial grounds and was in use before 1834. It later became an important religious and community site, with a Methodist church standing among the graves for many decades.
              </p>
            </CardContent>
          </Card>

          {/* What is GPR? */}
          <Card>
            <CardHeader>
              <CardTitle>What is GPR?</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 leading-relaxed">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <p className="flex-1">
                  GPR is a non-invasive method that sends radar pulses into the ground and records how they reflect back from buried materials, soil changes, and underground disturbances. In a cemetery, those reflections can help identify possible graves, buried or sunken stones, and traces of older structures. GPR does not identify individuals by itself, but it helps reveal patterns below the surface that can be compared with visible markers and historical records.
                </p>
                <div className="w-full md:w-[43%] flex flex-col gap-4">
                  <RobustImage
                    src={droneImage}
                    alt="GPR Survey Drone View"
                    className="w-full h-auto rounded-lg border border-gray-300 shadow-sm"
                    retries={3}
                  />
                  <RobustImage
                    src={timesliceImage}
                    alt="GPR Timeslice Heat Map"
                    className="w-full h-auto rounded-lg border border-gray-300 shadow-sm"
                    retries={3}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How the GPR Survey Works */}
          <Card>
            <CardHeader>
              <CardTitle>How the GPR survey works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                At Highland Creek Wesleyan Cemetery, rectangular survey grids were laid out over selected parts of the site, usually to target burial rows or clusters of markers. The radar units were pulled across the ground in straight, closely spaced transects, with lines generally set about 0.25 m apart and a step size of 0.025 m. Survey lines were oriented roughly northwest to southeast so they crossed the east-facing burial rows effectively. Both systems used wheel odometers to measure distance accurately.
              </p>
              <p>
                Two GPR systems were used during the project: a Mala Ramac X3M with 250 MHz and 200 MHz antennas, and a Sensors &amp; Software Noggin with a 500 MHz antenna. Lower-frequency antennas can help detect broader, deeper features, while higher-frequency antennas can give sharper detail in shallower areas.
              </p>
              <p>
                After field collection, the radar data was processed in ReflexW software. This included time-zero or static correction to align the signal properly, dewow filtering to remove low-frequency noise, gain to strengthen weaker deeper reflections, and background removal to reduce horizontal banding and make discrete anomalies easier to see. The processed 2D profiles were then compared across transects and, in some cases, combined into 3D time slices to map anomalies by depth. Signal velocity was estimated by fitting hyperbolas in the data, which helped convert travel time into approximate depth.
              </p>
            </CardContent>
          </Card>

          {/* Survey Areas and Conditions */}
          <Card>
            <CardHeader>
              <CardTitle>Survey areas and conditions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                GPR survey work was carried out in June, July, and October 2025 across multiple plots in the cemetery. The 2025 survey areas included:
              </p>
              <ul className="space-y-1.5">
                {surveyAreas.map((area, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="font-semibold text-black shrink-0">{area.date}:</span>
                    <span>{area.detail}</span>
                  </li>
                ))}
              </ul>
              <p>
                Estimated signal velocities in the June and July surveys were generally around 0.13 m/ns, suggesting relatively dry sandy conditions. In October, the recorded velocities ranged more widely, from 0.115 to 0.18 m/ns, reflecting changing ground conditions including dry sandy soil and sandy loam.
              </p>
            </CardContent>
          </Card>

          {/* What the Results Show */}
          <Card>
            <CardHeader>
              <CardTitle>What the results show</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The GPR results show that the cemetery contains both visible and hidden features. Across the surveyed areas, anomalies consistent with possible burials, buried footstones, sunken grave markers, and other subsurface disturbances have been identified. These findings help expand the cemetery record beyond what can be seen above ground.
              </p>
              <p>
                One October 14 survey area, examined with a 250 MHz system over a plot measuring 8.7 × 4.25 m, identified several anomalies that may correspond to known burials and at least one possible unmarked burial. Near-surface reflections may also represent buried footstones no longer visible at the surface.
              </p>
              <p>
                Another October 14 survey area, examined with a 500 MHz system over a 6 × 7.25 m plot in the southeast corner of the cemetery, identified 19 burial-sized anomalies at three different depths and at least 6 potential sunken grave markers. Some weaker reflections appear to correspond with older, more weathered nineteenth-century burials, while stronger anomalies may represent later or more substantial subsurface features.
              </p>
              <p>
                Together, these surveys show that some burials still correspond clearly with visible markers, while others survive only as subsurface anomalies or buried stones. GPR is therefore an important tool in reconstructing the cemetery's layout and identifying features that have been lost, shifted, or covered over time.
              </p>
            </CardContent>
          </Card>

          {/* Why This Matters */}
          <Card>
            <CardHeader>
              <CardTitle>Why this matters</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 leading-relaxed">
              <p>
                The Highland Creek Wesleyan Cemetery has incomplete records. Early burial records were lost, and many markers have weathered, broken, sunk, or disappeared. By combining GPR with visible grave markers, documentary research, and family history, researchers can build a fuller and more respectful record of the people buried here.
              </p>
            </CardContent>
          </Card>

          {/* A Note on Interpretation */}
          <Card>
            <CardHeader>
              <CardTitle>A note on interpretation</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 leading-relaxed">
              <p>
                GPR results must always be read carefully. Not every anomaly is a grave, and not every grave produces a strong signal. The strongest interpretations come from combining geophysical survey with mapped stones, historical documents, and genealogical research.
              </p>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}