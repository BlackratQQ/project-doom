import React, { useEffect } from 'react';
import 'particles.js/particles';

const ParticlesComponent = () => {
  useEffect(() => {
    particlesJS.load('particles-js', '/ParticlesConfig.json', function () {
      console.log('particles.js loaded - callback');
    });
  }, []);

  return (
    <div
      id='particles-js'
      style={{ position: 'absolute', width: '100%', height: '100%' }}>
      {/* The particles will be loaded into this div */}
    </div>
  );
};

export default ParticlesComponent;
