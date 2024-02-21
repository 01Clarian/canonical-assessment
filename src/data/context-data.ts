import { contextType } from "@/interFace/interFace";
import contextImgOne from "../../public/assets/img/context/context-4-1.png";
import contextImgTwo from "../../public/assets/img/context/context-4-2.png";
import contextImgThree from "../../public/assets/img/context/context-4-3.png";
import context4 from "../../public/assets/img/news/img_1_1.png";
import context5 from "../../public/assets/img/news/img_1_2.png";
import context6 from "../../public/assets/img/news/img_1_3.png";
import context7 from "../../public/assets/img/news/img_1_4.png";
import context8 from "../../public/assets/img/news/img_1_3.png";
import context9 from "../../public/assets/img/news/img_1_4.png";
import icon1 from "../../public/assets/img/icon/icon_1.png";
import icon2 from "../../public/assets/img/icon/icon_2.png";
import icon3 from "../../public/assets/img/icon/icon-3.png";
import icon4 from "../../public/assets/img/feature/feature-1.png";
import icon5 from "../../public/assets/img/feature/feature-2.png";
import icon6 from "../../public/assets/img/feature/feature-3.png";
import icon7 from "../../public/assets/img/feature/feature-4.png";

const context_data: contextType[] = [
  //home one context data
  {
    id: 1,
    image: contextImgOne,
    title: "Best Practices",
    description:
      "Prioritizing maintainable, performant code: writing modular, well-documented components, leverage modern build tools and libraries, optimizing rendering and data fetching, prioritize accessibility, and staying focused on delivering a seamless user experience.",
    boxWrapperClass: "",
    animated: "canonical-assessment-vertical-animated-line-4",
  },
  {
    id: 2,
    image: contextImgTwo,
    title: "Clean and Maintainable Code",
    description:
      "Meaningful variable names: Describing their purpose clearly. Consistent formatting: Using indentation, spacing, and style guides. Modular structure: Breaking down code into reusable components. Linting: Using tools to enforce coding standards and identify potential issues.",
    boxWrapperClass: "pl-55",
    animated: "canonical-assessment-vertical-animated-line-4 slow",
  },
  {
    id: 3,
    image: contextImgThree,
    title: "Performance Optimization",
    description:
      "Profiling: Identifying performance bottlenecks using browser developer tools. Lazy loading: Loading resources only when needed. Memoization: Avoiding redundant calculations by caching results. Third-party libraries: Leveraging optimized libraries for common tasks.",
    boxWrapperClass: "pl-65",
  },
  //context data end
  //home two context data
  {
    id: 4,
    image: contextImgOne,
    title: "Who are competitors to Canonical, and what does Canonical need to change to be a more effective competitor?",
    description: "Canonical's Key Competitors: Cloud Providers: Major players like AWS, Microsoft Azure, and Google Cloud Platform compete directly with Canonical's Ubuntu cloud offerings. They often provide managed services and proprietary solutions that can lock in customers. Open-Source Alternatives: Operating systems like Fedora and open-source cloud deployments like OpenStack present strong alternatives for cost-sensitive users or those valuing complete open-source control. Enterprise Linux Vendors: Red Hat and SUSE offer commercially supported Linux distributions with enterprise-grade features and services, appealing to companies requiring stability and high-touch support. Specialized Solutions: For specific verticals, competitors like Docker (containers) or HashiCorp (infrastructure automation) address niche needs not fully covered by Canonical's broader offerings. The growing importance of open-source skills and the rising popularity of cloud adoption may benefit Canonical. Focusing on specific strengths like security, large-scale deployments, and community support can position them effectively. Navigating the balance between open-source principles and generating sustainable revenue remains a key challenge.",
    boxWrapperClass: "pl-55",
    animated: "canonical-assessment-vertical-animated-line-4",
  },
  {
    id: 5,
    image: contextImgTwo,
    title: "What would you most want to change about Canonical?",
    description:"While Canonical excels in open-source advocacy and provides robust foundations, here's a potential area for improvement: Broadening Public Perception: Beyond the tech niche, Ubuntu and Canonical's impact often remain under the radar. Increasing efforts to clearly communicate their value proposition and showcase innovative uses beyond traditional server/desktop scenarios could attract wider user adoption and appreciation. This could involve engaging storytelling, partnerships with popular brands, or highlighting impactful real-world applications across diverse industries.",
    boxWrapperClass: "pl-55",
    animated: "canonical-assessment-vertical-animated-line-4 slow",
  },
  {
    id: 6,
    image: contextImgThree,
    title: "What gets you most excited about this role?",
    description:
      "Two things excite me about this role: Contributing to open-source innovation: I admire Canonical's commitment and see my skills aligning perfectly with the web and Flutter needs. Learning and growing: I'm eager to master Flutter and contribute to impactful projects alongside talented individuals.",
    boxWrapperClass: "pl-65",
  },
  {
    id: 7,
    image: context7,
    title: "Team Collaboration",
    description: "It is a long established fact that a will be distracted.",
    animatedClass: ".6s",
  },
  {
    id: 8,
    image: context8,
    title: "Team Collaboration",
    description: "It is a long established fact that a will be distracted.",
    animatedClass: ".6s",
  },
  {
    id: 9,
    image: context9,
    title: "Team Collaboration",
    description: "It is a long established fact that a will be distracted.",
    animatedClass: ".6s",
  },
  {
    id: 10,
    title: "Schedule Appointment",
    description: "The wireless horse play all gone",
    info: "to that down.",
    count: 1,
  },
  {
    id: 11,
    title: "Business Consultation",
    description: "The wireless horse play all gone",
    info: "to that down.",
    count: 1,
  },
  {
    id: 12,
    title: "Schedule Appointment",
    description: "The wireless horse play all gone",
    info: "to that down.",
    count: 2,
  },
  {
    id: 13,
    title: "Launch Your Business",
    description: "The wireless horse play all gone",
    info: "to that down.",
    count: 3,
  },
  //home three context data
  {
    id: 14,
    image: icon1,
    title: "Website Optimization",
    description:
      "Only a quid victoria spong cack matie boy bum bag burke a blinding shot James bond pear.",
    info: ".2s",
  },
  {
    id: 15,
    image: icon2,
    title: "Built-in AI features",
    description:
      "Only a quid victoria spong cack matie boy bum bag burke a blinding shot James bond pear.",
    info: ".4s",
  },
  {
    id: 16,
    image: icon3,
    title: "Full Optimization",
    description:
      "Only a quid victoria spong cack matie boy bum bag burke a blinding shot James bond pear.",
    info: ".6s",
  },
  //home four data
  {
    id: 17,
    image: icon4,
    title: " Create pages using tons of hand crafted sections",
    info: ".2s",
  },
  {
    id: 18,
    image: icon5,
    title: "Start your website project the right way with Inform",
    info: ".4s",
  },
  {
    id: 19,
    image: icon5,
    title: "Adapt Inform to your brand Using the style guide",
    info: ".6s",
  },
  {
    id: 20,
    image: icon6,
    title: " Power your business with multiple CMS integrations",
    info: ".8s",
  },
  //context-details data
  {
    id: 21,
    image: icon4,
    title: "Website Optimization",
    description:
      "Only a quid victoria spong cack matie boy bum bag burke a blinding shot James bond pear.",
  },
  {
    id: 22,
    image: icon5,
    title: "Built-in AI features",
    description:
      "Only a quid victoria spong cack matie boy bum bag burke a blinding shot James bond pear.",
  },
  {
    id: 23,
    image: icon6,
    title: "Full Optimization",
    description:
      "Only a quid victoria spong cack matie boy bum bag burke a blinding shot James bond pear.",
  },
  {
    id: 24,
    image: icon7,
    title: "Full Optimization",
    description:
      "Only a quid victoria spong cack matie boy bum bag burke a blinding shot James bond pear.",
  },
];
export default context_data;
