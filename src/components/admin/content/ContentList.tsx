import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContentListProps {
  title: string;
  items: Array<{
    id: string;
    title: string;
    status: "draft" | "published";
    lastModified: string;
  }>;
}

export function ContentList({ title, items }: ContentListProps) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{title}</h2>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" /> Add New
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Recent Content</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="divide-y">
            {items.map((item) => (
              <div
                key={item.id}
                className="py-4 flex items-center justify-between"
              >
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-gray-500">
                    Last modified: {item.lastModified}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span
                    className={cn(
                      "px-2 py-1 text-xs rounded-full",
                      item.status === "published"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    )}
                  >
                    {item.status}
                  </span>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}