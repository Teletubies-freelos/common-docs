import { Markdown, Slide,  } from "spectacle"

interface SnipetProps {
  md: string;
  title: string;
  language?: string;
}

export const Snipet = ({ md, title, language = 'tsx' }: SnipetProps)=>(
  <Slide>
    <h1>
      {title}
    </h1>
    <Markdown>
      {'```' + `${language}\n`+ md + '\n```'}
    </Markdown>
  </Slide>
)
