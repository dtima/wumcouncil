import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { MessageCircle } from "lucide-react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { ScrollArea } from "@/components/ui/scroll-area";

const faqs = [
  {
    question: "How do I apply for a business license?",
    answer: "To apply for a business license in Garoua III, visit the Business Licensing Office at City Hall or apply online through our e-services portal. You'll need to provide business details, identification, and pay the applicable fees.",
  },
  {
    question: "What are the garbage collection days?",
    answer: "Garbage collection occurs twice a week. Residential areas are serviced on Mondays and Thursdays, while commercial areas are serviced on Tuesdays and Fridays.",
  },
  {
    question: "How can I pay my utility bills?",
    answer: "You can pay utility bills online through our website, in person at City Hall, or at any authorized payment center. We accept cash, checks, and major credit cards.",
  },
  {
    question: "What documents do I need for a building permit?",
    answer: "For a building permit, you'll need architectural plans, proof of property ownership, site plan, construction details, and environmental impact assessment if applicable.",
  },
  {
    question: "How do I report a pothole?",
    answer: "You can report potholes through our online reporting system, mobile app, or by calling our maintenance hotline at (XXX) XXX-XXXX.",
  },
];

const ChatBot = () => {
  const [selectedFaq, setSelectedFaq] = useState<typeof faqs[0] | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button size="lg" className="rounded-full h-14 w-14">
            <MessageCircle className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[90vw] sm:w-[540px]">
          <SheetHeader>
            <SheetTitle>How can we help you?</SheetTitle>
          </SheetHeader>
          <div className="mt-4 h-[80vh] flex flex-col">
            {selectedFaq ? (
              <div className="space-y-4">
                <Button 
                  variant="ghost" 
                  className="mb-4"
                  onClick={() => setSelectedFaq(null)}
                >
                  ← Back to questions
                </Button>
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">{selectedFaq.question}</h3>
                  <p className="text-muted-foreground">{selectedFaq.answer}</p>
                </div>
              </div>
            ) : (
              <Command className="rounded-lg border shadow-md">
                <CommandInput placeholder="Search frequently asked questions..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Popular Questions">
                    <ScrollArea className="h-[60vh]">
                      {faqs.map((faq, index) => (
                        <CommandItem
                          key={index}
                          onSelect={() => setSelectedFaq(faq)}
                          className="cursor-pointer"
                        >
                          {faq.question}
                        </CommandItem>
                      ))}
                    </ScrollArea>
                  </CommandGroup>
                </CommandList>
              </Command>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ChatBot;