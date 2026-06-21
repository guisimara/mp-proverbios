const photos = [
  "/images/ps1.png",
  "/images/ps2.png",
  "/images/ps3.png",
  "/images/ps4.png",
  "/images/ps5.png",
  "/images/ps6.png",
];

export function Testimonials() {
  return (
    <section className="section bg-background">
      <div className="container-page text-center">
        <div className="divider-ornament">
          <span className="text-[0.8rem] tracking-[0.3em] uppercase">Depoimentos</span>
        </div>
        <h2 className="font-serif text-brown leading-tight">
          Mulheres que começaram essa jornada
        </h2>

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-5">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="card-soft overflow-hidden p-0 hover:shadow-elegant transition-shadow duration-300"
            >
              <img
                src={photo}
                alt={`Depoimento ${i + 1}`}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
