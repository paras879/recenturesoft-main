"use client";

import { useState } from "react";
import { Search, ChevronLeft, ChevronRight, ExternalLink, Edit } from "lucide-react";
import Link from "next/link";
import DeleteBlogButton from "@/components/admin/DeleteBlogButton";

export default function AdminDataTable({ title, data, type }) {
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const itemsPerPage = 10;

    const getColumns = () => {
        if (type === "project") {
            return [
                { label: "Date", key: "date" },
                { label: "Name", key: "name", render: (r) => <span className="font-semibold">{r.name}</span> },
                { label: "Email", key: "email", render: (r) => <a href={`mailto:${r.email}`} className="text-cyan-600 hover:underline">{r.email}</a> },
                { label: "Project Type", key: "projectType", render: (r) => <span className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300 rounded-full text-xs font-medium">{r.projectType}</span> },
                { label: "Message", key: "message", render: (r) => <div className="max-w-xs truncate" title={r.message}>{r.message}</div> },
            ];
        } else if (type === "meeting") {
            return [
                { label: "Submitted", key: "submittedAt" },
                { label: "Name", key: "name", render: (r) => <span className="font-semibold">{r.name}</span> },
                { label: "Email", key: "email", render: (r) => <a href={`mailto:${r.email}`} className="text-cyan-600 hover:underline">{r.email}</a> },
                { label: "Meeting Date", key: "date", render: (r) => <span className="text-emerald-600 dark:text-emerald-400 font-medium">{r.date} at {r.time}</span> },
                { label: "Topic", key: "topic", render: (r) => <span className="px-3 py-1 bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300 rounded-full text-xs font-medium">{r.topic}</span> },
            ];
        } else if (type === "contact") {
            return [
                { label: "Date", key: "date" },
                { label: "Name", key: "name", render: (r) => <span className="font-semibold">{r.name}</span> },
                { label: "Email", key: "email", render: (r) => <a href={`mailto:${r.email}`} className="text-cyan-600 hover:underline">{r.email}</a> },
                { label: "Subject", key: "subject", render: (r) => <span className="px-3 py-1 bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-300 rounded-full text-xs font-medium">{r.subject || "No Subject"}</span> },
                { label: "Message", key: "message", render: (r) => <div className="max-w-xs truncate" title={r.message}>{r.message}</div> },
            ];
        } else if (type === "blog") {
            return [
                { label: "Date", key: "date" },
                { label: "Title", key: "title", render: (r) => <span className="font-semibold">{r.title}</span> },
                { label: "Category", key: "category", render: (r) => <span className="px-3 py-1 bg-cyan-100 text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-300 rounded-full text-xs font-medium">{r.category}</span> },
                { label: "Tags", key: "tags", render: (r) => (
                    <div className="flex gap-1.5 flex-wrap max-w-[14rem]">
                        {r.tags && r.tags.slice(0, 2).map((t, i) => (
                            <span key={i} className="px-2.5 py-0.5 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 rounded-full text-[11px] font-medium text-indigo-600 dark:text-indigo-300 tracking-wide">#{t}</span>
                        ))}
                        {r.tags && r.tags.length > 2 && <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded-full text-[11px] font-medium text-slate-500 dark:text-slate-400">+{r.tags.length - 2}</span>}
                    </div>
                )},
                { label: "Views", key: "views", render: (r) => <span className="text-slate-500">{r.views.toLocaleString()}</span> },
                { label: "Status", key: "published", render: (r) => (
                    <span className={`px-2 py-1 rounded text-xs font-medium ${r.published ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400' : 'bg-slate-200 text-slate-700 dark:bg-white/10 dark:text-slate-300'}`}>
                        {r.published ? 'Published' : 'Draft'}
                    </span>
                )},
                { label: "Actions", key: "actions", render: (r) => (
                    <div className="flex items-center gap-1">
                        <Link href={`/blog/${r.slug}`} target="_blank" className="p-2 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded-lg transition-colors" title="View Blog">
                            <ExternalLink className="w-4 h-4" />
                        </Link>
                        <Link href={`/admin/blogs/edit/${r._id}`} className="p-2 text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-500/10 rounded-lg transition-colors" title="Edit Blog">
                            <Edit className="w-4 h-4" />
                        </Link>
                        <DeleteBlogButton id={r._id} />
                    </div>
                )}
            ];
        }
        return [];
    };

    const columns = getColumns();

    // Filter data
    const filteredData = data.filter((item) => {
        if (!search) return true;
        const searchLower = search.toLowerCase();
        
        // Check generic fields depending on type
        if (type === "blog") {
            return (
                (item.title && item.title.toLowerCase().includes(searchLower)) ||
                (item.category && item.category.toLowerCase().includes(searchLower))
            );
        }
        
        return (
            (item.name && item.name.toLowerCase().includes(searchLower)) ||
            (item.email && item.email.toLowerCase().includes(searchLower)) ||
            (item.topic && item.topic.toLowerCase().includes(searchLower)) ||
            (item.subject && item.subject.toLowerCase().includes(searchLower)) ||
            (item.projectType && item.projectType.toLowerCase().includes(searchLower))
        );
    });

    // Pagination
    const totalPages = Math.ceil(filteredData.length / itemsPerPage) || 1;
    const startIndex = (page - 1) * itemsPerPage;
    const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="w-full flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h1>
                
                <div className="relative w-full sm:w-auto">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                        type="text" 
                        placeholder="Search records..." 
                        value={search}
                        onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                        className="w-full sm:w-64 pl-10 pr-4 py-2 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                </div>
            </div>

            <div className="bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                        <thead className="bg-slate-50 dark:bg-white/5 border-b border-slate-200 dark:border-white/10">
                            <tr>
                                {columns.map((col, i) => (
                                    <th key={i} className="px-6 py-4 font-medium text-slate-500 dark:text-slate-400">
                                        {col.label}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                            {paginatedData.length === 0 ? (
                                <tr>
                                    <td colSpan={columns.length} className="px-6 py-8 text-center text-slate-500">
                                        No records found.
                                    </td>
                                </tr>
                            ) : (
                                paginatedData.map((row, i) => (
                                    <tr key={i} className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                        {columns.map((col, j) => (
                                            <td key={j} className="px-6 py-4 text-slate-700 dark:text-slate-300">
                                                {col.render ? col.render(row) : row[col.key]}
                                            </td>
                                        ))}
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Controls */}
                <div className="px-6 py-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                    <span className="text-sm text-slate-500">
                        Showing {filteredData.length === 0 ? 0 : startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredData.length)} of {filteredData.length} records
                    </span>
                    <div className="flex items-center gap-2">
                        <button 
                            disabled={page === 1}
                            onClick={() => setPage(p => p - 1)}
                            className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 disabled:opacity-50"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <span className="text-sm font-medium">Page {page} of {totalPages}</span>
                        <button 
                            disabled={page === totalPages}
                            onClick={() => setPage(p => p + 1)}
                            className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 disabled:opacity-50"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
