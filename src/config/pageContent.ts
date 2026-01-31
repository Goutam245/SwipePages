// Page content configuration for all 6 core pages
// Primary/High School/College × Maths/English

export type AudienceLevel = 'primary' | 'highschool' | 'college';
export type Subject = 'maths' | 'english';

export interface PageContent {
  level: AudienceLevel;
  subject: Subject;
  slug: string;
  
  // Hero Section
  hero: {
    badge: string;
    headline: string;
    highlightedText: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustBadge: string;
  };
  
  // Stats Section
  stats: {
    rating: string;
    students: string;
    experience: string;
  };
  
  // Offer Section
  offer: {
    title: string;
    subtitle: string;
    features: string[];
    reportTitle: string;
    reportDescription: string;
  };
  
  // How It Works
  howItWorks: {
    title: string;
    subtitle: string;
    steps: {
      title: string;
      description: string;
    }[];
  };
  
  // Value Proposition
  valueProps: {
    title: string;
    subtitle: string;
    features: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
  
  // Testimonials
  testimonials: {
    title: string;
    subtitle: string;
    items: {
      name: string;
      role: string;
      quote: string;
      rating: number;
      outcome: string;
    }[];
  };
  
  // FAQ
  faq: {
    title: string;
    subtitle: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  
  // Final CTA
  finalCta: {
    urgency: string;
    headline: string;
    subheadline: string;
    ctaText: string;
  };
  
  // Meta/SEO
  meta: {
    title: string;
    description: string;
  };
}

// Primary Maths
export const primaryMaths: PageContent = {
  level: 'primary',
  subject: 'maths',
  slug: 'primary-maths',
  
  hero: {
    badge: "Canberra's #1 Primary Maths Tutoring",
    headline: "Build Maths Confidence That",
    highlightedText: "Lasts Forever",
    subheadline: "Watch your child transform from 'I hate maths' to 'I love maths!' with our nurturing 1-on-1 approach designed for ages 5-12.",
    ctaPrimary: "Book Free Assessment",
    ctaSecondary: "See Our Method",
    trustBadge: "Trusted by 200+ Canberra Parents"
  },
  
  stats: {
    rating: "5.0",
    students: "500+",
    experience: "Since 2018"
  },
  
  offer: {
    title: "Start Your Child's",
    subtitle: "Build foundations that last through high school and beyond",
    features: [
      "11 × 1-hour private lessons",
      "Personalised maths learning plan",
      "Expert primary maths tutor",
      "Weekly parent progress updates",
      "Fun worksheets & activities",
      "Times tables mastery program"
    ],
    reportTitle: "Comprehensive Maths Assessment Report",
    reportDescription: "Detailed analysis of your child's maths skills, learning gaps, and a personalised improvement roadmap."
  },
  
  howItWorks: {
    title: "How We Build",
    subtitle: "A simple 3-step process designed to identify gaps and build real confidence",
    steps: [
      {
        title: "Free Maths Assessment",
        description: "We identify exactly where your child's maths gaps are and what's blocking their progress."
      },
      {
        title: "Custom Learning Plan",
        description: "Your child gets a personalised plan that fills gaps while building on their strengths."
      },
      {
        title: "Weekly Progress",
        description: "Watch confidence grow as your child masters concepts and starts loving maths."
      }
    ]
  },
  
  valueProps: {
    title: "Everything Your Child Needs to",
    subtitle: "We don't just teach maths – we build confident learners who enjoy the subject",
    features: [
      {
        title: "Maths Skills Ladder",
        description: "Visual progress tracking from number sense through to pre-algebra mastery.",
        icon: "chart"
      },
      {
        title: "Patient Expert Tutors",
        description: "Specially trained to work with young learners and make maths fun.",
        icon: "heart"
      },
      {
        title: "Hands-On Learning",
        description: "Games, puzzles and real-world problems that make concepts stick.",
        icon: "puzzle"
      },
      {
        title: "Parent Dashboard",
        description: "See exactly what's being covered and how your child is progressing.",
        icon: "dashboard"
      }
    ]
  },
  
  testimonials: {
    title: "What Canberra Parents",
    subtitle: "Real results from real families in Canberra",
    items: [
      {
        name: "Sarah Mitchell",
        role: "Mother of Year 4 student",
        quote: "My daughter went from tears during homework to actually asking to do extra maths problems. The transformation has been incredible.",
        rating: 5,
        outcome: "Jumped 2 grade levels in 8 weeks"
      },
      {
        name: "David Chen",
        role: "Father of Year 3 student",
        quote: "The tutors here understand kids. My son actually looks forward to his sessions now – something I never thought possible.",
        rating: 5,
        outcome: "Times tables mastered in 6 weeks"
      },
      {
        name: "Emma Thompson",
        role: "Mother of Year 5 student",
        quote: "Not only did her grades improve, but her overall confidence in school shot up. Worth every dollar.",
        rating: 5,
        outcome: "From C to A+ in one term"
      }
    ]
  },
  
  faq: {
    title: "Questions About Primary",
    subtitle: "Everything parents need to know",
    items: [
      {
        question: "What age group do you tutor for primary maths?",
        answer: "We work with children from Kindergarten through Year 6 (ages 5-12). Our tutors are specially trained to work with young learners using age-appropriate teaching methods."
      },
      {
        question: "How do you make maths fun for young children?",
        answer: "We use games, puzzles, manipulatives, and real-world examples. Learning should never feel like a chore. Our tutors are experts at engaging young minds."
      },
      {
        question: "My child is behind in maths. Can you help them catch up?",
        answer: "Absolutely. We start with a thorough assessment to identify exactly where the gaps are, then create a plan to fill them systematically while building confidence."
      },
      {
        question: "How often should my child have tutoring sessions?",
        answer: "Most families start with weekly sessions. For students who are significantly behind or preparing for important assessments, we might recommend twice weekly."
      },
      {
        question: "Do you follow the Australian Curriculum?",
        answer: "Yes, our programs are fully aligned with the Australian Curriculum for Mathematics. We also supplement with extension activities for students who are ready."
      }
    ]
  },
  
  finalCta: {
    urgency: "Only 3 spots left for Term 1 2025",
    headline: "Give Your Child the Gift of Maths Confidence",
    subheadline: "Book a free assessment and see the difference expert tutoring makes",
    ctaText: "Book Free Assessment"
  },
  
  meta: {
    title: "Primary Maths Tutoring Canberra | Ages 5-12 | Canberra Tutoring",
    description: "Transform your child's maths confidence with Canberra's top-rated primary maths tutoring. 1-on-1 sessions, personalised learning plans, and proven results."
  }
};

// Primary English
export const primaryEnglish: PageContent = {
  level: 'primary',
  subject: 'english',
  slug: 'primary-english',
  
  hero: {
    badge: "Canberra's #1 Primary English Tutoring",
    headline: "Unlock Your Child's",
    highlightedText: "Love of Reading",
    subheadline: "From reluctant readers to confident writers – our nurturing approach helps children aged 5-12 discover the joy of English.",
    ctaPrimary: "Book Free Assessment",
    ctaSecondary: "See Our Method",
    trustBadge: "Trusted by 200+ Canberra Parents"
  },
  
  stats: {
    rating: "5.0",
    students: "500+",
    experience: "Since 2018"
  },
  
  offer: {
    title: "Start Your Child's",
    subtitle: "Build reading and writing skills that open doors for life",
    features: [
      "11 × 1-hour private lessons",
      "Personalised literacy plan",
      "Expert primary English tutor",
      "Weekly parent updates",
      "Reading level assessment",
      "Creative writing activities"
    ],
    reportTitle: "Comprehensive Literacy Report",
    reportDescription: "Detailed analysis of reading level, comprehension skills, writing ability, and a personalised improvement roadmap."
  },
  
  howItWorks: {
    title: "How We Build",
    subtitle: "A proven 3-step process to develop confident readers and writers",
    steps: [
      {
        title: "Free Literacy Assessment",
        description: "We assess reading level, comprehension, phonics, and writing skills to find exactly where support is needed."
      },
      {
        title: "Custom Learning Journey",
        description: "Your child gets a personalised plan with engaging books and writing activities matched to their interests."
      },
      {
        title: "Watch Confidence Bloom",
        description: "See your child go from reluctant reader to confident communicator in just 8 weeks."
      }
    ]
  },
  
  valueProps: {
    title: "Everything Your Child Needs to",
    subtitle: "We develop all aspects of literacy – reading, writing, speaking, and comprehension",
    features: [
      {
        title: "Writing Pyramid",
        description: "Structured progression from sentences to paragraphs to complete stories.",
        icon: "layers"
      },
      {
        title: "Reading Specialists",
        description: "Tutors trained in phonics, comprehension strategies, and engaging reluctant readers.",
        icon: "book"
      },
      {
        title: "Creative Expression",
        description: "Fun projects that build vocabulary and inspire a love of storytelling.",
        icon: "sparkles"
      },
      {
        title: "Progress Reports",
        description: "Clear tracking of reading levels and writing development every week.",
        icon: "chart"
      }
    ]
  },
  
  testimonials: {
    title: "What Canberra Parents",
    subtitle: "Real literacy transformations from Canberra families",
    items: [
      {
        name: "Michelle O'Connor",
        role: "Mother of Year 3 student",
        quote: "My son hated reading. Now he's the one asking for 'one more chapter' at bedtime. This program changed everything.",
        rating: 5,
        outcome: "Reading level jumped 2 years"
      },
      {
        name: "James Wright",
        role: "Father of Year 5 student",
        quote: "Her creative writing has blossomed. The confidence she's gained in expressing herself has been wonderful to see.",
        rating: 5,
        outcome: "Essay writing transformed"
      },
      {
        name: "Linda Park",
        role: "Mother of Year 2 student",
        quote: "The phonics support was exactly what she needed. She's now reading independently and so proud of herself.",
        rating: 5,
        outcome: "Reading independently in 6 weeks"
      }
    ]
  },
  
  faq: {
    title: "Questions About Primary",
    subtitle: "Everything parents need to know about English tutoring",
    items: [
      {
        question: "What aspects of English do you cover?",
        answer: "We cover all aspects: reading (phonics, fluency, comprehension), writing (handwriting, spelling, creative and structured writing), grammar, and vocabulary development."
      },
      {
        question: "My child struggles with reading. How can you help?",
        answer: "We use systematic phonics instruction combined with engaging books matched to their level. Many reluctant readers become avid readers within weeks of starting."
      },
      {
        question: "Do you help with creative writing?",
        answer: "Absolutely! We believe writing should be fun and expressive. Our tutors use creative prompts, storytelling activities, and supportive feedback to nurture young writers."
      },
      {
        question: "How do you handle spelling difficulties?",
        answer: "We use multi-sensory spelling strategies and focus on spelling patterns rather than rote memorisation. This approach leads to lasting improvement."
      },
      {
        question: "Will tutoring help my child at school?",
        answer: "Yes! Our programs align with the Australian Curriculum. You'll see improvements in school assessments, confidence in class participation, and overall literacy development."
      }
    ]
  },
  
  finalCta: {
    urgency: "Only 3 spots left for Term 1 2025",
    headline: "Give Your Child the Gift of Literacy",
    subheadline: "Book a free assessment and watch your child's love of reading bloom",
    ctaText: "Book Free Assessment"
  },
  
  meta: {
    title: "Primary English Tutoring Canberra | Reading & Writing | Canberra Tutoring",
    description: "Build your child's reading and writing confidence with Canberra's top-rated primary English tutoring. Expert tutors, personalised programs, proven results."
  }
};

// High School Maths
export const highSchoolMaths: PageContent = {
  level: 'highschool',
  subject: 'maths',
  slug: 'highschool-maths',
  
  hero: {
    badge: "Canberra's #1 High School Maths Tutoring",
    headline: "Conquer Maths &",
    highlightedText: "Boost Your ATAR",
    subheadline: "Expert 1-on-1 tutoring that turns maths struggles into exam success. Years 7-12, all pathways supported.",
    ctaPrimary: "Book Free Assessment",
    ctaSecondary: "See Our Results",
    trustBadge: "92% of students improve by 2+ grades"
  },
  
  stats: {
    rating: "5.0",
    students: "500+",
    experience: "Since 2018"
  },
  
  offer: {
    title: "Start Your ATAR",
    subtitle: "Expert preparation for Years 7-12, all maths pathways",
    features: [
      "11 × 1-hour private lessons",
      "Personalised study plan",
      "Expert maths tutor (uni qualified)",
      "Weekly progress reports",
      "Exam practice papers",
      "24/7 homework help portal"
    ],
    reportTitle: "Comprehensive Maths Diagnostic",
    reportDescription: "Full gap analysis, topic-by-topic breakdown, and personalised exam strategy for your year level."
  },
  
  howItWorks: {
    title: "How We Boost",
    subtitle: "A proven 3-step system that turns struggling students into confident mathematicians",
    steps: [
      {
        title: "Free Gap Analysis",
        description: "We identify exactly which concepts are blocking progress and map out a clear path forward."
      },
      {
        title: "Strategic Study Plan",
        description: "Your tutor creates a personalised plan targeting weak areas while maximising exam performance."
      },
      {
        title: "Consistent Results",
        description: "Weekly sessions build skills systematically. Most students see grade jumps within 8 weeks."
      }
    ]
  },
  
  valueProps: {
    title: "Everything You Need to",
    subtitle: "From basic algebra to Advanced Maths – we've got every pathway covered",
    features: [
      {
        title: "Topic Mastery System",
        description: "Structured progression from foundational concepts to exam-level problem solving.",
        icon: "target"
      },
      {
        title: "Uni-Qualified Tutors",
        description: "Maths graduates who know the curriculum inside out and how to explain it clearly.",
        icon: "graduation"
      },
      {
        title: "Exam Strategy",
        description: "Practice papers, timing strategies, and technique optimization for maximum marks.",
        icon: "award"
      },
      {
        title: "Homework Support",
        description: "Help when you need it – between sessions, use our homework help portal.",
        icon: "help"
      }
    ]
  },
  
  testimonials: {
    title: "What Canberra Students",
    subtitle: "Real grade improvements from Canberra high schoolers",
    items: [
      {
        name: "Jake Morrison",
        role: "Year 12 student",
        quote: "I was failing Maths Methods. My tutor helped me understand the concepts properly for the first time. I got a 42 in my ATAR.",
        rating: 5,
        outcome: "From failing to 42 ATAR score"
      },
      {
        name: "Sophie Wang",
        role: "Year 11 student",
        quote: "The exam strategies made such a difference. I stopped making silly mistakes and my results shot up.",
        rating: 5,
        outcome: "Improved from C to A+"
      },
      {
        name: "Marcus Johnson",
        role: "Year 10 student",
        quote: "Maths finally clicked. My tutor explained things in a way that made sense. Now I'm in the advanced class.",
        rating: 5,
        outcome: "Selected for Advanced Maths"
      }
    ]
  },
  
  faq: {
    title: "Questions About High School",
    subtitle: "Everything you need to know about maths tutoring for Years 7-12",
    items: [
      {
        question: "Which maths pathways do you cover?",
        answer: "We cover all ACT pathways: Essential Mathematics, Standard Mathematics, Mathematical Methods, and Specialist Mathematics. Our tutors are experts in each."
      },
      {
        question: "How do you help with exam preparation?",
        answer: "We use past papers, timing drills, and teach specific exam techniques. Students learn how to maximise marks and avoid common mistakes."
      },
      {
        question: "I'm failing maths. Can you help me pass?",
        answer: "Absolutely. We start by identifying the gaps holding you back, then systematically fill them while building your confidence. Most failing students see significant improvement within 8 weeks."
      },
      {
        question: "Do your tutors know the current curriculum?",
        answer: "Yes, all our high school maths tutors are university maths graduates who stay current with curriculum changes and exam formats."
      },
      {
        question: "How soon will I see results?",
        answer: "Most students see noticeable improvement within 4-6 weeks. Significant grade jumps typically happen within 8-10 weeks of consistent tutoring."
      }
    ]
  },
  
  finalCta: {
    urgency: "Limited spots for Year 11/12 exam prep",
    headline: "Ready to Conquer Maths?",
    subheadline: "Book your free assessment and start your journey to exam success",
    ctaText: "Book Free Assessment"
  },
  
  meta: {
    title: "High School Maths Tutoring Canberra | ATAR Prep | Canberra Tutoring",
    description: "Expert high school maths tutoring for Years 7-12 in Canberra. ATAR preparation, all pathways covered, proven grade improvements."
  }
};

// High School English
export const highSchoolEnglish: PageContent = {
  level: 'highschool',
  subject: 'english',
  slug: 'highschool-english',
  
  hero: {
    badge: "Canberra's #1 High School English Tutoring",
    headline: "Master English &",
    highlightedText: "Ace Your Essays",
    subheadline: "From essay structure to sophisticated analysis – expert 1-on-1 tutoring for Years 7-12 that delivers real results.",
    ctaPrimary: "Book Free Assessment",
    ctaSecondary: "See Our Results",
    trustBadge: "94% of students improve essay grades"
  },
  
  stats: {
    rating: "5.0",
    students: "500+",
    experience: "Since 2018"
  },
  
  offer: {
    title: "Start Your Essay",
    subtitle: "Expert English tutoring for Years 7-12, all text types",
    features: [
      "11 × 1-hour private lessons",
      "Personalised writing plan",
      "Expert English tutor (qualified)",
      "Weekly essay feedback",
      "Text analysis guides",
      "Vocabulary builder program"
    ],
    reportTitle: "Comprehensive English Diagnostic",
    reportDescription: "Full writing analysis, comprehension assessment, and personalised improvement strategy for your year level."
  },
  
  howItWorks: {
    title: "How We Build",
    subtitle: "A proven 3-step system that transforms writing and analysis skills",
    steps: [
      {
        title: "Free Writing Assessment",
        description: "We analyse your current writing level, identify specific areas for improvement, and set clear goals."
      },
      {
        title: "Structured Skill Building",
        description: "Your tutor develops a tailored program covering essay structure, analysis techniques, and language skills."
      },
      {
        title: "Confident Performance",
        description: "Watch essays transform from average to impressive as techniques become second nature."
      }
    ]
  },
  
  valueProps: {
    title: "Everything You Need to",
    subtitle: "We develop sophisticated English skills that impress teachers and examiners",
    features: [
      {
        title: "Essay Architecture",
        description: "Master the structure and flow that markers are looking for in every essay type.",
        icon: "structure"
      },
      {
        title: "Qualified Teachers",
        description: "English graduates with teaching experience who know exactly how to improve your writing.",
        icon: "teacher"
      },
      {
        title: "Text Analysis Skills",
        description: "Learn to identify techniques, analyse meaning, and write sophisticated responses.",
        icon: "magnify"
      },
      {
        title: "Regular Feedback",
        description: "Detailed essay feedback every session so you know exactly how to improve.",
        icon: "feedback"
      }
    ]
  },
  
  testimonials: {
    title: "What Canberra Students",
    subtitle: "Real essay improvements from Canberra high schoolers",
    items: [
      {
        name: "Chloe Andrews",
        role: "Year 12 student",
        quote: "My essays went from Cs to As. The structure techniques and feedback completely changed how I write.",
        rating: 5,
        outcome: "Essay grade: C → A"
      },
      {
        name: "Liam Patterson",
        role: "Year 11 student",
        quote: "I finally understand how to analyse texts properly. English doesn't feel impossible anymore.",
        rating: 5,
        outcome: "Improved from D to B+"
      },
      {
        name: "Aisha Rahman",
        role: "Year 10 student",
        quote: "The vocabulary building has made such a difference to my writing. My teacher noticed immediately.",
        rating: 5,
        outcome: "Selected for extension English"
      }
    ]
  },
  
  faq: {
    title: "Questions About High School",
    subtitle: "Everything you need to know about English tutoring for Years 7-12",
    items: [
      {
        question: "What aspects of English do you cover?",
        answer: "We cover essay writing, text analysis, creative writing, oral presentations, and language skills. Our tutors are experts in all text types and assessment formats."
      },
      {
        question: "Can you help with specific texts I'm studying?",
        answer: "Absolutely. We work with whatever texts your school is studying. Our tutors are well-versed in the most common set texts and can quickly adapt to others."
      },
      {
        question: "How do you improve essay writing?",
        answer: "We teach clear essay structures, paragraph techniques, and sophisticated expression. Every session includes practice and detailed feedback on your writing."
      },
      {
        question: "My child struggles with reading comprehension. Can you help?",
        answer: "Yes, we teach specific strategies for understanding complex texts, identifying techniques, and constructing analytical responses."
      },
      {
        question: "How quickly will essay grades improve?",
        answer: "Most students see noticeable improvement in their first marked essay after 3-4 sessions. Significant grade jumps typically happen within 8 weeks."
      }
    ]
  },
  
  finalCta: {
    urgency: "Limited spots for essay intensive program",
    headline: "Ready to Master English?",
    subheadline: "Book your free assessment and start your journey to essay excellence",
    ctaText: "Book Free Assessment"
  },
  
  meta: {
    title: "High School English Tutoring Canberra | Essay Writing | Canberra Tutoring",
    description: "Expert high school English tutoring for Years 7-12 in Canberra. Essay writing, text analysis, proven grade improvements."
  }
};

// College Maths
export const collegeMaths: PageContent = {
  level: 'college',
  subject: 'maths',
  slug: 'college-maths',
  
  hero: {
    badge: "Canberra's #1 University Maths Tutoring",
    headline: "Conquer University",
    highlightedText: "Maths With Confidence",
    subheadline: "Expert 1-on-1 support for calculus, statistics, linear algebra, and more. Because university maths shouldn't hold you back.",
    ctaPrimary: "Book Free Consultation",
    ctaSecondary: "See Our Expertise",
    trustBadge: "Tutors from ANU, UC & beyond"
  },
  
  stats: {
    rating: "5.0",
    students: "200+",
    experience: "Since 2018"
  },
  
  offer: {
    title: "Start Your Academic",
    subtitle: "Expert support for undergraduate and postgraduate maths",
    features: [
      "11 × 1-hour private sessions",
      "Personalised study strategy",
      "Expert tutor (PhD/Masters level)",
      "Assignment guidance",
      "Exam preparation support",
      "Flexible scheduling"
    ],
    reportTitle: "Academic Support Report",
    reportDescription: "Analysis of current knowledge gaps, learning strategy recommendations, and targeted improvement plan."
  },
  
  howItWorks: {
    title: "How We Support Your",
    subtitle: "A proven approach to mastering university-level mathematics",
    steps: [
      {
        title: "Free Consultation",
        description: "We discuss your subjects, challenges, and goals to understand exactly what support you need."
      },
      {
        title: "Expert Matching",
        description: "We match you with a tutor who specialises in your exact subject area and learning style."
      },
      {
        title: "Consistent Progress",
        description: "Weekly sessions build understanding systematically. Most students see significant improvement by mid-semester."
      }
    ]
  },
  
  valueProps: {
    title: "Everything You Need to",
    subtitle: "From first-year foundations to advanced topics – we've got you covered",
    features: [
      {
        title: "Subject Specialists",
        description: "Tutors with postgraduate qualifications in calculus, statistics, linear algebra, and more.",
        icon: "expert"
      },
      {
        title: "Assignment Support",
        description: "Guidance on problem sets and assignments – we explain concepts so you can solve independently.",
        icon: "assignment"
      },
      {
        title: "Exam Prep",
        description: "Strategic preparation using past papers and targeted concept review.",
        icon: "exam"
      },
      {
        title: "Flexible Scheduling",
        description: "Evening and weekend sessions to fit around your uni timetable.",
        icon: "calendar"
      }
    ]
  },
  
  testimonials: {
    title: "What Canberra Uni Students",
    subtitle: "Real success stories from ANU and UC students",
    items: [
      {
        name: "Tom Richardson",
        role: "ANU Engineering Student",
        quote: "I was about to fail MATH1013. My tutor helped me understand the concepts properly and I ended up with a Credit.",
        rating: 5,
        outcome: "Fail → Credit in one semester"
      },
      {
        name: "Priya Sharma",
        role: "UC Business Student",
        quote: "Statistics always confused me. Now I actually enjoy working through problems. My tutor's explanations are so clear.",
        rating: 5,
        outcome: "Statistics grade: P → D"
      },
      {
        name: "Alex Kim",
        role: "ANU Science Student",
        quote: "Linear algebra clicked after working with my tutor. The assignment support was invaluable.",
        rating: 5,
        outcome: "Dean's list recognition"
      }
    ]
  },
  
  faq: {
    title: "Questions About University",
    subtitle: "Everything you need to know about uni maths tutoring",
    items: [
      {
        question: "Which university subjects do you cover?",
        answer: "We cover most undergraduate maths subjects including calculus, linear algebra, statistics, discrete maths, differential equations, and more. Contact us for specific subjects."
      },
      {
        question: "Are your tutors qualified to teach university-level maths?",
        answer: "Yes, all our university maths tutors hold at least a Masters degree in mathematics or a related field. Many are current PhD students or have completed their PhDs."
      },
      {
        question: "Can you help with assignments?",
        answer: "We provide guidance and explanation to help you understand concepts needed for assignments. We teach you how to solve problems independently – we don't do assignments for you."
      },
      {
        question: "How do you help with exam preparation?",
        answer: "We use past exam papers, targeted concept review, and practice problem sets. We also teach exam strategies specific to your course."
      },
      {
        question: "Do you offer online sessions?",
        answer: "Yes, we offer both in-person and online sessions. Many university students prefer the flexibility of online tutoring."
      }
    ]
  },
  
  finalCta: {
    urgency: "Book now for mid-semester support",
    headline: "Ready to Master University Maths?",
    subheadline: "Book a free consultation and get the expert support you need",
    ctaText: "Book Free Consultation"
  },
  
  meta: {
    title: "University Maths Tutoring Canberra | Calculus & Statistics | Canberra Tutoring",
    description: "Expert university maths tutoring in Canberra. Calculus, statistics, linear algebra. Tutors with Masters/PhD qualifications."
  }
};

// College English
export const collegeEnglish: PageContent = {
  level: 'college',
  subject: 'english',
  slug: 'college-english',
  
  hero: {
    badge: "Canberra's #1 Academic Writing Support",
    headline: "Master Academic",
    highlightedText: "Writing Excellence",
    subheadline: "From essays to theses – expert 1-on-1 support that elevates your academic writing to distinction level.",
    ctaPrimary: "Book Free Consultation",
    ctaSecondary: "See Our Expertise",
    trustBadge: "Tutors from top universities"
  },
  
  stats: {
    rating: "5.0",
    students: "200+",
    experience: "Since 2018"
  },
  
  offer: {
    title: "Start Your Academic",
    subtitle: "Expert support for essays, reports, and research writing",
    features: [
      "11 × 1-hour private sessions",
      "Personalised writing development",
      "Expert tutor (postgraduate qualified)",
      "Essay structure coaching",
      "Research writing support",
      "Referencing guidance"
    ],
    reportTitle: "Academic Writing Assessment",
    reportDescription: "Analysis of current writing level, specific improvement areas, and development strategy."
  },
  
  howItWorks: {
    title: "How We Develop",
    subtitle: "A proven approach to university-level writing excellence",
    steps: [
      {
        title: "Free Consultation",
        description: "We discuss your discipline, writing challenges, and goals to understand your needs."
      },
      {
        title: "Expert Matching",
        description: "We match you with a tutor experienced in your field who understands academic conventions."
      },
      {
        title: "Progressive Development",
        description: "Weekly sessions build sophisticated writing skills. See your grades improve by mid-semester."
      }
    ]
  },
  
  valueProps: {
    title: "Everything You Need for",
    subtitle: "We develop the academic writing skills that lead to HDs",
    features: [
      {
        title: "Academic Specialists",
        description: "Tutors with postgraduate degrees who know what markers are looking for.",
        icon: "academic"
      },
      {
        title: "Essay Architecture",
        description: "Master the structure, argumentation, and critical analysis expected at university.",
        icon: "structure"
      },
      {
        title: "Research Skills",
        description: "Learn to find, evaluate, and integrate scholarly sources effectively.",
        icon: "research"
      },
      {
        title: "Discipline Specific",
        description: "Writing conventions vary by field – we match you with relevant expertise.",
        icon: "field"
      }
    ]
  },
  
  testimonials: {
    title: "What Canberra Uni Students",
    subtitle: "Real academic writing improvements from local students",
    items: [
      {
        name: "Rebecca Moore",
        role: "ANU Arts Student",
        quote: "My essays went from Credits to HDs. Learning proper academic argumentation changed everything.",
        rating: 5,
        outcome: "Essay grades: CR → HD"
      },
      {
        name: "Daniel Okonjo",
        role: "UC Law Student",
        quote: "The legal writing support was exactly what I needed. My tutor understood the conventions perfectly.",
        rating: 5,
        outcome: "Contract law essay: HD"
      },
      {
        name: "Emma Zhang",
        role: "ANU Commerce Student",
        quote: "Report writing clicked after a few sessions. The structure techniques are applicable to all my subjects.",
        rating: 5,
        outcome: "GPA improved from 5.5 to 6.8"
      }
    ]
  },
  
  faq: {
    title: "Questions About Academic",
    subtitle: "Everything you need to know about university writing support",
    items: [
      {
        question: "Which disciplines do your tutors cover?",
        answer: "We have tutors experienced in most major disciplines: Arts, Social Sciences, Business, Law, Sciences, and more. We match you with someone who knows your field."
      },
      {
        question: "Can you help with thesis or dissertation writing?",
        answer: "Yes, we offer support for Honours theses, Masters dissertations, and PhD writing. Our tutors include current and former postgraduate students."
      },
      {
        question: "Is this editing or tutoring?",
        answer: "We focus on teaching you writing skills, not editing your work. You'll learn techniques you can apply independently to all future writing."
      },
      {
        question: "Can you help with referencing?",
        answer: "Absolutely. We teach referencing conventions (APA, Harvard, Chicago, etc.) and how to integrate sources effectively into your writing."
      },
      {
        question: "How quickly will I see improvement?",
        answer: "Most students see noticeable improvement in their first assignment after 3-4 sessions. Significant grade improvements typically happen within one semester."
      }
    ]
  },
  
  finalCta: {
    urgency: "Book now for assignment season support",
    headline: "Ready for Academic Excellence?",
    subheadline: "Book a free consultation and elevate your writing to distinction level",
    ctaText: "Book Free Consultation"
  },
  
  meta: {
    title: "Academic Writing Support Canberra | University Essays | Canberra Tutoring",
    description: "Expert academic writing support in Canberra. Essays, reports, theses. Postgraduate qualified tutors who know what markers want."
  }
};

// Export all pages
export const allPages: PageContent[] = [
  primaryMaths,
  primaryEnglish,
  highSchoolMaths,
  highSchoolEnglish,
  collegeMaths,
  collegeEnglish
];

// Helper to get page by slug
export const getPageBySlug = (slug: string): PageContent | undefined => {
  return allPages.find(page => page.slug === slug);
};

// Helper to get pages by level
export const getPagesByLevel = (level: AudienceLevel): PageContent[] => {
  return allPages.filter(page => page.level === level);
};

// Helper to get pages by subject
export const getPagesBySubject = (subject: Subject): PageContent[] => {
  return allPages.filter(page => page.subject === subject);
};
