import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import HomePage from "@/components/HomePage";
import FeatureProduct from "@/components/HomePage/FeatureProduct/FeatureProduct";

const getBannerImage = async () => {
  const query = `*[_type == "banner"][0]`;
  const query2 = `*[_type == 'products'][0...4] | order(_createdAt desc){
    _id,
    name,
      price,
      "model" : models->model,
      "bannerImage" : images[0],
      "slug" : slug.current
      
  }`
  const response = await client.fetch(query);
  const response2 = await client.fetch(query2)
  return {response , response2};
};

export default async function Home() {
  const data   = await getBannerImage();
  console.log(data)
  // console.log(data)
  return (
    <section className="flex flex-col h-[200vh] px-3  gap-4 w-full">
     <HomePage data={data.response} />
     <FeatureProduct data={data.response2} />
    </section>
  );
}
