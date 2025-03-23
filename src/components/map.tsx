"use client";

export default function Map() {
  return (
    <div className="w-full flex bg-black items-center justify-around">
      <div className="w-full">
        <iframe
          width="100%"
          height="260"
          src="https://maps.google.com/maps?width=100%25&amp;height=260&amp;hl=en&amp;q=Drewnowska%20102,%2091-008%20%C5%81%C3%B3d%C5%BA+(Mieczkowski%20Atelier)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </div>
  );
}
