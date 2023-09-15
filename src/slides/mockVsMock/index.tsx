import { Heading, Markdown, Slide } from "spectacle"
import mockTest from './test.md?raw'

export const MockvsMock = ()=>(
  <Slide>
  <Heading>
    Mock (tool) vs mock. (the test double)
  </Heading>
  <Markdown>
     {mockTest}
  </Markdown>
</Slide>
)
