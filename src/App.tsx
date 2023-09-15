
import { Deck, DefaultTemplate } from 'spectacle';

import 'reactflow/dist/style.css';
import { MocksSlide } from './slides/mocks';
import { FloMock } from './slides/flowMocks';
import { MockvsMock } from './slides/mockVsMock';

function App() {

  return (
    <Deck template={<DefaultTemplate />}>
      <MocksSlide />
      <FloMock />
      <MockvsMock />
    </Deck>
  );
}

export default App;
