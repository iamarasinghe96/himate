/* ════════════════════════════════════════════════════════════════════
   CV CONTENT — DEFAULT / FALLBACK DATA
   ────────────────────────────────────────────────────────────────────
   This file is the built-in copy of the CV. It is what visitors see
   when Firebase is not configured or is unreachable.

   Once Firebase is configured (see cv/README.md), the live copy lives
   in Firestore and is edited from  /cv/admin/  — you do NOT need to
   touch this file again. Keeping it up to date is still useful as an
   offline fallback: the admin page has a "Download JSON" button, and
   you can paste that JSON back into CV_DATA below any time.

   Section types understood by the renderer and the admin editor:
     pairs   → { items:   [ { label, value } ] }
     text    → { paragraphs: [ "…", "…" ] }
     groups  → { groups:  [ { name, items: [ "…" ] } ] }
     entries → { entries: [ { title, subtitle, meta, bullets: [ "…" ] } ] }
   ════════════════════════════════════════════════════════════════════ */

window.CV_DATA = {
  meta: {
    name: 'Indika Amarasinghe',
    fullName: 'L.I.D. Amarasinghe',
    headline: 'Project Execution Expert | AI Integrationist | ESG | Developer',
    location: 'Albury, NSW 2640, Australia',
    phone: '+61 484 920 892',
    email: 'iamarasinghe96@gmail.com',
    linkedin: 'https://www.linkedin.com/in/indika96/',
    portfolio: 'https://iamarasinghe96.github.io/himate/',
    workRights: 'Unrestricted work rights — Subclass 485 visa, valid until 2029',
    updated: 'September 2026'
  },

  sections: [
    /* ───────────────────────────── 1. Snapshot ───────────────────────────── */
    {
      id: 'snapshot',
      title: 'At a Glance',
      icon: '🧭',
      type: 'pairs',
      items: [
        { label: 'Based in',      value: 'Albury, NSW 2640 — Australia' },
        { label: 'Right to work', value: 'Unrestricted — Subclass 485 visa, valid until 2029' },
        { label: 'Phone',         value: '+61 484 920 892' },
        { label: 'Email',         value: 'iamarasinghe96@gmail.com' },
        { label: 'LinkedIn',      value: 'linkedin.com/in/indika96' },
        { label: 'Portfolio',     value: 'iamarasinghe96.github.io/himate' },
        { label: 'Languages',     value: 'English (fluent) · Sinhala (native) · Mandarin (competent)' },
        { label: 'Experience',    value: '6+ years across sustainable finance, telecommunications, government and healthcare technology' }
      ]
    },

    /* ───────────────────────────── 2. Profile ───────────────────────────── */
    {
      id: 'summary',
      title: 'Professional Summary',
      icon: '👤',
      type: 'text',
      paragraphs: [
        'Experienced project manager combating global greenhouse gas emissions with finance tools, focused on client transition planning and monitoring solutions. Enthusiastic and empathetic, with deep expertise in project management, AI integration, and sustainable finance.',
        'Driven by a mission to connect people, institutions, communities and societies with the benefits of technological advancement, and by the ambition of a world where AI is used to minimise environmental pollution and e-waste.',
        'Versatile across industries: telecommunications, sustainable finance, ESG advisory, AI-assisted development, investment banking, healthcare, government, aviation and digital content creation.',
        'As someone from an engineering family background, I value sincerity, teamwork and perseverance, and I approach every role with a genuine commitment to deliver meaningful results. I work to the principle that 1 + 1 > 2 — collaboration multiplies outcomes beyond individual contributions.'
      ]
    },

    /* ───────────────────────────── 3. Skills ───────────────────────────── */
    {
      id: 'skills',
      title: 'Skills & Proficiencies',
      icon: '🛠️',
      type: 'groups',
      groups: [
        {
          name: 'Artificial Intelligence & Technology',
          items: [
            'AI integration and prompt engineering',
            'AI-assisted development (AIAD)',
            'Building and debugging AI-driven workflows and tools',
            'Retrieval-grounded AI answering (RAG-style knowledge-base Q&A)',
            'AI-human hybrid solutions for sustainability problems',
            'Web tool development — full cloud workflows rebuilt as solo-built web tools'
          ]
        },
        {
          name: 'Project & Programme Management',
          items: [
            'End-to-end delivery across global cross-functional teams (30–40+ members)',
            'Scoping, milestone planning, stakeholder management, risk control',
            'Kick-offs, weekly progress meetings, monthly governance calls, retrospectives',
            'Client KPI and deadline management — 100% KPI compliance record',
            'SOP ownership and process standardisation (3 years; templates adopted org-wide)',
            'CAPA protocol ownership — zero reported incidents through to project completion',
            'Agile and iterative delivery; backlog resolution and project visibility',
            'Revenue, billing and compliance management — zero non-compliant cases',
            'Effort estimation, resource allocation, insourcing/outsourcing coordination',
            'WHS/EHS administration, incident reporting, training matrices (0 EHS incidents on 40+ member projects)'
          ]
        },
        {
          name: 'Sustainable Finance & ESG',
          items: [
            'Climate Transition Tool (CTP) development, delivery and advisory — 2,000+ clients',
            'PCAF compliance (Partnership for Carbon Accounting Financials)',
            'TNFD-aligned nature and deforestation disclosure',
            'Climate-related financial disclosures; CSRD fundamentals and readiness',
            'ESG remediation — wholesale banking loan portfolio data',
            'Climate transition planning and monitoring; general sustainability advisory',
            'ISO 14001-aligned Environmental Management Systems — policy through to training',
            'Environmental monitoring: water quality, air emissions (NOx, SOx, CO₂, PM2.5, PM10), waste, biodiversity, cultural heritage',
            'Satellite deforestation monitoring tool (personally developed)'
          ]
        },
        {
          name: 'Data, Analytics & Automation',
          items: [
            'Advanced Excel: macros, formulas, pivot tables, charts, Power Query',
            'Advanced Google Sheets; Excel engine development for complex tools',
            'Dashboard automation and macro-based analysis',
            'Investment banking process automation (high-volume workflows)',
            'Automated reminder and follow-up macros — hundreds of test runs, zero failures in production',
            'Gantt charts, project trackers and real-time monitoring dashboards',
            'Data cleansing, transformation and compliance',
            '7,800+ facility agreements analysed annually — workflow converted from manual to fully automated'
          ]
        },
        {
          name: 'Finance & Billing',
          items: [
            'Project revenue and billing management; invoicing and financial reporting',
            '100% KPI compliance on revenue triggering',
            'Daily revenue updates and weekly billing reports to CEO, CFO and 100+ person teams',
            'DAC clearance forecasting and material delivery timeline management',
            'WIP reviews, debtor management, accounts receivable follow-up',
            'Passed the ATD (Attention to Detail) test used for investment banking credit analysis recruits'
          ]
        },
        {
          name: 'Web & Tool Development',
          items: [
            'HTML, CSS and JavaScript web tools and dashboards',
            'Offline-first desktop and browser tools (zero-maintenance deployments)',
            'Web-based solutions for non-profits and small healthcare services',
            'Version management tool for document sign-offs (Adobe Sign replacement with full audit trail)',
            'Deployed public GovTech tools: NSW Procurement Simplification Tool, CAA drone approvals'
          ]
        },
        {
          name: 'Sales, Commercial & Business Development',
          items: [
            'Technical and commercial negotiation from junior to CXO level',
            'RFP responses, BOQ preparation and solution proposals',
            'Bid preparation, quotation and budget analysis; commercial and cost optimisation',
            'Key Account Management — Axiata / Dialog / Airtel / Hutch / Mobitel / SLT',
            'Annual sales target achievement — $1.3M achieved; challenge target exceeded in 2022',
            'Network transformation strategy aligned to industry roadmaps',
            'Salesforce and CRM platforms (Huawei iSales)'
          ]
        },
        {
          name: 'Communication, Training & Leadership',
          items: [
            'Public speaking, presentation and stakeholder communication',
            'Cross-cultural communication across Chinese, Sri Lankan and Australian environments',
            'Team leadership of 30–40+ person delivery teams',
            'User manuals, FAQs, explainer materials, simulators and mass communication drafts',
            'Training programs, materials, exams and knowledge transfer',
            'Meeting minutes template adopted across multiple departments',
            'Debate and oratory — multiple regional championships'
          ]
        },
        {
          name: 'Creative, Content & Media',
          items: [
            'Adobe Creative Suite: Photoshop, Lightroom, Illustrator, After Effects',
            'Canva; logo and vector design; infographics and flyer design',
            'Promotional video production and media placement',
            'Short-form video planning, editing and publishing — 71K organic views on a single TikTok',
            'Social media marketing: Meta platforms, demographic analytics, algorithm-aware strategy',
            'Drone videography, aerial survey, mapping and inspection',
            'EDM creation and management'
          ]
        },
        {
          name: 'Technical & Digital',
          items: [
            'Microsoft Office Suite (advanced); Microsoft Teams coordination',
            'HCIA — Cloud Service (Huawei certified)',
            'Bill of Quantities preparation from manufacturer technical catalogues',
            'Equipment version control and specification management across active projects',
            'HS code classification and freight dispute resolution',
            'Post-installation planning: WHS compliance, theft protection, fire risk, maintenance access',
            'Technical domains: solar panel installation, telecommunications infrastructure, electrical systems, electronics'
          ]
        }
      ]
    },

    /* ───────────────────────────── 4. Experience ───────────────────────────── */
    {
      id: 'experience',
      title: 'Work Experience',
      icon: '💼',
      type: 'entries',
      entries: [
        {
          title: 'Founder',
          subtitle: 'Gaia Symbiosis — Independent Sustainability Consultancy',
          meta: 'February 2025 – Present · Albury, Australia',
          bullets: [
            'Founded and lead an independent consultancy building practical, technology-enabled sustainable solutions — every project scoped, designed, built and delivered independently or directly with end users.',
            'Co-develop and deploy AI-human hybrid tools that automate manual workflows and make specialist processes accessible to non-technical users.',
            'Deliver emissions baselining, reporting and roadmap development for organisations working toward sustainability compliance obligations.',
            'Provide ISO 14001-aligned Environmental Management System implementation, environmental data analysis and compliance services.',
            'Build planning and tracking tools for landfill operations — fill sequencing, compaction monitoring and airspace management — and digital tools supporting waste stream identification.',
            'Develop healthcare technology with clinicians and health service staff to reduce administrative burden.',
            'Conduct drone survey, mapping and inspection work supporting environmental monitoring and site assessment engagements.',
            'Design behaviour change strategies and education campaigns informed by international best practice.'
          ]
        },
        {
          title: 'Delivery Lead — Sustainable Finance',
          subtitle: 'Acuity Knowledge Partners — Colombo Delivery Centre',
          meta: 'April 2025 – December 2025',
          bullets: [
            'Led delivery of the Climate Transition Tool for 2,000+ clients of a multinational bank — an award-winning project — coordinating a 30-member team, supporting pilot builds, debugging early versions and resolving delivery bottlenecks with technical teams.',
            'Project in-charge of circular economy projects covering resource efficiency, materials recovery pathways and circularity reporting.',
            'Ran kick-offs, weekly progress meetings, monthly governance calls and retrospectives while consistently meeting client KPIs.',
            'Prepared user manuals, FAQs, communication templates, explainer materials, videos, simulators and mass communication drafts for front-office staff.',
            'Created project trackers, HTML interfaces, dashboards, progress reports, Gantt charts, process maps and management reporting decks.',
            'Built Excel engines, macros, automation scripts and dashboards; supported UX and backend teams on tool design.',
            'Developed SOPs, standardised workflows, CAPA procedures and customised QC checks; advised on quality reviews and subject-matter queries for CTP assessments.',
            'Contributed to climate transition planning, ESG remediation, PCAF reporting, TNFD/nature disclosure and sustainability advisory work.',
            'Presented progress reports, risk registers and key decision updates to executive leadership and external stakeholders.',
            'Managed timesheet compliance, backlog resolution, KPI monitoring, project visibility and post-project internal audits.'
          ]
        },
        {
          title: 'Senior Associate — Sustainable Finance',
          subtitle: 'Acuity Knowledge Partners — Colombo Delivery Centre',
          meta: 'June 2023 – April 2025 · Promoted to Delivery Lead',
          bullets: [
            'Core delivery on the Climate Transition Tool project throughout the period.',
            'Initiated and owned the CAPA protocol for climate transition analysis, enforcing learnings through new joiner training, pop quizzes and morning huddles — zero reported incidents through to project completion.',
            'Personally developed a satellite deforestation monitoring tool feeding TNFD-aligned nature disclosure reporting.',
            'Screened 7,800+ publications and facility agreements annually and built and owned the ESG evidence digital library — outreach through analysis to dashboard monitoring.',
            'Converted the entire publication screening workflow from manual to fully automated, solo, within months of joining; delivery quality converted a one-time project into a BAU engagement.',
            'Passed the ATD test used for investment banking credit analysis recruits, in the absence of a specific project management instrument.'
          ]
        },
        {
          title: 'Key Account Executive — Axiata Account',
          subtitle: 'Huawei Technologies Lanka Co. (Pvt) Ltd — Colombo',
          meta: 'November 2019 – May 2023',
          bullets: [
            'Led technical negotiations on bidding projects including RFP responses, BOQs, tender documentation and solution proposals, with catalogue review to verify quantities, specifications and equipment versioning.',
            'Achieved annual sales targets for key accounts — $1.3M target achieved, challenge target exceeded in 2022 — and won the Airtel AMC and Hutch 4G contracts.',
            'Project Director, Airtel Core Network Expansion Project 2022 — delivered on time with strong customer satisfaction.',
            'Managed project revenue and billing across the carrier network domain with zero non-compliant cases; reduced the DAC billing gap from $5.3M to under $0.3M in seven months.',
            'Provided daily revenue updates and weekly billing reports to the CEO, CFO and 100+ person project teams.',
            'Administered contract schedules, milestone tracking and performance management across major carrier accounts.',
            'Engaged customers from junior to CXO level across the full Lead-to-Cash lifecycle to create and close projects.',
            'Prepared Bills of Quantities directly from manufacturer technical catalogues and owned equipment version control across active projects.',
            'Resolved HS code classification disputes with freight suppliers and mediated customs matters to protect delivery timelines.',
            'Managed post-installation planning including theft deterrence, fire risk mitigation and maintenance access, integrated into delivery sign-off.',
            'Designed and coordinated artwork, infographics, promotional video and media placement for brand campaigns.'
          ]
        },
        {
          title: 'Founder — iSpeak Initiative',
          subtitle: 'Yi Gao Education — Chengdu, China',
          meta: '2018 – 2019',
          bullets: [
            'Founded iSpeak, a student communication, confidence and leadership development initiative.',
            'Received recognition from Oxford for its innovative approach to student engagement and development.'
          ]
        },
        {
          title: 'Part-Time English Tutor',
          subtitle: 'Yi Gao Education — Chengdu, China',
          meta: 'July 2018 – July 2019',
          bullets: [
            'Kindergarten English tutor; developed child-friendly curriculum and communication approaches.',
            'Provided pastoral care and academic support to students from diverse backgrounds.',
            'Tutored international students in accounting individually and in groups.'
          ]
        },
        {
          title: 'Freelancer',
          subtitle: 'Fiverr',
          meta: 'February 2017 – July 2018',
          bullets: [
            'Content creation, logo and vector design, infographics and flyer design for international clients.'
          ]
        },
        {
          title: 'HR Trainee (Summer Internship)',
          subtitle: 'Hayleys Fentons Limited — Colombo, Sri Lanka',
          meta: 'July 2016 – August 2016',
          bullets: [
            'Created and updated employee and CV databases.',
            'Summarised evaluation data from training programmes coordinated by the HR team.'
          ]
        }
      ]
    },

    /* ───────────────────────────── 5. Projects ───────────────────────────── */
    {
      id: 'projects',
      title: 'Selected Projects',
      icon: '🚀',
      type: 'entries',
      entries: [
        {
          title: 'NSW Procurement Simplification Tool',
          subtitle: 'Procurement · GovTech · AI',
          meta: 'iamarasinghe96.github.io/procurementnsw',
          bullets: [
            'Plain-language procurement platform for councils, SME suppliers, corporates and government procurement officers, built after completing the NSW Government Procurement Foundations course.',
            'Structured official guidance and course material into a curated knowledge base connected to an LLM that answers strictly from that source — direct answer, relevant checklist, template links, key considerations and a summary.',
            'Grounded retrieval prevents hallucination; graceful rate-limit and error handling keeps it stable under load. Built and deployed solo.'
          ]
        },
        {
          title: 'Drone Flight Approval System — Civil Aviation Authority of Sri Lanka',
          subtitle: 'Government & Aviation',
          meta: 'civilaviationauthoritylk.github.io/drone-license-verification',
          bullets: [
            'Replaced manual pre-approval of drone flights with real-time airspace validation for a national regulator.',
            'Automatically checks a 500-metre radius around each proposed flight path against airspace restrictions, approving compliant flights instantly and flagging the specific restriction triggered for the rest.',
            'Removed the entire pre-approval bottleneck. Built independently, with no development team.'
          ]
        },
        {
          title: 'AWH Roster Management Tool',
          subtitle: 'Healthcare · Workforce Management',
          meta: 'iamarasinghe96.github.io/awhroster',
          bullets: [
            'Web-based roster and leave planner for the medicine department at Albury Wodonga Health.',
            'Visual interface for rosters, leave and complex scheduling scenarios; doctors sync rosters to personal calendars and receive automatic change notifications.',
            'Integrated automated shift exchange workflow removes manual back-and-forth. In discussion with senior management for rollout across both Albury and Wodonga campuses.'
          ]
        },
        {
          title: 'My AWH — Referral Letter Generator',
          subtitle: 'Healthcare · Process Automation',
          meta: 'iamarasinghe96.github.io/myawh',
          bullets: [
            'AI-powered patient admission database and referral letter generator for doctors at Albury Wodonga Health.',
            'Reduces manual inefficiency in patient management and addresses resource constraints in the department.'
          ]
        },
        {
          title: 'AWHi — Patient Information Centre',
          subtitle: 'Healthcare · Patient Communication',
          meta: 'iamarasinghe96.github.io/AWHi',
          bullets: [
            'Patient information portal supporting post-surgery care and guidance for patients who have recently completed surgical procedures.',
            'Helps staff keep all stakeholders accurately informed and up to date.'
          ]
        },
        {
          title: 'The Kids Clinic — Clinic Management System',
          subtitle: 'Healthcare · Offline-First Systems',
          meta: 'Built with healthcare staff, consultants and patients',
          bullets: [
            'Offline-first clinic management system covering complete patient lifecycles: medical history, appointment scheduling and real-time queue management.',
            'Designed for zero ongoing maintenance and full operational autonomy — no cloud dependency, no data exposure risk.'
          ]
        },
        {
          title: 'ESG Scorecard Generation Tool',
          subtitle: 'ESG Reporting · Automation',
          meta: 'iamarasinghe96.github.io/scorecardgenerator',
          bullets: [
            'Offline-first tool that generates a fully formatted, client-ready ESG scorecard report from a single pasted Excel line item.',
            'Eliminates manual formatting entirely, works without internet access, and keeps sensitive client data off the cloud.'
          ]
        },
        {
          title: 'Satellite Deforestation Monitoring Tool',
          subtitle: 'ESG · Nature & Biodiversity',
          meta: 'Developed at Acuity Knowledge Partners',
          bullets: [
            'Personally developed tool tracking commodity-specific deforestation in targeted regions.',
            'Fed directly into TNFD-aligned nature disclosure reporting for institutional clients.'
          ]
        },
        {
          title: 'Service NSW Application Centre Digitalisation',
          subtitle: 'Government & Digital Transformation',
          meta: 'iamarasinghe96.github.io/nsw',
          bullets: [
            'Digital application processing system replacing paper-based, server-dependent workflows at a Service NSW centre.',
            'Achieved a 50% reduction in processing time with measurable improvements in staff accuracy.',
            'Designed to cut paper consumption and energy load; nominated for recognition under NSW digital transformation and sustainability initiatives.'
          ]
        },
        {
          title: 'QR Code Scanner & Queue Management System',
          subtitle: 'Web Application · Process Automation',
          meta: 'Built for NSW Service Centres',
          bullets: [
            'Applicant details are encoded into a QR code so staff can transfer information into their system instantly — no cloud, no data risk.',
            'Supports on-the-spot review and modification of applicant details, eliminating paper forms and boosting staff throughput.'
          ]
        },
        {
          title: 'SL Rails — Elephant Collision Prevention',
          subtitle: 'Environmental Innovation · Community',
          meta: 'Pilot developed during COVID-19',
          bullets: [
            'Thermal and GPS tracking monitoring system designed to prevent elephant collisions on Sri Lankan railway routes, built with a group of technologist friends.',
            'Based on thermal readings and seasonal elephant movement patterns; the concept was subsequently implemented by the Sri Lankan government.'
          ]
        },
        {
          title: 'Version Management Tool for Document Sign-offs',
          subtitle: 'Governance · Document Control',
          meta: 'Developed as an Adobe Sign alternative',
          bullets: [
            'Keeps signatures, changes and dates secure through a smooth, transparent sign-off process.',
            'Captures every modification with a full audit trail, fully supporting internal auditing requirements.'
          ]
        },
        {
          title: 'Real-time Seating Arrangement App',
          subtitle: 'Web Application · Event Management',
          meta: 'iamarasinghe96.github.io/findyourseat',
          bullets: [
            'Public web app that helps event guests locate their seats, showing the hall layout and neighbouring guests.',
            'Updates in real time from a linked Google Sheet, so late changes need no redeployment.'
          ]
        },
        {
          title: 'Wedding Planner Automation (Excel)',
          subtitle: 'Automation Tool · Data Management',
          meta: 'Excel / macro-based',
          bullets: [
            'Comprehensive planner that generates a complete agenda, detailed budget tracking and optimised table arrangements from a guest list and contacts.',
            'Requires minimal Excel knowledge to operate.'
          ]
        },
        {
          title: 'Dynamic Portfolio Website',
          subtitle: 'Web Development',
          meta: 'iamarasinghe96.github.io/himate',
          bullets: [
            'Responsive portfolio with interactive contact management, certificate library, project showcase and a fully editable web CV.',
            'Firebase-backed admin panel allows every CV section to be updated without touching code.'
          ]
        },
        {
          title: 'Drone Survey, Mapping & Inspection',
          subtitle: 'Environmental Monitoring · Fieldwork',
          meta: 'Delivered through Gaia Symbiosis',
          bullets: [
            'Aerial survey, mapping and inspection supporting environmental monitoring and site assessment engagements.',
            'Site condition documentation, spatial data capture and visual inspection of infrastructure that is difficult or unsafe to access on foot.',
            'Complements ground-based monitoring and the satellite deforestation tool — an end-to-end satellite, aerial and ground observation capability.'
          ]
        }
      ]
    },

    /* ───────────────────────────── 6. Education ───────────────────────────── */
    {
      id: 'education',
      title: 'Education',
      icon: '🎓',
      type: 'entries',
      entries: [
        {
          title: 'Master of Business Administration (MBA), Marketing',
          subtitle: 'Cardiff Metropolitan University — Cardiff, United Kingdom',
          meta: '2020 – 2022 · Grade: Merit',
          bullets: [
            'Dissertation: The Relationship Between Technical Training and Employee Job Satisfaction.'
          ]
        },
        {
          title: 'Bachelor of Management (BMgt) — Business Management & Accounting (Double Major)',
          subtitle: 'Southwestern University of Finance and Economics (SWUFE) — Chengdu, China',
          meta: 'September 2015 – June 2019 · GPA 3.2 · Full Tuition Scholarship Holder',
          bullets: [
            'RIEM — EQUIS accredited, Double First Class University.',
            'Thesis: The Impact of Leadership Style on Emotional Exhaustion of the Followers.'
          ]
        },
        {
          title: 'Bachelor of Commerce (Qualified Entry)',
          subtitle: 'University of Sri Jayewardenepura — Sri Lanka',
          meta: '2017 · Business/Commerce, General',
          bullets: []
        },
        {
          title: 'High School Diploma — Business/Commerce',
          subtitle: 'Ananda College — Colombo, Sri Lanka',
          meta: '2013 – 2015 · Best Results Achiever (2015)',
          bullets: [
            'Active member of the school Commerce Society.'
          ]
        },
        {
          title: 'Primary & Middle School Education',
          subtitle: 'Jayanthi Vidyalaya — Ja-Ela, Sri Lanka',
          meta: 'Class of 2012 · Best Results Achiever of the School',
          bullets: [
            'Head Prefect; President of the Oratory and Debating Society (Sinhala), the Information and Communication Unit, and the English Literary Circle.'
          ]
        },
        {
          title: 'Supplementary Study',
          subtitle: 'British Council EnglishScore · CECO Computer School',
          meta: 'Colombo & Ekala, Sri Lanka',
          bullets: [
            'English language training — British Council EnglishScore, Colombo (2013).',
            'General Computer Course — CECO Computer School, Ekala.'
          ]
        }
      ]
    },

    /* ───────────────────────────── 7. Certifications ───────────────────────────── */
    {
      id: 'certifications',
      title: 'Certifications & Publications',
      icon: '📜',
      type: 'groups',
      groups: [
        {
          name: 'Sustainable Finance & Climate',
          items: [
            'CSRD Fundamentals — CSRD Institute (2025)',
            'Introduction to the VSME Standard — CSRD Institute (2025)',
            'Climate-Related Financial Disclosures: Continuing the Journey — FSB TCFD (2023)',
            'Introduction to Climate-Related Disclosures: Starting the Climate Journey — FSB TCFD (2023)',
            'Introduction to Climate Change Science — GRASFI (2023)',
            'Introduction to Climate Risk Management — Corporate Finance Institute (2023)',
            'Introduction to ESG — Corporate Finance Institute (2023)'
          ]
        },
        {
          name: 'Procurement & Government',
          items: [
            'NSW Government Procurement Foundations — Comperio'
          ]
        },
        {
          name: 'Technology & Huawei',
          items: [
            'HCIA — Cloud Service (2021)',
            'GTS Project Management Professional Ability Enhancement',
            'CNBG Sales General Capability Enablement',
            'Product & Solution Sales — Required Knowledge in Account Direct Sales',
            'Knowledge of Account Direct Sales for MSSD Director',
            'Cyber Security Certificate for Service Work'
          ]
        },
        {
          name: 'Digital Marketing',
          items: [
            'The Fundamentals of Digital Marketing — Google Digital Garage (2023)'
          ]
        },
        {
          name: 'Academic Publications',
          items: [
            'The Relationship Between Technical Training and Employee Job Satisfaction — Cardiff Metropolitan University (MBA)',
            'The Impact of Leadership Style on Emotional Exhaustion of the Followers — SWUFE, Chengdu (Bachelor’s)'
          ]
        }
      ]
    },

    /* ───────────────────────────── 8. Signature work ───────────────────────────── */
    {
      id: 'signature-work',
      title: 'Signature Work',
      icon: '⭐',
      type: 'entries',
      entries: [
        {
          title: 'The ESG Evidence Library — Automation & Problem Solving',
          subtitle: 'Acuity Knowledge Partners',
          meta: '7,800+ documents · 4 months · 10 analysts',
          bullets: [
            'The team had to analyse 7,800+ facility agreements and publications annually and build a digital evidence library, relying on contributors whose full-time roles were elsewhere.',
            'Rather than applying pressure, I solved it with technology: macros built from scratch that never failed once after hundreds of test runs, Excel and QC templates, troubleshooting macros for data input issues, and a monitoring and search dashboard for the entire library.',
            'The whole workflow — normally a job for a full cloud solution team — was built solo and completed in four months with ten analysts, three of whom were out sick for two weeks. Client praise converted a one-time project into a BAU engagement.'
          ]
        },
        {
          title: 'The DAC Gap — Finance & Billing Recovery',
          subtitle: 'Huawei Technologies Lanka',
          meta: '$5.3M → under $0.3M in 7 months',
          bullets: [
            'The DAC (Days After Completion) gap stood at $5.3M during COVID — a significant revenue risk.',
            'Through disciplined forecasting, daily revenue tracking, structured escalation and close coordination with project and finance teams, I brought it under $0.3M within seven months.',
            'Provided daily revenue updates and weekly billing reports to the CEO, CFO and a 100+ person project team throughout.'
          ]
        },
        {
          title: 'The CAPA Protocol — Governance & Incident Prevention',
          subtitle: 'Acuity Knowledge Partners',
          meta: 'Zero reported incidents',
          bullets: [
            'The climate transition analysis project had no formal incident management or corrective action structure when I joined.',
            'I initiated and owned the CAPA protocol, enforcing learnings through new joiner training, pop quizzes and morning huddle discussions.',
            'Result: zero reported incidents from implementation through to project completion, against a prior-year KPI that allowed for five refusals.'
          ]
        },
        {
          title: 'The Climate Transition Tool — Large Scale Delivery',
          subtitle: 'Acuity Knowledge Partners · Multinational bank',
          meta: '2,000+ clients · 30–40 member team · Award-winning',
          bullets: [
            'Debugged early builds, developed Excel engines, supported UX design, implemented CAPA protocols, authored training materials, built dashboards and resolved delivery bottlenecks.',
            'Maintained 100% KPI compliance with zero EHS incidents across the delivery.'
          ]
        },
        {
          title: 'CAA Sri Lanka — Government Automation, Zero Team',
          subtitle: 'Civil Aviation Authority of Sri Lanka',
          meta: 'Regulatory workflow replaced',
          bullets: [
            'A national regulator was processing drone flight approvals manually — slow, resource-intensive and incompatible with time-sensitive operations.',
            'I built an automated approval system that validates each plan against airspace restrictions within a 500-metre radius, approving compliant flights instantly and flagging the exact restriction for the rest.',
            'Built independently. No development team. The output replaced an administrative workflow at regulatory level.'
          ]
        },
        {
          title: 'Service NSW Digitalisation — Independent Developer',
          subtitle: 'Service NSW application centre',
          meta: '50% reduction in processing time',
          bullets: [
            'Built a digital application processing system that eliminated heavy server infrastructure and paper-based processing.',
            'Delivered a 50% reduction in application processing time with measurable staff accuracy improvements.',
            'Nominated for the NSW Digital.NSW Awards for innovation in government service delivery.'
          ]
        },
        {
          title: 'Gaia Symbiosis — The Full-Stack Independent Practice',
          subtitle: 'Independent consultancy',
          meta: 'Government, health, ESG, environment, community',
          bullets: [
            'Every project under this practice was scoped, designed, built and delivered by one person — across government aviation, public health, digital government services, ESG reporting, environmental consulting and community technology.',
            'The constant: identify the real problem, build the simplest thing that actually solves it, and make sure the people using it can keep using it without coming back to me.',
            'The range is deliberate — it reflects six years of capability built across project management, software development, environmental science, AI integration and stakeholder engagement, applied at once.'
          ]
        },
        {
          title: 'Huawei — The Full-Stack Technical Project Manager',
          subtitle: 'Huawei Technologies Lanka',
          meta: 'Account, delivery, commercial and technical ownership',
          bullets: [
            'Simultaneously account manager, delivery coordinator, commercial negotiator and technical manager on the same projects.',
            'Prepared BOQs directly from manufacturer catalogues — verifying cable lengths, input voltages, technology versions and quantities per site — and owned equipment version control to prevent mismatches between order, shipment and installation.',
            'Built WHS compliance into every delivery plan: theft deterrence, fire risk and maintenance access factored in before sign-off.',
            'Resolved HS code classification disputes directly with freight suppliers rather than escalating and waiting.'
          ]
        },
        {
          title: 'The RFP Bid & BOQ — Supplier-Side Procurement',
          subtitle: 'Huawei Technologies Lanka',
          meta: 'Won the project plus an AMC revenue stream',
          bullets: [
            'Owned a customer RFP bid end to end, sitting with engineers to build the BOQ and validate technical feasibility against a tight deadline over the Sinhala and Tamil New Year holiday.',
            'Won the project, and identified an additional annual maintenance contract opportunity — converting a single competitive bid into a longer-term revenue stream.'
          ]
        },
        {
          title: 'iSpeak — Community & Education Leadership',
          subtitle: 'Yi Gao Education, Chengdu',
          meta: 'Oxford-recognised',
          bullets: [
            'Founded a student development initiative focused on communication, confidence and leadership, which received recognition from Oxford for its innovative approach to student engagement.'
          ]
        },
        {
          title: 'Organic Content Reach — 71K Views',
          subtitle: 'Social media & content strategy',
          meta: 'TikTok · no paid promotion',
          bullets: [
            'A storytelling-style video reached 71,000 organic views through deliberate content strategy — audience behaviour, platform algorithms and authentic visual storytelling.',
            'Backed by drone videography, Adobe Suite editing and social media analytics experience.'
          ]
        }
      ]
    },

    /* ───────────────────────────── 9. Achievements ───────────────────────────── */
    {
      id: 'achievements',
      title: 'Achievements & Extracurricular',
      icon: '🏆',
      type: 'groups',
      groups: [
        {
          name: 'Awards',
          items: [
            'Most Valuable Team Award — ESG.X, Acuity Knowledge Partners',
            'Full Tuition Scholarship — SWUFE, China (2015–2019)',
            'Best Results Achiever — Ananda College (2015)',
            'Best Results Achiever of the School — Jayanthi Vidyalaya (2012)'
          ]
        },
        {
          name: 'Debate, Oratory & English',
          items: [
            '1st place divisional and zonal debate competitions (2011 & 2012)',
            '1st place divisional advertisement demonstration competition (2011 & 2012)',
            '1st place divisional and 2nd place zonal creative writing (2012)',
            '1st place divisional and zonal pair improvisation (2012)'
          ]
        },
        {
          name: 'Music & Sport',
          items: [
            'All-island 2nd place, harmonium solo; Western Province 1st; Negombo Zone 1st (2009)',
            'Negombo Zone 1st place (2008)',
            '4th place, Gampaha District Under-13 — Negombo South International Trophy (2007/2008)'
          ]
        },
        {
          name: 'Volunteering & Leadership',
          items: [
            'Voluntary kindergarten English teacher and member of the Young Volunteers Association — SWUFE (2015–2019)',
            'Blood donor; tutored international students in accounting',
            'Created an online course material distribution network',
            'Head Prefect and society president across four school bodies — Jayanthi Vidyalaya (2011–2012)',
            'Young Inventor: designed a specialised braking system for three-wheelers to prevent unexpected overturns'
          ]
        }
      ]
    },

    /* ───────────────────────────── 10. Referees ───────────────────────────── */
    {
      id: 'referees',
      title: 'Referees',
      icon: '🤝',
      type: 'text',
      paragraphs: [
        'Professional referees — including an Associate Director at Acuity Analytics and a Project Director at Huawei Technologies Lanka — are available on request.',
        'Please get in touch at iamarasinghe96@gmail.com and full referee details will be provided.'
      ]
    }
  ]
};
