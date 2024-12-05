import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FileText, Calendar, MessageSquare } from "lucide-react";
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

export function AdminOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p
              className={cn(
                "text-xs mt-1",
                stat.changeType === "increase"
                  ? "text-green-600"
                  : "text-red-600"
              )}
            >
              {stat.change} from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}