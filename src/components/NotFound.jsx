import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Terminal, ArrowLeft } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-[#020617] flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background Noise & Grid */}
            <div className="absolute inset-0 noise-overlay opacity-10"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/20 blur-[100px] rounded-full"></div>

            <div className="relative z-10 max-w-2xl w-full text-center">
                {/* Erro Code */}
                <div className="relative inline-block mb-8">
                    <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 font-display animate-pulse">
                        404
                    </h1>
                    <div className="absolute inset-0 text-9xl font-bold text-cyan-500 blur-sm opacity-50 animate-pulse">404</div>
                </div>

                {/* Terminal Error Message */}
                <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-xl p-6 md:p-8 mb-8 shadow-2xl relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

                    <div className="flex items-center gap-2 mb-4 text-red-400 font-mono text-sm border-b border-slate-800 pb-3">
                        <ShieldAlert size={16} />
                        <span>SYSTEM_ERROR: TARGET_NOT_FOUND</span>
                    </div>

                    <div className="space-y-4 font-mono text-left">
                        <div className="flex gap-2 text-slate-400">
                            <span className="text-green-400">➜</span>
                            <span>access_request --target "{window.location.pathname}"</span>
                        </div>
                        <div className="text-red-400">
                            [ERROR] Connection failed. The requested coordinate does not exist in this sector.
                        </div>
                        <div className="text-slate-500 text-xs mt-4">
                            Diagnostic: Link broken or sector decommissioned.<br />
                            Recommendation: Return to operational zone immediately.
                        </div>
                    </div>
                </div>

                {/* Action Button */}
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 border border-cyan-500/20 rounded-full transition-all hover:scale-105 group"
                >
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-mono">Return to Base</span>
                </Link>
            </div>

            {/* Decorative Glitch Details */}
            <div className="absolute top-10 left-10 font-mono text-xs text-slate-600">
                SYS_STATUS: <span className="text-red-500 animate-pulse">CRITICAL</span>
            </div>
            <div className="absolute bottom-10 right-10 font-mono text-xs text-slate-600 text-right">
                ERR_ID: 0x404<br />TIME: {new Date().toLocaleTimeString()}
            </div>
        </div>
    );
};

export default NotFound;
