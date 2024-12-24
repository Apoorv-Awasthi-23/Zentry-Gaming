import { useState } from "react";
import { useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

const CardTilt = ({ children, className }) => {
    const itemRef = useRef(null);
    const [transformStyle, setTransformStyle] = useState('');

    const handleMouseMove = (e) => {
        if (!itemRef.current)
            return;

        const { left, top, width, height } = itemRef.current.getBoundingClientRect();

        const relativeX = (e.clientX - left) / width;
        const relativeY = (e.clientY - top) / height;

        const tiltX = (relativeY - 0.5) * 10;
        const tiltY = (relativeX - 0.5) * -10;

        const newTransform = `perspective(700px) rotateX(${tiltX}deg)
         rotateY(${tiltY}deg) scale3d(0.98,0.98,0.98)`;
        
        setTransformStyle(newTransform);
     }
    
    const handleMouseLeave = () => {
        setTransformStyle('');
    }

    return (
        <div className={className} ref={itemRef}
            onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
            style={{ transform: transformStyle }}>
            {children}
        </div>
    )
}

const FeatureCard = ({ title, src, description }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        autoPlay
        muted
        className="absolute top-0 left-0 size-full object-cover object-center"
      />
      <div
        className="relative z-10 size-full flex flex-col 
        justify-between p-5 text-blue-50"
      >
        <div>
          <h1 className="featureCard-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => (
  <section className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-50">
          Into the Metagame Layer
        </p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          Immerse yourself in a rich and ever-expanding universe where a vibrant
          array of products converge into an interconnected overlay experience
          on your world.
        </p>
      </div>

      <CardTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <FeatureCard
          src="videos/feature-1.mp4"
          title={
            <>
              radia<b>n</b>t
            </>
          }
          description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
          isComingSoon
        />
      </CardTilt>

      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <CardTilt className="card-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <FeatureCard
            src="videos/feature-2.mp4"
            title={
              <>
                zig<b>m</b>a
              </>
            }
            description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
            isComingSoon
          />
        </CardTilt>

        <CardTilt className="card-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <FeatureCard
            src="videos/feature-3.mp4"
            title={
              <>
                n<b>e</b>xus
              </>
            }
            description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
            isComingSoon
          />
        </CardTilt>

        <CardTilt className="card-tilt_1 me-14 md:col-span-1 md:me-0">
          <FeatureCard
            src="videos/feature-4.mp4"
            title={
              <>
                az<b>u</b>l
              </>
            }
            description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
            isComingSoon
          />
        </CardTilt>

        <CardTilt className="card-tilt_2">
          <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
            <h1 className="featureCard-title special-font max-w-64 text-black">
              M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
            </h1>

            <TiLocationArrow className="m-5 scale-[5] self-end" />
          </div>
        </CardTilt>

        <CardTilt className="card-tilt_2">
          <video
            src="videos/feature-5.mp4"
            loop
            muted
            autoPlay
            className="size-full object-cover object-center"
          />
        </CardTilt>
      </div>
    </div>
  </section>
);

export default Features;