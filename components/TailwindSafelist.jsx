// This component ensures Tailwind CSS compiler includes these dynamically generated classes
export default function TailwindSafelist() {
    return (
        <div className="hidden 
            lg:col-span-5 lg:col-span-6 lg:col-span-7 lg:col-span-12
            from-cyan-500/20 to-blue-500/20 
            from-teal-500/20 to-emerald-500/20
            from-purple-500/20 to-fuchsia-500/20 
            from-blue-500/20 to-indigo-500/20
            hover:shadow-[0_20px_40px_-15px_rgba(34,211,238,0.2)]
            dark:hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.15)]
            hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.2)]
            dark:hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.15)]
            hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.2)]
            dark:hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.15)]
            hover:shadow-[0_20px_40px_-15px_rgba(20,184,166,0.2)]
            dark:hover:shadow-[0_0_40px_-10px_rgba(20,184,166,0.15)]
        "></div>
    );
}
