import { Heading, Slide } from "spectacle";
import { MockGraph } from "./mocks.graphs";

export const MocksSlide = ()=> (<Slide>
    <Heading>Test doubles</Heading>
    <p>proviene del termino "doble de accion"</p>
    <MockGraph />
  </Slide>
)
