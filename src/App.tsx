
import { Deck, DefaultTemplate } from 'spectacle';

import 'reactflow/dist/style.css';
import { MocksSlide } from './slides/mocks';
import { FloMock } from './slides/flowMocks';
import { Snipet } from './slides/Snipet';

import mockTest from './lib/calculator/calculator.test.ts?raw'
import mockStub from './lib/registerBox/registerBox.test?raw'
import dependencyInjection from './lib/registerBox?raw'

const mockVsMock = 'Mock (tool) vs mock. (the test double)'

function App() {

  return (
    <Deck template={<DefaultTemplate />}>
      <MocksSlide />
      <FloMock />
      <Snipet title={'Dependency Injection'} md={dependencyInjection}/>
      <Snipet title={mockVsMock} md={mockTest}/>
      <Snipet title={mockVsMock} md={mockStub} />
    </Deck>
  );
}

export default App;
