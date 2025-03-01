"use client";

import { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { tabs } from "@/data";

const TestingServices = () => {
    const [activeTab, setActiveTab] = useState("chemical");

    return (
        <div className="max-w-4xl mx-auto py-10 px-4">
            {/* Tabs */}
            <div className="flex border-b border-gray-300">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`py-2 px-4 font-semibold focus:outline-none ${
                            activeTab === tab.id ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500"
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="mt-6">
                {activeTab === "chemical" && (
                    <div className="grid md:grid-cols-2 gap-4">
                        <Card title="Assay" />
                        <Card title="Related Substances" />
                        <Card title="IVRT" />
                        <Card title="IVPT" />
                    </div>
                )}
                {activeTab === "microbiology" && (
                    <div className="grid md:grid-cols-2 gap-4">
                        <Card title="TAMC, TYMC" />
                        <Card title="E. coli" />
                        <Card title="Coliform" />
                        <Card title="P. aeruginosa" />
                        <Card title="Legionella" />
                        <Card title="S. aureus" />
                        <Card title="PCT" />
                    </div>
                )}
                {activeTab === "physical" && (
                    <div className="grid md:grid-cols-2 gap-4">
                        <Card title="Water (KF)" />
                        <Card title="Loss on Drying (LOD)" />
                        <Card title="Hardness" />
                        <Card title="Disintegration" />
                        <Card title="Friability" />
                        <Card title="Uniformity of Dose" />
                        <Card title="Dissolution Profile" />
                    </div>
                )}
            </div>
        </div>
    );
};

const Card = ({ title }: { title: string }) => (
    <div className="bg-white p-4 shadow-md rounded-lg flex items-center space-x-3">
        <CheckCircleIcon className="h-6 w-6 text-blue-500" />
        <h3 className="font-semibold text-lg">{title}</h3>
    </div>
);

export default TestingServices;
