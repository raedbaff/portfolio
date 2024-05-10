import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>hello world</h1>
      <Image
      src="/portfolio/1.jpg" // Path to your image in the `public` directory
      alt="Image description"
      width={500} // Optional: Width of the image in pixels
      height={300} // Optional: Height of the image in pixels
    />
     <Image
      src="/portfolio/amedBg.png" // Path to your image in the `public` directory
      alt="Image description"
      width={500} // Optional: Width of the image in pixels
      height={300} // Optional: Height of the image in pixels
    />
    
    </>
  )
}
