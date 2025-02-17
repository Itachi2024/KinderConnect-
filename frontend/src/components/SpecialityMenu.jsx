import React from 'react';
import { ArrowRight, CheckCircle, Clock, Rocket } from "lucide-react";

const SpecialityMenu = () => {
    const phases = [
        {
            title: "Phase 1",
            subtitle: "Connecting Psychiatrists",
            icon: Clock,
            content: [
                "Secure platform for psychiatrists",
                "Online counseling sessions",
                "Feedback for session improvement",
                "Identify communication gaps",
            ],
        },
        {
            title: "Phase 2",
            subtitle: "Virtual Interactive Robot",
            icon: Rocket,
            content: [
                "AI-powered 3D virtual robot",
                " Empathetic responses and assessments",
                "Safe emotional expression space",
                " Enhanced user communication",
            ],
        },
        {
            title: "Phase 3",
            subtitle: "AI-Powered Robotic Companion",
            icon: CheckCircle,
            content: [
                "AI-driven supportive companion",
                "Monitor mental well-being",
                "Real-time emotional support",
                "Safe daily assistance",
            ],
        },
    ];
    return (
        <div className="container mx-auto py-16 px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight mb-4">Project Phases</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Our structured approach ensures successful project delivery through three key phases, each designed to bring
                    our vision to life.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {phases.map((phase, index) => (
                    <div 
                        key={phase.title} 
                        className="bg-white transition-all duration-300 hover:bg-blue-500 hover:text-white p-6 rounded-lg shadow-md border border-gray-300 hover:shadow-lg hover:scale-105"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <span className="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-lg hover:bg-blue-600 hover:text-white transition-all">
                                {phase.title}
                            </span>
                            <phase.icon className="h-5 w-5 text-gray-600 hover:text-white transition-all" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{phase.subtitle}</h3>
                        <ul className="space-y-3">
                            {phase.content.map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-gray-700 text-sm hover:text-white transition-all">
                                    <ArrowRight className="h-4 w-4 text-gray-500 hover:text-white transition-all" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SpecialityMenu;
