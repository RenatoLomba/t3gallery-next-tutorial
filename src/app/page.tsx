import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "../server/db";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => (
        <div key={"image_" + image.id} className="flex w-48 flex-col">
          <img src={image.url} alt="" className="w-full" />

          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="h-full">
      <SignedOut>
        <div className="flex h-full w-full items-center justify-center text-2xl">
          Please sign in above
        </div>
      </SignedOut>

      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
