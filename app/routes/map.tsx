import { LoaderFunction } from "@remix-run/node";
import { generateMapImage } from "~/utlis/generateMap";

export const loader: LoaderFunction = async ({ request }) => {
    const url = new URL(request.url);
    const lat = parseFloat(url.searchParams.get("lat") || "0");
    const lng = parseFloat(url.searchParams.get("lng") || "0");
    const zoom = parseInt(url.searchParams.get("zoom") || "14");

    if (lat === 0 || lng === 0) {
      return new Response("Missing latitude or longitude.", { status: 400 });
    }

    const mapImage = await generateMapImage(lat, lng, zoom);

    return new Response(mapImage, {
        headers: {
            "Content-Type": "image/png",
            "Cache-Control": "public, max-age=3600", // Optional caching
        },
    });
};
