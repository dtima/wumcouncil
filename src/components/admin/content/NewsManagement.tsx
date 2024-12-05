import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { NewsItem } from "@/types/admin";

export function NewsManagement() {
  const [isCreating, setIsCreating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [newsItems] = useState<NewsItem[]>([
    {
      id: "1",
      title: "Cultural Festival Success",
      content: "Annual cultural festival brings together diverse communities",
      status: "published",
      lastModified: "2024-02-15",
    },
    {
      id: "2",
      title: "New Community Center",
      content: "Mayor inaugurates state-of-the-art community center",
      status: "draft",
      lastModified: "2024-02-14",
    },
  ]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Success",
        description: "News article has been saved successfully.",
      });
      setIsCreating(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save news article. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">News Management</h1>
        <Button 
          onClick={() => setIsCreating(true)} 
          className="flex items-center gap-2"
          disabled={isSubmitting}
        >
          <Plus className="h-4 w-4" /> Create News Article
        </Button>
      </div>

      {isCreating && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Create News Article</CardTitle>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsCreating(false)}
              disabled={isSubmitting}
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium mb-1">
                  Title
                </label>
                <Input 
                  id="title" 
                  placeholder="Enter article title" 
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="content" className="block text-sm font-medium mb-1">
                  Content
                </label>
                <Textarea
                  id="content"
                  placeholder="Write your article content here..."
                  className="min-h-[200px]"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="image" className="block text-sm font-medium mb-1">
                  Featured Image
                </label>
                <Input 
                  id="image" 
                  type="file" 
                  accept="image/*"
                  disabled={isSubmitting}
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button 
                  type="button"
                  variant="outline" 
                  onClick={() => setIsCreating(false)}
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  variant="outline"
                  disabled={isSubmitting}
                >
                  Save Draft
                </Button>
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                >
                  Publish
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4">
        {newsItems.map((item) => (
          <Card key={item.id}>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{item.content}</p>
                  <p className="text-xs text-gray-400 mt-2">
                    Last modified: {item.lastModified}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      item.status === "published"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {item.status}
                  </span>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}