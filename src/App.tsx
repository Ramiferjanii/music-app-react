import { useRef } from 'react';
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from 'react-icons/vsc';

import VariableProximity from './components/About/VariableProximity';
import BlobCursor from './components/BlobCursor';
import BlurText from './components/BlurText';
import Lightning from './components/Lightning';
import Particles from './components/Particles';
import ScrollVelocity from './components/ScrollVelocity';
import Dock from './components/SideBar/dock/Dock';
import TiltedCard from './components/SideBar/image/TiltedCard';
import Squares from './components/Squares';
import Threads from './components/Threads';
import TrueFocus from './components/TrueFocus';
import Skills from './components/Skills/Skills';
import ScrollFloat from './components/Scroll/ScrollFloat';

const App = () => {
  const items = [
    { icon: <VscHome size={18} />, label: 'Home', onClick: () => alert('Home!') },
    { icon: <VscArchive size={18} />, label: 'Archive', onClick: () => alert('Archive!') },
    { icon: <VscAccount size={18} />, label: 'Profile', onClick: () => alert('Profile!') },
    { icon: <VscSettingsGear size={18} />, label: 'Settings', onClick: () => alert('Settings!') },
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    
    <div style={{ width: '100%', height: '600px', position: 'relative' }}>
      {/* Lightning Background */}
      <div
        className="bg-black place-content-evenly"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      >
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={700}
          particleSpread={15}
          speed={0.1}
          particleBaseSize={80}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Foreground Content */}
      <div
        style={{
          display: 'flex',
          margin: '15px',
          color: 'white',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div className="fixed ml-56 md:w-auto h-[95vh]">
              <div className='md:box-decoration-slice flex-col justify-center place-items-center' >
            <TiltedCard
              imageSrc="https://media-hosting.imagekit.io/c1cecee343ae4ef8/WhatsApp%20Image%202024-11-27%20at%2022.31.36_647d253b.jpg?Expires=1838425590&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=gD3rfblQBZPob~kB-W0o~FLs0oDOyTrg5jdSFwXa0EnGXfETLPPvgQQ0zeauhX7Y~GVhiU4oZRUZnmXtKv9hOE4Hs4IgahyDOtopYrOeQZlF5ACFxOMW4omc0ebbwm4mjx-Op758Hne575CqvJ8B-g5T8wMcODsWsvf~Xn9QXkbmOZNxfyo4s7dZLj6U6K-8~We1IEujtJq3WWiSjx2wN32ZzVmek454c8jsmg8JpC1tukuxJozZesogOewDA8mP-xpiHk29CagiEBdv8Et09pwanJvTm9rgK8UGwnSY5mNEKZa53zzaDjQwbpKtGMputwDLEgXPjU~NCRa2jFvPqg__"
              altText="Rami Ben Ferjani"
              captionText="Rami Ben Ferjani"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={10}
              scaleOnHover={1}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={null}
            />
          

          <div className="hover:break-before-column my-[20%] place-items-center">
            <BlurText
              text="Rami Ben Ferjani"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-2xl mt-10 justify-items-center text-center mb-5"
            />
            <Skills/>
            <Dock items={items} panelHeight={70} baseItemSize={50} magnification={70} />
          </div>
        </div>
      </div>

        <div
          style={{
            textAlign: 'center',
            margin: 'auto',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <TrueFocus
            sentence="ABOUT ME"
            manualMode={false}
            blurAmount={5}
            borderColor="Blue"
            animationDuration={0.7}
            pauseBetweenAnimations={1}
          />
          <div ref={containerRef} style={{ position: 'relative' }}>
            <VariableProximity
              label={'Hover me! And then star React Bits on GitHub, lorem30 or else...'}
              className={'variable-proximity-demo'}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
