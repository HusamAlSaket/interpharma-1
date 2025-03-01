"use client";

import { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { tabs } from "@/data";

const TestingServices = () => {
    const [activeTab, setActiveTab] = useState("chemical");

    return (
        <section className="py-16 px-6 bg-gradient-to-br from-orange-50 via-white to-orange-100">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 relative inline-block group">
                    Testing Services
                    <span className="absolute -bottom-2 left-1/2 w-6 h-6 rounded-full bg-orange-300 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform duration-500"></span>
                </h2>
                <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
                    Comprehensive pharmaceutical testing solutions meeting international quality standards.
                </p>
            </div>

            {/* Tabs */}
            <div className="max-w-4xl mx-auto flex justify-center mb-8">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`py-3 px-6 mx-1 font-semibold focus:outline-none transition-all duration-300 relative overflow-hidden rounded-lg ${
                            activeTab === tab.id 
                                ? "text-white bg-orange-500 shadow-md" 
                                : "text-gray-700 bg-white/80 hover:bg-white hover:shadow-md"
                        }`}
                    >
                        <span className="relative z-10">{tab.label}</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg -translate-y-full transition-transform duration-300 ease-out"></span>
                        {activeTab === tab.id && (
                            <span className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg"></span>
                        )}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="mt-8 max-w-4xl mx-auto">
                {activeTab === "chemical" && (
                    <div className="grid md:grid-cols-2 gap-6">
                        <ServiceCard title="Assay" />
                        <ServiceCard title="Related Substances" />
                        <ServiceCard title="IVRT" />
                        <ServiceCard title="IVPT" />
                    </div>
                )}
                {activeTab === "microbiology" && (
                    <div className="grid md:grid-cols-2 gap-6">
                        <ServiceCard title="TAMC, TYMC" />
                        <ServiceCard title="E. coli" />
                        <ServiceCard title="Coliform" />
                        <ServiceCard title="P. aeruginosa" />
                        <ServiceCard title="Legionella" />
                        <ServiceCard title="S. aureus" />
                        <ServiceCard title="PCT" />
                    </div>
                )}
                {activeTab === "physical" && (
                    <div className="grid md:grid-cols-2 gap-6">
                        <ServiceCard title="Water (KF)" />
                        <ServiceCard title="Loss on Drying (LOD)" />
                        <ServiceCard title="Hardness" />
                        <ServiceCard title="Disintegration" />
                        <ServiceCard title="Friability" />
                        <ServiceCard title="Uniformity of Dose" />
                        <ServiceCard title="Dissolution Profile" />
                    </div>
                )}
            </div>
        </section>
    );
};

const ServiceCard = ({ title }: { title: string }) => (
    <div className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 flex items-center space-x-4 overflow-hidden relative">
        {/* Background animation */}
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-100/0 via-orange-100/0 to-orange-100/0 group-hover:from-orange-100/90 group-hover:via-orange-100/40 group-hover:to-orange-100/0 transition-all duration-700"></div>
        
        {/* Ripple animation */}
        <div className="absolute -right-12 -bottom-12 w-24 h-24 rounded-full bg-orange-200/50 scale-0 group-hover:scale-100 transition-transform duration-700 ease-out"></div>
        <div className="absolute -right-6 -bottom-6 w-12 h-12 rounded-full bg-orange-300/50 scale-0 group-hover:scale-100 transition-transform duration-500 delay-100 ease-out"></div>
        
        {/* Icon with pulse effect */}
        <div className="relative">
            <div className="absolute inset-0 rounded-full bg-orange-200 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700"></div>
            <CheckCircleIcon className="h-8 w-8 text-orange-500 flex-shrink-0 z-20 relative transition-transform duration-300 group-hover:scale-110" />
        </div>
        
        {/* Content */}
        <div className="z-20">
            <h3 className="font-semibold text-lg text-gray-800 transition-transform duration-300 group-hover:translate-x-1">{title}</h3>
            <div className="w-1 h-1 rounded-full bg-orange-400 mt-2 transition-all duration-500 group-hover:w-6"></div>
        </div>
        
        {/* Hover indicator */}
        <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
);

export default TestingServices;