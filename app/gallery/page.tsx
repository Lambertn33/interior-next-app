import React from "react";

const Gallery = () => {
  return (
    <div className="container py-10  grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="flex flex-col gap-4">
        <div>
          <img
            src="/images/badroom.jpg"
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            alt=""
          />
        </div>
        <div>
          <img
            src="/images/gallery2.jpg"
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            alt=""
          />
        </div>
        <div>
          <img
            src="/images/gallery.jpg"
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <img
            src="/images/swiper1.jpg"
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            alt=""
          />
        </div>
        <div>
          <img
            src="/images/gallery11.jpg"
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            alt=""
          />
        </div>
        <div>
          <img
            src="/images/living.jpg"
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <img
            src="/images/gallery14.jpg"
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            alt=""
          />
        </div>
        <div>
          <img
            src="/images/gallery15.jpg"
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            alt=""
          />
        </div>
        <div>
          <img
            src="/images/gallery12.jpg"
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <img
            src="/images/gallery7.jpg"
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            alt=""
          />
        </div>
        <div>
          <img
            src="/images/gallery11.jpg"
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            alt=""
          />
        </div>
        <div>
          <img
            src="/images/gallery.jpg"
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
