import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FileText, Calendar, MessageSquare, ArrowUpRight, ArrowDownRight, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  {
    title: "Total Users",
    value: "1,234",
    icon: Users,
    change: "+12%",
    changeType: "increase",
  },
  {
    title: "Content Pages",
    value: "56",
    icon: FileText,
    change: "+3",
    changeType: "increase",
  },
  {
    title: "Upcoming Events",
    value: "8",
    icon: Calendar,
    change: "-2",
    changeType: "decrease",
  },
  {
    title: "Chat Messages",
    value: "423",
    icon: MessageSquare,
    change: "+18%",
    changeType: "increase",
  },
];

const recentActivity = [
  {
    id: 1,
    action: "New user registration",
    user: "John Doe",
    time: "2 minutes ago",
    type: "user",
  },
  {
    id: 2,
    action: "Content page updated",
    user: "Sarah Smith",
    time: "1 hour ago",
    type: "content",
  },
  {
    id: 3,
    action: "New event created",
    user: "Mike Johnson",
    time: "3 hours ago",
    type: "event",
  },
];

export function AdminOverview() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p
                className={cn(
                  "text-xs mt-1 flex items-center",
                  stat.changeType === "increase"
                    ? "text-green-600"
                    : "text-red-600"
                )}
              >
                {stat.changeType === "increase" ? (
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                ) : (
                  <ArrowDownRight className="h-3 w-3 mr-1" />
                )}
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-medium flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0"
              >
                <div className="space-y-1">
                  <p className="text-sm font-medium">{activity.action}</p>
                  <p className="text-xs text-gray-500">by {activity.user}</p>
                </div>
                <span className="text-xs text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}