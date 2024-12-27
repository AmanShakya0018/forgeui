import Image from 'next/image';
import React from 'react';

const Gallery = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div>
        <Image className="h-auto max-w-full rounded-lg" width={180} height={180} src="/dummyimage.jpg" alt="Image 1" />
      </div>
      <div>
        <Image className="h-auto max-w-full rounded-lg" width={180} height={180} src="/dummyimage.jpg" alt="Image 2" />
      </div>
      <div>
        <Image className="h-auto max-w-full rounded-lg" width={180} height={180} src="/dummyimage.jpg" alt="Image 3" />
      </div>
      <div>
        <Image className="h-auto max-w-full rounded-lg" width={180} height={180} src="/dummyimage.jpg" alt="Image 4" />
      </div>
      <div>
        <Image className="h-auto max-w-full rounded-lg" width={180} height={180} src="/dummyimage.jpg" alt="Image 5" />
      </div>
      <div>
        <Image className="h-auto max-w-full rounded-lg" width={180} height={180} src="/dummyimage.jpg" alt="Image 6" />
      </div>
      <div>
        <Image className="h-auto max-w-full rounded-lg" width={180} height={180} src="/dummyimage.jpg" alt="Image 7" />
      </div>
      <div>
        <Image className="h-auto max-w-full rounded-lg" width={180} height={180} src="/dummyimage.jpg" alt="Image 8" />
      </div>
      <div>
        <Image className="h-auto max-w-full rounded-lg" width={180} height={180} src="/dummyimage.jpg" alt="Image 9" />
      </div>
      <div>
        <Image className="h-auto max-w-full rounded-lg" width={180} height={180} src="/dummyimage.jpg" alt="Image 10" />
      </div>
      <div>
        <Image className="h-auto max-w-full rounded-lg" width={180} height={180} src="/dummyimage.jpg" alt="Image 11" />
      </div>
      <div>
        <Image className="h-auto max-w-full rounded-lg" width={180} height={180} src="/dummyimage.jpg" alt="Image 12" />
      </div>
    </div>
  );
};

export default Gallery;
