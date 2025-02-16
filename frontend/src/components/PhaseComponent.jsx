// import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
// import { Badge } from "../ui/badge";
// import { ArrowRight, CheckCircle, Clock, Rocket } from "lucide-react";

// export default function PhaseComponent() {
//   const phases = [
//     {
//       title: "Phase 1",
//       subtitle: "Discovery & Planning",
//       color: "bg-blue-500/10 hover:bg-blue-500/20",
//       icon: Clock,
//       content: ["Initial consultation", "Requirements gathering", "Project scope definition", "Timeline planning"],
//     },
//     {
//       title: "Phase 2",
//       subtitle: "Development & Testing",
//       color: "bg-purple-500/10 hover:bg-purple-500/20",
//       icon: Rocket,
//       content: ["Design implementation", "Core functionality development", "Quality assurance", "User testing feedback"],
//     },
//     {
//       title: "Phase 3",
//       subtitle: "Launch & Support",
//       color: "bg-green-500/10 hover:bg-green-500/20",
//       icon: CheckCircle,
//       content: ["Final optimization", "Production deployment", "User training", "Ongoing maintenance"],
//     },
//   ];

//   return (
//     <div className="container mx-auto py-16 px-4">
//       <div className="text-center mb-12">
//         <h2 className="text-3xl font-bold tracking-tight mb-4">Project Phases</h2>
//         <p className="text-muted-foreground max-w-2xl mx-auto">
//           Our structured approach ensures successful project delivery through three key phases, each designed to bring
//           your vision to life.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {phases.map((phase, index) => (
//           <Card key={phase.title} className={`${phase.color} transition-all duration-300 hover:scale-105 border-none`}>
//             <CardHeader>
//               <div className="flex items-center justify-between mb-2">
//                 <Badge variant="secondary" className="text-sm">
//                   {phase.title}
//                 </Badge>
//                 <phase.icon className="h-5 w-5 text-muted-foreground" /> {/* Fixed Icon Rendering */}
//               </div>
//               <CardTitle className="text-xl font-semibold">{phase.subtitle}</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <ul className="space-y-3">
//                 {phase.content.map((item, i) => (
//                   <li key={i} className="flex items-center gap-2 text-sm">
//                     <ArrowRight className="h-4 w-4 text-muted-foreground" />
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }
