import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Wrench } from 'lucide-react';

const AnimeDetailsPage = () => {
    return (
        <div className="min-h-screen bg-[#0b0b0b] text-white flex items-center justify-center">
            <div className="text-center px-6">
                <Wrench className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h1 className="text-3xl font-bold mb-2">Work in Progress</h1>
                <p className="text-gray-400 mb-8">This page is still being built. Check back soon!</p>
                <Link
                    to="/anime"
                    className="inline-flex items-center gap-2 bg-white/10 border border-white/10 text-white px-5 py-2.5 rounded-xl hover:bg-white/15 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Anime
                </Link>
            </div>
        </div>
    );
};

export default AnimeDetailsPage;
