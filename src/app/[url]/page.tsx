import { notFound, redirect } from "next/navigation";
import { getUrlMapping } from "../db-interactions/url-shortener";


export default async function Page({ params }: { params: { url: string } }) {
  const longUrl = await getUrlMapping(params.url);

  redirect(longUrl ?? notFound());
}
