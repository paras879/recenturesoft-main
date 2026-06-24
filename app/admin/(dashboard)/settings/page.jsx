import SettingsTabs from "@/components/admin/SettingsTabs";

export const metadata = {
    title: "Settings | Admin Panel",
};

export default function SettingsPage() {
    return (
        <div className="w-full max-w-5xl mx-auto flex flex-col gap-8 pb-12">
            <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Admin Settings</h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Manage your account and website preferences</p>
            </div>

            <SettingsTabs />
        </div>
    );
}
