// Everything on the site comes from this file. Edit here to change content.

export type IconName =
  | 'warehouse' | 'database' | 'phone' | 'cpu' | 'megaphone' | 'graduation'
  | 'code' | 'brain' | 'cloud' | 'workflow' | 'server' | 'sparkles'

export type Title = {
  id: string
  title: string
  kind: string // shown like "Series" / "Documentary"
  tagline: string
  year?: string // leave out when unknown
  badge?: string // e.g. "Client Project"
  genres: string[]
  stack: string[]
  synopsis: string
  episodes: { title: string; body: string }[]
  icon: IconName
  // poster gradient: [from, via, to]
  palette: [string, string, string]
  link?: { label: string; href: string }
}

export const profile = {
  name: 'Mourya Reddy',
  headline: 'AI / ML Undergraduate · Software & Product Builder · Growth Automation',
  location: 'Bengaluru, India',
  email: 'mouryaroopesh@gmail.com',
  phone: '+91 96634 05584',
  github: 'https://github.com/candiate32',
  booking: 'https://cal.com/mourya-reddy-jlchbi/book-a-meeting-with-me',
  summary:
    'Artificial Intelligence and Machine Learning undergraduate with an interdisciplinary focus on applied AI, full-stack product development, workflow automation, and digital growth. I like turning technical ideas into practical products through structured problem-solving, rapid prototyping, and product-oriented thinking.',
}

