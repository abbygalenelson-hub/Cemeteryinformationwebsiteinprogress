import { Card, CardContent } from '../components/ui/card';
import { RobustImage } from '../components/robust-image';
import { ImageIcon } from 'lucide-react';
import img1 from '../../imports/58798951_d9b75682-55b1-4013-934b-1edcb99e296d.jpeg';
import img2 from '../../imports/58799419_128474859159.jpg';
import img3 from '../../imports/103770140_14ccb26d-5052-4086-9ef0-3e768027201e.png';
import img4 from '../../imports/IMG_8099.jpg';
import img5 from '../../imports/IMG_8100.jpg';
import img6 from '../../imports/IMG_8101.jpg';
import img7 from '../../imports/IMG_8106.jpg';
import img8 from '../../imports/IMG_8107.jpg';
import img9 from '../../imports/IMG_8108.jpg';
import img10 from '../../imports/old_danforth_road.jpg';
import img11 from '../../imports/timeslice_1.04_m_depth_heat.png';
import img12 from '../../imports/c84d3ba4-d168-4565-a810-a8931490d050.jpg';
import img13 from '../../imports/HCC_GPR_interp_June_15_500_MHz_plot_1.jpg';
import img14 from '../../imports/DJI_0940.JPG';
import img15 from '../../imports/IMG_8177.jpg';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  description?: string;
}

export function Gallery() {
  // Add your custom images here
  const galleryImages: GalleryImage[] = [
    {
      id: '1',
      src: img1,
      alt: 'Cemetery photograph 1',
      description: ''
    },
    {
      id: '2',
      src: img2,
      alt: 'Cemetery photograph 2',
      description: ''
    },
    {
      id: '3',
      src: img3,
      alt: 'Cemetery photograph 3',
      description: ''
    },
    {
      id: '4',
      src: img4,
      alt: 'Cemetery photograph 4',
      description: ''
    },
    {
      id: '5',
      src: img5,
      alt: 'Cemetery photograph 5',
      description: ''
    },
    {
      id: '6',
      src: img6,
      alt: 'Cemetery photograph 6',
      description: ''
    },
    {
      id: '7',
      src: img7,
      alt: 'Cemetery photograph 7',
      description: ''
    },
    {
      id: '8',
      src: img8,
      alt: 'Cemetery photograph 8',
      description: ''
    },
    {
      id: '9',
      src: img9,
      alt: 'Cemetery photograph 9',
      description: ''
    },
    {
      id: '12',
      src: img10,
      alt: 'Old Danforth Road',
      description: ''
    },
    {
      id: '13',
      src: img11,
      alt: 'GPR Time Slice at 1.04m Depth',
      description: ''
    },
    {
      id: '14',
      src: img12,
      alt: 'Cemetery photograph 14',
      description: ''
    },
    {
      id: '15',
      src: img13,
      alt: 'GPR Interpretation Plot',
      description: ''
    },
    {
      id: '16',
      src: img14,
      alt: 'Aerial cemetery view',
      description: ''
    },
    {
      id: '17',
      src: img15,
      alt: 'Cemetery photograph 17',
      description: ''
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="mb-2">Gallery</h1>
        </div>

        {galleryImages.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <ImageIcon className="size-12 mx-auto mb-4 text-gray-300" />
              <p className="text-gray-500">No images have been added to the gallery yet.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <Card key={image.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[3/4] overflow-hidden">
                  <RobustImage
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    retries={3}
                  />
                </div>
                {image.description && (
                  <CardContent className="p-4">
                    <p className="text-xs text-gray-700">
                      {image.description}
                    </p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}