import svg1 from '../../images/svg-1.svg'
import svg2 from '../../images/svg-2.svg'
//import svg3 from '../../images/svg-3.svg'

export const homeObjAbout = {
 id: 'about',
 lightBg: false,
 lightHeading: true,
 lightDesc: true,
 topLine: 'About Me',
 heading: '',
 description:
  'I am leading a team with the objective of analyzing and solving known problems throughout LATAM developing innovative solutions and giving VTEX IO trainings.',
 imgStart: false,
 img: svg1,
 alt: 'developer',
 buttonLabel: '',
 primary: true,
 dark: true,
 headingTwo1: 'My name is ',
 headingTwo2: 'Germán',
 headingTwo3: ' and I am an ',
 headingTwo4: 'Apps Engineer',
 headingTwo5: ' of the ',
 headingTwo6: 'VTEX',
 headingTwo7: ' Regional Product Team LATAM',
}

export const homeObjSkills = {
 id: 'skills',
 lightBg: true,
 lightHeading: false,
 lightDesc: false,
 topLine: 'Skills',
 heading: 'At vero eos et accusamus et iusto odio dignissimos ducimus',
 description:
  'Since I started my path as a developer almost 5 years ago, I have worked and learned many technologies and methodologies.',
 description2:
  'Starting with Visual Basic in my first job at IPLUSB S.A, then at ALTOCOM S.R.L. I work as a co-analyst, developer, tester... all in one. So I had to internalize new knowledge like Oracle APEX, Oracle Database and PL/SQL, and when all of this was not enogth to accomplish the client needs, I began to learn JavaScript by trial and error on my own.',
 description3:
  'Currently at VTEX I had the biggest challenge so far since I had to learn TypeScript, React with Hooks, GraphQL and NodeJS to be able to develop applications and support customers and partners. As a leader I had to improve my team management by implementing Scrum as an agile methodology and defining workflows with the other teams we support.',
 description4:
  'Parallel to my entire career, I have been studying since 2016 at the Universidad Nacional de Avellaneda to be a Software Engineer.',
 imgStart: true,
 skills: [
  'C++',
  'Java',
  'Visual Basic',
  'Oracle Database',
  'Oracle APEX',
  'PL/SQL',
  'JavaScript',
  'TypeScript',
  'React with Hooks',
  'GraphQL',
  'NodeJS',
  'git',
  'Scrum',
 ],
 buttonLabel: '',
 primary: false,
 dark: false,
}

export const homeObjTraining = {
 id: 'trainings',
 lightBg: false,
 lightHeading: true,
 lightDesc: true,
 topLine: 'Trainings',
 heading: 'Here you can see the workouts I did... and there will be more',
 description:
  'Giving training is one of the things I enjoy the most and where I can internalize knowledge by helping others to be better in the process.',
 imgStart: false,
 alt: '',
 buttonLabel: '',
 primary: true,
 dark: true,
}

export const homeObjContact = {
 id: 'contact',
 lightBg: true,
 lightHeading: false,
 lightDesc: false,
 topLine: 'Contact',
 heading: '',
 description:
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
 imgStart: true,
 img: svg2,
 alt: 'developer',
 buttonLabel: '',
 primary: true,
 dark: true,
}