export const titles: Record<string, Title> = {
  gastronomix: {
    id: 'gastronomix',
    title: 'Gastronomix',
    kind: 'Limited Series',
    tagline: 'From supplier truck to cloud-kitchen plate. Every crate, accounted for.',
    badge: 'Client Project',
    genres: ['Operations', 'Full-Stack', 'Real Client'],
    stack: ['Inventory system', 'Web development', 'Stock tracking'],
    synopsis:
      'An end-to-end inventory-tracking system built for a real client, connecting supplier deliveries, warehouse stock and cloud-kitchen inventory in one operational workflow, shipped together with the business\'s website.',
    episodes: [
      { title: 'The Supply Line', body: 'Connected supplier deliveries, warehouse stock and cloud-kitchen inventory into a single operational workflow.' },
      { title: 'Follow the Stock', body: 'Structured the flow around stock movement and visibility across stages, so teams can trace supplies from receipt through warehouse handling to kitchen usage.' },
      { title: 'Front of House', body: 'Developed the Gastronomix website alongside the operational system, giving the business a dedicated web presence.' },
    ],
    icon: 'warehouse',
    palette: ['#7c2d12', '#ea580c', '#fbbf24'],
  },
  cachet: {
    id: 'cachet',
    title: 'Cachet',
    kind: 'Original Series',
    tagline: 'Why pay an LLM twice for the same question?',
    badge: 'College Project',
    genres: ['Applied AI', 'LLM Infra', 'Cost Engineering'],
    stack: ['Python', 'FastAPI', 'Embeddings', 'PostgreSQL / Supabase', 'LLM APIs'],
    synopsis:
      'AI query retrieval with intelligent caching: match semantically similar questions and reuse a suitable answer instead of relying only on exact-string matches, cutting repeated inference, latency and API cost.',
    episodes: [
      { title: 'Same Question, Different Words', body: 'Developed a product concept for semantic matching of similar queries and reusing suitable responses rather than relying only on exact-string matches.' },
      { title: 'Cache-Aware Routing', body: 'Explored routing that reduces repeated inference, response latency and API costs while weighing relevance and freshness.' },
    ],
    icon: 'database',
    palette: ['#1e1b4b', '#4f46e5', '#22d3ee'],
  },
  voice: {
    id: 'voice',
    title: 'Dial-Up',
    kind: 'Limited Series',
    tagline: 'An AI that calls the lead, qualifies them, and fills in the CRM.',
    badge: 'Client Project',
    genres: ['Conversational AI', 'Telephony', 'CRM'],
    stack: ['Exotel', 'SIP', 'Voice APIs', 'Conversational AI', 'HubSpot CRM'],
    synopsis:
      'AI voice calling and lead qualification: a client workflow that takes a lead from intake to an outbound call, qualifies them in conversation, captures structured data and hands off to the CRM.',
    episodes: [
      { title: 'Ring Ring', body: 'Mapped a workflow connecting lead intake, outbound calls, conversational qualification, structured data capture and CRM handoff.' },
      { title: 'Wiring the Voice', body: 'Explored integrations among telephony, LLM-driven dialogue, voice generation and workflow automation.' },
    ],
    icon: 'phone',
    palette: ['#064e3b', '#059669', '#a3e635'],
  },
  engos: {
    id: 'engos',
    title: 'Engineering OS',
    kind: 'Developer Tooling',
    tagline: 'Give your AI pair-programmer a memory, a rulebook and a team.',
    badge: 'In Use for Development',
    genres: ['AI Agents', 'Dev Tools', 'Knowledge Graphs'],
    stack: ['Multi-agent orchestration', 'Code graphs', 'LLMs'],
    synopsis:
      'An AI-native engineering OS: persistent project context, reusable engineering rules, graph-based code knowledge and multi-agent task orchestration for AI-assisted development.',
    episodes: [
      { title: 'Remember Everything', body: 'Persistent project context so an assistant does not start every session cold.' },
      { title: 'House Rules', body: 'Reusable engineering rules that carry a team\'s conventions across tasks.' },
      { title: 'The Code Graph', body: 'Graph-based knowledge of the codebase for retrieval that understands structure, not just text.' },
      { title: 'Assemble the Team', body: 'Multi-agent task orchestration: specialised agents working one problem in parallel.' },
    ],
    icon: 'cpu',
    palette: ['#3b0764', '#a21caf', '#f472b6'],
  },
  growth: {
    id: 'growth',
    title: 'Growth Mode',
    kind: 'Docuseries',
    tagline: 'Websites, ads, SEO and cold outreach, measured in CTR, CPA and ROAS.',
    badge: 'Independent',
    genres: ['Growth', 'Marketing', 'Automation'],
    stack: ['Meta Ads', 'SEO', 'HubSpot CRM', 'n8n', 'Make.com'],
    synopsis:
      'Independent digital growth and automation initiatives in Bengaluru: exploring service offerings across website development, Meta Ads, SEO, social media, lead generation and inbound marketing.',
    episodes: [
      { title: 'The Offer', body: 'Explored digital service offerings spanning website development, Meta Ads, SEO, social media management, lead generation and inbound marketing.' },
      { title: 'Cold Open', body: 'Worked on prospecting and cold-outreach strategies, service positioning and CRM-based lead-management workflows.' },
      { title: 'By the Numbers', body: 'Applied a metrics-oriented approach to campaign concepts: click-through rate, cost per acquisition, conversion rate and return on ad spend.' },
    ],
    icon: 'megaphone',
    palette: ['#7f1d1d', '#dc2626', '#fb923c'],
  },
  bmsit: {
    id: 'bmsit',
    title: 'Origin Story',
    kind: 'Coming-of-Age Drama',
    tagline: 'B.E. in Artificial Intelligence & Machine Learning. Now streaming.',
    year: '2024 – Present',
    badge: 'BMSIT&M',
    genres: ['Education', 'AI / ML'],
    stack: ['Machine learning', 'Data structures', 'Mathematics', 'Programming'],
    synopsis:
      'Bachelor of Engineering in Artificial Intelligence and Machine Learning at BMS Institute of Technology and Management (BMSIT), Bengaluru.',
    episodes: [
      { title: 'BMS Institute of Technology and Management', body: 'Bachelor of Engineering, Artificial Intelligence and Machine Learning. Bengaluru, India. 2024 to present.' },
    ],
    icon: 'graduation',
    palette: ['#0c4a6e', '#0284c7', '#7dd3fc'],
  },
  outreach: {
    id: 'outreach',
    title: 'Cold Open',
    kind: 'Docuseries',
    tagline: 'Finding the right people, then giving them a reason to reply.',
    badge: 'Experience',
    genres: ['Sales', 'Prospecting', 'CRM'],
    stack: ['HubSpot CRM', 'Cold outreach', 'Lead management'],
    synopsis:
      'Prospecting and cold-outreach work from Mourya\'s independent growth initiatives: who to contact, how to position the offer, and how every lead gets tracked in a CRM.',
    episodes: [
      { title: 'The List', body: 'Worked on prospecting strategies to find and qualify the right businesses to approach.' },
      { title: 'The Pitch', body: 'Shaped service positioning and cold-outreach messaging for digital growth offerings.' },
      { title: 'The Pipeline', body: 'Built CRM-based lead-management workflows so no conversation slips through the cracks.' },
    ],
    icon: 'phone',
    palette: ['#1e293b', '#0f766e', '#5eead4'],
  },
  campaigns: {
    id: 'campaigns',
    title: 'By the Numbers',
    kind: 'True Crime: Ad Spend',
    tagline: 'CTR, CPA, conversion rate, ROAS. If it can\'t be measured, it can\'t be improved.',
    badge: 'Experience',
    genres: ['Performance Marketing', 'Analytics'],
    stack: ['Meta Ads', 'SEO', 'Social media', 'Inbound marketing'],
    synopsis:
      'A metrics-first approach to campaign concepts across Meta Ads, SEO, social media and inbound marketing, judged on click-through rate, cost per acquisition, conversion rate and return on ad spend.',
    episodes: [
      { title: 'Click-Through Rate', body: 'Is the ad earning attention? Campaign concepts start with what makes people click.' },
      { title: 'Cost per Acquisition', body: 'What does a customer actually cost? Spend is weighed against the leads it brings in.' },
      { title: 'Conversion Rate', body: 'From visitor to lead: tuning the path from landing page to enquiry.' },
      { title: 'Return on Ad Spend', body: 'The finale: every campaign concept answers whether the money came back.' },
    ],
    icon: 'megaphone',
    palette: ['#422006', '#ca8a04', '#fde047'],
  },
  webstudio: {
    id: 'webstudio',
    title: 'Web Studio',
    kind: 'Series',
    tagline: 'Websites for businesses that need to be found, trusted and contacted.',
    badge: 'Experience',
    genres: ['Web Development', 'Freelance'],
    stack: ['React', 'Next.js', 'JavaScript', 'SEO'],
    synopsis:
      'Website development offered as part of Mourya\'s independent digital services, including the Gastronomix website delivered alongside its inventory system.',
    episodes: [
      { title: 'The Gastronomix Site', body: 'Developed the Gastronomix website, giving the business a dedicated web presence next to its operations system.' },
      { title: 'Built to Be Found', body: 'Web builds paired with SEO and inbound marketing so the site brings in leads, not just visitors.' },
    ],
    icon: 'sparkles',
    palette: ['#0f172a', '#4338ca', '#a5b4fc'],
  },
  ailab: {
    id: 'ailab',
    title: 'Applied AI Lab',
    kind: 'Anthology',
    tagline: 'Each episode, a new idea gets prototyped before it gets debated.',
    badge: 'Self-Directed Learning',
    genres: ['Applied AI', 'Machine Learning', 'LLMs'],
    stack: ['Python', 'Embeddings', 'Semantic retrieval', 'Predictive analytics', 'LLM APIs'],
    synopsis:
      'Hands-on exploration beyond the classroom: LLM-powered workflows, predictive analytics, embeddings and semantic retrieval, the groundwork behind Cachet, Dial-Up and Engineering OS.',
    episodes: [
      { title: 'LLM Workflows', body: 'Exploring how LLM-powered workflows turn into practical products.' },
      { title: 'Predictive Analytics', body: 'Machine-learning workflows for prediction and analysis.' },
      { title: 'Embeddings & Retrieval', body: 'Semantic retrieval and embeddings: the foundation of the Cachet concept.' },
    ],
    icon: 'brain',
    palette: ['#2e1065', '#6d28d9', '#c084fc'],
  },
  cloudlab: {
    id: 'cloudlab',
    title: 'Into the Cloud',
    kind: 'Learning Series',
    tagline: 'Linux, containers, clusters and pipelines, learned by breaking things on purpose.',
    badge: 'Hands-On Learning',
    genres: ['Cloud', 'DevOps'],
    stack: ['Linux / Ubuntu', 'AWS fundamentals', 'Docker', 'Kubernetes', 'CI/CD'],
    synopsis:
      'Ongoing hands-on exploration of cloud engineering and DevOps: Linux/Ubuntu, AWS fundamentals, Docker, Kubernetes and CI/CD.',
    episodes: [
      { title: 'Home on Linux', body: 'Working day to day on Linux/Ubuntu.' },
      { title: 'Containers', body: 'Packaging and running apps with Docker.' },
      { title: 'Orchestration', body: 'Exploring Kubernetes for running containers at scale.' },
      { title: 'Ship It', body: 'CI/CD pipelines and AWS fundamentals for getting builds deployed.' },
    ],
    icon: 'cloud',
    palette: ['#082f49', '#0369a1', '#bae6fd'],
  },
}

