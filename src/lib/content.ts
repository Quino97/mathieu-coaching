export type Athlete = { name: string; event: string; before: string; after: string; delta: string; quote: string; focus: string };
export type Plan = { name: string; price: string; cadence: string; summary: string; included: string[]; featured?: boolean };

export const site = {
  coachName: 'Mathieu',
  brand: 'Mathieu Coaching',
  email: 'hello@mathieucoaching.com',
  location: 'Cape Town, South Africa',
  intro: 'For runners who want their training to mean something.',
  philosophy: [
    ['Train the person.', 'The plan begins with your actual week, your history and what you care about — not a template.'],
    ['Earn the hard days.', 'Progress comes from repeatable work, recovery and the patience to build when nobody is watching.'],
    ['Race with clarity.', 'Simple numbers. Honest feedback. A calm head when the effort starts to bite.']
  ],
  achievements: [
    'COACHING / PERFORMANCE / ENDURANCE', 'ATHLETE-FIRST PROGRAMMING', 'RACE-DAY STRATEGY', 'SOUTH AFRICA / WORLDWIDE',
    'COACHING / PERFORMANCE / ENDURANCE', 'ATHLETE-FIRST PROGRAMMING', 'RACE-DAY STRATEGY', 'SOUTH AFRICA / WORLDWIDE'
  ],
  athletes: [
    { name: 'Athlete One', event: 'Marathon', before: '3:42', after: '3:21', delta: '−21 min', quote: 'A clear plan made space for work, life and a result I actually believed in.', focus: 'Consistency + long-run confidence' },
    { name: 'Athlete Two', event: 'Half marathon', before: '1:46', after: '1:34', delta: '−12 min', quote: 'We stopped chasing every session and started building a proper season.', focus: 'Threshold + race execution' },
    { name: 'Athlete Three', event: '10 km', before: '49:30', after: '43:48', delta: '−5:42', quote: 'The training was precise without taking over my life.', focus: 'Speed endurance + strength' }
  ] as Athlete[],
  plans: [
    { name: 'Foundation', price: 'R1,100', cadence: 'per month', summary: 'A sensible training structure for the runner building a durable base.', included: ['Monthly training block', 'One feedback call', 'Email check-in'] },
    { name: 'Performance', price: 'R1,850', cadence: 'per month', summary: 'Personal coaching for an event you are serious about.', included: ['Weekly adaptive plan', 'TrainingPeaks feedback', 'Two calls per month', 'Race-week strategy'], featured: true },
    { name: 'Race Project', price: 'R3,200', cadence: 'per project', summary: 'A focused, four-week race build for a clear goal and date.', included: ['4-week plan', 'Pacing + fueling brief', 'Race-day debrief'] }
  ] as Plan[]
};

export const getContent = () => {
  if (typeof localStorage === 'undefined') return site;
  try { return { ...site, ...JSON.parse(localStorage.getItem('mathieu-content') || '{}') }; } catch { return site; }
};

export const saveContent = (value: typeof site) => localStorage.setItem('mathieu-content', JSON.stringify(value));
