import { useLenis } from './hooks/useLenis';
import { Hero } from './sections/Hero';
import { Mission } from './sections/Mission';
import { Capabilities } from './sections/Capabilities';
import { Engineering } from './sections/Engineering';
import { Contact } from './sections/Contact';

function App() {
  useLenis();

  return (
    <div className="bg-deep-black">
      <Hero />
      <Mission />
      <Capabilities />
      <Engineering />
      <Contact />
    </div>
  );
}

export default App;