export type Skill = { name: string; group: string; icon: IconName; items: string[]; palette: [string, string, string] }

export const skills: Skill[] = [
  { name: 'Python', group: 'Programming', icon: 'code', items: ['Python', 'C', 'C++', 'JavaScript', 'TypeScript'], palette: ['#1e3a8a', '#2563eb', '#facc15'] },
  { name: 'LLM Apps', group: 'Data & AI', icon: 'brain', items: ['Embeddings', 'Semantic retrieval', 'LLM application concepts'], palette: ['#4c1d95', '#7c3aed', '#c4b5fd'] },
  { name: 'React', group: 'Web & Backend', icon: 'sparkles', items: ['React', 'Next.js', 'TypeScript'], palette: ['#083344', '#0891b2', '#67e8f9'] },
  { name: 'FastAPI', group: 'Web & Backend', icon: 'server', items: ['FastAPI', 'REST APIs'], palette: ['#064e3b', '#0d9488', '#5eead4'] },
  { name: 'ML Workflows', group: 'Data & AI', icon: 'brain', items: ['Machine-learning workflows', 'Predictive analytics'], palette: ['#831843', '#db2777', '#fda4af'] },
  { name: 'PostgreSQL', group: 'Databases & Tools', icon: 'database', items: ['PostgreSQL', 'Supabase', 'Git', 'GitHub'], palette: ['#172554', '#1d4ed8', '#93c5fd'] },
  { name: 'Automation', group: 'Automation & Growth', icon: 'workflow', items: ['n8n', 'Make.com', 'HubSpot CRM'], palette: ['#7c2d12', '#ea580c', '#fdba74'] },
  { name: 'Cloud & DevOps', group: 'Cloud & DevOps', icon: 'cloud', items: ['Linux / Ubuntu', 'AWS fundamentals', 'Docker', 'Kubernetes', 'CI/CD'], palette: ['#1f2937', '#475569', '#cbd5e1'] },
  { name: 'Marketing & CRM', group: 'Automation & Growth', icon: 'megaphone', items: ['Meta Ads', 'SEO', 'HubSpot CRM', 'Lead generation'], palette: ['#7f1d1d', '#b91c1c', '#fca5a5'] },
  { name: 'C / C++', group: 'Programming', icon: 'code', items: ['C', 'C++'], palette: ['#1e293b', '#334155', '#94a3b8'] },
]

