import { prisma } from "./db";

export async function createShortUrlMapping(longUrl: string){
  let shortUrl = generateUniqueString();

  //check if shortUrl already exist in db, if so, generate another one
  while (await getUrlMapping(shortUrl) != undefined) {
    shortUrl = generateUniqueString();
  }

  await prisma.urlMapping.create({
    data: {
      url: longUrl,
      shortUrl
    }
  })

  return shortUrl;
}

export async function getUrlMapping(shortUrl: string){
  const mapping = await prisma.urlMapping.findUnique({
    where: {
      shortUrl
    }
  })

  return mapping?.url
}


function generateUniqueString() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 4; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}