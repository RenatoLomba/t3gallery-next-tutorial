const mockUrls = [
  "https://utfs.io/f/8c686885-f676-4972-b44d-1fa193a8159e-2x3qsm.jpeg",
  "https://utfs.io/f/97f3f12d-9b56-4142-9a4d-4d9036edabce-lkbnqm.jpg",
  "https://utfs.io/f/371d9319-1df2-4d30-ac64-456238987850-fppexl.webp",
  "https://utfs.io/f/5ef23de4-049f-4dde-839b-64f1ee763238-jeqbbz.jpg",
];

const mockImages = mockUrls.map((url, idx) => ({
  id: idx + 1,
  url,
}));

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map(
          (image) => (
            <div key={image.id} className="w-48">
              <img src={image.url} alt="" className="w-full" />
            </div>
          ),
        )}
      </div>
    </main>
  );
}
