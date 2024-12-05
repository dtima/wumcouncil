import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function EventsManagement() {
  const [isCreating, setIsCreating] = useState(false);
  const [events] = useState([
    {
      id: "1",
      title: "L5P Holidaze",
      date: "2024-11-16",
      time: "12:00 PM - Feb, 03 10:00 PM",
      location: "Little Five Points",
      description: "Annual holiday festival"
    },
    {
      id: "2",
      title: "Holiday Vendors Market",
      date: "2024-12-06",
      time: "01:00 PM - Dec, 08 11:00 PM",
      location: "City Center",
      description: "Local vendors showcase"
    }
  ]);

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Events Management</h1>
        <Button onClick={() => setIsCreating(true)} className="flex items-center gap-2">
          <Plus className="h-4 w-4" /> Create Event
        </Button>
      </div>

      {isCreating && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Create Event</CardTitle>
            <Button variant="ghost" size="icon" onClick={() => setIsCreating(false)}>
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium mb-1">
                  Title
                </label>
                <Input id="title" placeholder="Enter event title" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium mb-1">
                    Date
                  </label>
                  <Input id="date" type="date" />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium mb-1">
                    Time
                  </label>
                  <Input id="time" type="time" />
                </div>
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium mb-1">
                  Location
                </label>
                <Input id="location" placeholder="Enter event location" />
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-1">
                  Description
                </label>
                <Textarea
                  id="description"
                  placeholder="Write event description here..."
                  className="min-h-[100px]"
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsCreating(false)}>
                  Cancel
                </Button>
                <Button>Save Draft</Button>
                <Button>Publish</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4">
        {events.map((event) => (
          <Card key={event.id}>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{event.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{event.description}</p>
                  <div className="text-xs text-gray-400 mt-2 space-y-1">
                    <p>Date: {event.date}</p>
                    <p>Time: {event.time}</p>
                    <p>Location: {event.location}</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Edit
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}