"use client";
import { X } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { CardDescription, CardHeader, CardTitle } from './ui/card';
import { UploadButton } from '@/lib/uploadthing';

export default function ImageUploader({ label, imageUrls, setImageUrls, endpoint }) {
  const handleImageRemove = (index) => {
    const updatedImages = imageUrls.filter((_, i) => i !== index);
    setImageUrls(updatedImages);
    console.log(updatedImages)
  };

  return (
    <div className={`grid auto-rows-max items-start gap-1`}>
      <CardHeader>
        <CardTitle>{label}</CardTitle>
        <CardDescription>{label}</CardDescription>
      </CardHeader>
      <div className="grid gap-2">
        {imageUrls && imageUrls.length > 0 ? (
          <>
            <div className="relative">
              <Image
                alt={label}
                className="aspect-square w-full rounded-md object-cover"
                height="300"
                src={imageUrls[0]}
                width="300"
              />
              <div
                className="absolute top-2 right-2 cursor-pointer"
                onClick={() => handleImageRemove(0)}
              >
                <X className="text-red-500" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {imageUrls.slice(1, 4).map((imgUrl, index) => (
                <div key={index} className="relative">
                  <div
                    className="absolute top-2 right-2 cursor-pointer shadow-md"
                    onClick={() => handleImageRemove(index + 1)}
                  >
                    <X className="text-red-500" />
                  </div>
                  <Image
                    alt={label}
                    className="aspect-square w-full rounded-md object-cover"
                    height="84"
                    src={imgUrl}
                    width="84"
                  />
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <Image
              alt="Placeholder"
              className="aspect-square w-full rounded-md object-cover"
              height="300"
              src="/placeholder.svg"
              width="300"
            />
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((_, index) => (
                <div key={index}>
                  <Image
                    alt="Placeholder"
                    className="aspect-square w-full rounded-md object-cover"
                    height="84"
                    src="/placeholder.svg"
                    width="84"
                  />
                </div>
              ))}
            </div>
          </>
        )}
        <div className="mt-4">
          <UploadButton
            endpoint={endpoint}
            onClientUploadComplete={(res) => {
              const newImages = res.map((item) => item.url);
              setImageUrls([...imageUrls, ...newImages]);
            }}
          />
        </div>
      </div>
    </div>
  );
}
