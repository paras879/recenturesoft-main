import sys
path = r'd:\RecentureSoft-Admin\app\admin\(dashboard)\website-pages\page.jsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Insert Tab Button
tab_button = """                                        <button onClick={() => setActiveEditTab("react-hiring")} className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-colors whitespace-nowrap ${activeEditTab === 'react-hiring' ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}`}>
                                            <LayoutTemplate className="w-4 h-4" /> Hiring Process
                                        </button>"""

target_button = """<button onClick={() => setActiveEditTab("react-features")} className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-colors whitespace-nowrap ${activeEditTab === 'react-features' ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}`}>
                                            <LayoutTemplate className="w-4 h-4" /> Features & Details
                                        </button>"""

if target_button not in content:
    print("Could not find target button!")
    sys.exit(1)

content = content.replace(target_button, target_button + "\n" + tab_button)

# 2. Insert Tab Content
tab_content = """                                {/* REACT HIRING TAB */}
                                {activeEditTab === "react-hiring" && editPage.path === "/react" && (
                                    <div className="max-w-3xl space-y-6">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Hiring Process</h3>
                                        </div>
                                        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-white/5 shadow-sm space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium mb-1">Title</label>
                                                <input type="text" value={editFormData.content?.hiringTitle || ""} onChange={(e) => setEditFormData({ ...editFormData, content: { ...editFormData.content, hiringTitle: e.target.value } })} className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2" placeholder="e.g. Hiring Process With RecentureSoft" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-1">Intro/Subtitle</label>
                                                <textarea value={editFormData.content?.hiringIntro || ""} onChange={(e) => setEditFormData({ ...editFormData, content: { ...editFormData.content, hiringIntro: e.target.value } })} rows={3} className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2" placeholder="Intro text..." />
                                            </div>
                                            <div>
                                                <div className="flex items-center justify-between mb-4">
                                                    <label className="block text-sm font-medium">Steps</label>
                                                    <button onClick={() => {
                                                        const current = editFormData.content?.hiringSteps || [];
                                                        setEditFormData({ ...editFormData, content: { ...editFormData.content, hiringSteps: [...current, { title: "", desc: "" }] } });
                                                    }} className="px-3 py-1 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-lg text-sm font-medium hover:bg-indigo-100 transition-colors flex items-center gap-2">
                                                        <Plus className="w-4 h-4" /> Add Step
                                                    </button>
                                                </div>
                                                <div className="space-y-3">
                                                    {(editFormData.content?.hiringSteps || []).map((step, idx) => (
                                                        <div key={idx} className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
                                                            <div className="flex-1 space-y-3">
                                                                <input type="text" value={step.title || ""} onChange={(e) => {
                                                                    const newSteps = [...(editFormData.content?.hiringSteps || [])];
                                                                    newSteps[idx] = { ...newSteps[idx], title: e.target.value };
                                                                    setEditFormData({ ...editFormData, content: { ...editFormData.content, hiringSteps: newSteps } });
                                                                }} className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 text-sm font-bold" placeholder="Step Title" />
                                                                <textarea value={step.desc || ""} onChange={(e) => {
                                                                    const newSteps = [...(editFormData.content?.hiringSteps || [])];
                                                                    newSteps[idx] = { ...newSteps[idx], desc: e.target.value };
                                                                    setEditFormData({ ...editFormData, content: { ...editFormData.content, hiringSteps: newSteps } });
                                                                }} rows={2} className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 text-sm" placeholder="Step Description" />
                                                            </div>
                                                            <button onClick={() => {
                                                                const newSteps = (editFormData.content?.hiringSteps || []).filter((_, i) => i !== idx);
                                                                setEditFormData({ ...editFormData, content: { ...editFormData.content, hiringSteps: newSteps } });
                                                            }} className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors">
                                                                <Trash2 className="w-4 h-4" />
                                                            </button>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-1">Outro Text</label>
                                                <textarea value={editFormData.content?.hiringOutro || ""} onChange={(e) => setEditFormData({ ...editFormData, content: { ...editFormData.content, hiringOutro: e.target.value } })} rows={3} className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2" placeholder="Outro text..." />
                                            </div>
                                        </div>
                                    </div>
                                )}
"""

target_content = "{/* REACT FEATURES TAB */}"

if target_content not in content:
    print("Could not find REACT FEATURES TAB!")
    sys.exit(1)

content = content.replace(target_content, tab_content + "\n" + target_content)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Successfully injected admin UI for Hiring Process.")
