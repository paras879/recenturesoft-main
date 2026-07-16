import { connectDB } from "@/lib/mongodb";
import ActivityLog from "@/models/ActivityLog";
import AdminDataTable from "@/components/admin/AdminDataTable";
import { formatDateIST } from "@/lib/formatDateIST";

export const metadata = {
    title: "Activity Logs | RecentureSoft Admin",
};

export const dynamic = 'force-dynamic';

export default async function ActivityLogsPage() {
    await connectDB();
    
    // Fetch logs
    const rawLogs = await ActivityLog.find().sort({ createdAt: -1 }).limit(500).lean();

    const logs = rawLogs.map(log => ({
        ...log,
        _id: log._id.toString(),
        createdAt: formatDateIST(log.createdAt)
    }));

    return (
        <div className="pb-10 flex flex-col gap-6">
            <AdminDataTable 
                title="Activity Logs" 
                data={logs} 
                type="activity" 
            />
        </div>
    );
}
