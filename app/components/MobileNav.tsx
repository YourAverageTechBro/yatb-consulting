import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[250px] sm:w-[300px]">
        <nav className="flex flex-col gap-6 mt-10">
          <a
            href="#services"
            className="text-lg font-medium hover:text-primary transition-colors"
          >
            Services
          </a>
          <a
            href="#about"
            className="text-lg font-medium hover:text-primary transition-colors"
          >
            About
          </a>
          <a
            href="#pricing"
            className="text-lg font-medium hover:text-primary transition-colors"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="text-lg font-medium hover:text-primary transition-colors"
          >
            FAQ
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