export const interests = [
  'Applied AI engineering',
  'AI agents & developer tools',
  'Cloud engineering & DevOps',
  'LLM inference efficiency',
  'SaaS product development',
  'Business process automation',
]

export type ProfileId = 'recruiter' | 'engineer' | 'founder' | 'curious'

export type Viewer = {
  id: ProfileId
  label: string
  color: string
  hero: string // title id featured in the billboard
  rows: RowSpec[]
}

export type RowSpec =
  | { kind: 'titles'; label: string; ids: string[] }
  | { kind: 'top10'; label: string }
  | { kind: 'interests'; label: string }

const allProjects = ['gastronomix', 'cachet', 'voice', 'engos']
const experience = ['bmsit', 'ailab', 'cloudlab', 'growth', 'outreach', 'campaigns', 'webstudio']

export const viewers: Viewer[] = [
  {
    id: 'recruiter', label: 'Recruiter', color: '#E50914', hero: 'gastronomix',
    rows: [
      { kind: 'titles', label: 'Top Picks for Recruiter', ids: ['gastronomix', 'cachet', 'bmsit', 'growth'] },
      { kind: 'top10', label: 'Top 10 Skills in Mourya\'s Stack Today' },
      { kind: 'titles', label: 'Selected Projects', ids: allProjects },
      { kind: 'titles', label: 'Education & Experience', ids: experience },
      { kind: 'interests', label: 'Because You Watched Applied AI' },
    ],
  },
  {
    id: 'engineer', label: 'Engineer', color: '#2563eb', hero: 'cachet',
    rows: [
      { kind: 'titles', label: 'Trending in AI Infra', ids: ['cachet', 'engos', 'voice'] },
      { kind: 'top10', label: 'Top 10 in the Stack Today' },
      { kind: 'titles', label: 'Shipped for Real Clients', ids: ['gastronomix', 'voice'] },
      { kind: 'titles', label: 'All Projects', ids: allProjects },
      { kind: 'titles', label: 'Education & Experience', ids: experience },
      { kind: 'interests', label: 'Currently Obsessed With' },
    ],
  },
  {
    id: 'founder', label: 'Founder', color: '#16a34a', hero: 'growth',
    rows: [
      { kind: 'titles', label: 'Builds That Save Money', ids: ['cachet', 'voice', 'gastronomix', 'engos'] },
      { kind: 'titles', label: 'Growth & Automation', ids: ['growth', 'outreach', 'campaigns', 'webstudio', 'voice'] },
      { kind: 'top10', label: 'Top 10 Tools in the Kit' },
      { kind: 'titles', label: 'Education & Experience', ids: experience },
      { kind: 'interests', label: 'What Mourya Wants to Build Next' },
    ],
  },
  {
    id: 'curious', label: 'Just Browsing', color: '#eab308', hero: 'engos',
    rows: [
      { kind: 'titles', label: 'New Releases', ids: ['engos', 'cachet', 'voice'] },
      { kind: 'titles', label: 'Based on a True Story', ids: experience },
      { kind: 'top10', label: 'Top 10 Skills Today' },
      { kind: 'interests', label: 'Genres Mourya Loves' },
    ],
  },
]
