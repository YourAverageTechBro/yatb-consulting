import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MobileNav } from "./components/MobileNav";
import Image from "next/image";
import { CheckoutButton } from "./components/CheckoutButton";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Navigation */}
      <header className="container max-w-4xl mx-auto py-6 flex justify-between items-center px-4">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 relative rounded-full overflow-hidden transition-transform group-hover:scale-110">
            <Image
              src="/youraveragetechbro.jpeg"
              alt="Your Average Tech Bro"
              fill
              className="object-cover"
            />
          </div>
          <div className="font-bold text-xl group-hover:text-primary transition-colors">
            Your Average Tech Bro
          </div>
        </a>
        <nav className="hidden md:flex space-x-6">
          <a href="#services" className="hover:text-primary transition-colors">
            Services
          </a>
          <a href="#about" className="hover:text-primary transition-colors">
            About
          </a>
          <a href="#pricing" className="hover:text-primary transition-colors">
            Pricing
          </a>
          <a href="#faq" className="hover:text-primary transition-colors">
            FAQ
          </a>
          <a
            href="https://billing.stripe.com/p/login/fZedRag2Qd16fPG8ww"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Manage Subscription
          </a>
        </nav>
        <MobileNav />
      </header>

      {/* Hero Section */}
      <section className="container max-w-3xl mx-auto py-16 flex flex-col items-center text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
          I will help you build + market your app
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 font-mono">
          Work with me 1:1 to learn how to build + market your own app
        </p>
        <Button size="lg" className="px-10 py-6 text-base font-mono">
          <a href="#pricing">Get Started</a>
        </Button>
      </section>

      {/* Services Section */}
      <section id="services" className="container max-w-3xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Here's what you'll get
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Chat</CardTitle>
            </CardHeader>
            <CardContent className="font-mono">
              Message me on Discord as much as you want to get my help on
              building/marketing your SaaS.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>1-1 Coaching Calls</CardTitle>
            </CardHeader>
            <CardContent className="font-mono">
              We'll hop on a call so you can ask me anything you want about
              building/marketing your SaaS.
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="max-w-3xl mx-auto" />

      {/* About Section */}
      <section
        id="about"
        className="container max-w-3xl mx-auto py-20 px-4 bg-muted/30 rounded-lg my-8"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">
          Why should you work with me?
        </h2>
        <div className="mx-auto flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-shrink-0 w-48 h-48 relative rounded-full overflow-hidden mb-6 md:mb-0 border-4 border-background shadow-lg">
            <Image
              src="/youraveragetechbro.jpeg"
              alt="Your Average Tech Bro"
              fill
              className="object-cover"
            />
          </div>
          <div className="font-mono">
            <p className="text-lg mb-6">
              I've spent the past 4 years building 13+ different apps. The vast
              majority of them have failed, but in the last year I've been able
              to make 4 different apps that have generated {">"}$1,000/month at
              their peak.
            </p>
            <p className="text-lg mb-6">
              I'm not an expert. I'm not a millionaire. I'm just a normal guy
              that has built a lot of apps and figured out how to market them on
              social media to get users + revenue.
            </p>
          </div>
        </div>
      </section>

      <Separator className="max-w-3xl mx-auto" />

      {/* Who is this for Section */}
      <section className="container max-w-3xl mx-auto py-20 px-4 my-8">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Who this is for
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>People who don't know how to build an app</CardTitle>
            </CardHeader>
            <CardContent className="font-mono">
              <p>
                Doesn't matter if you don't know how to code at all or are a
                seasoned developer, I will help you learn how to build an app.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                People who don't know how to market their apps
              </CardTitle>
            </CardHeader>
            <CardContent className="font-mono">
              <p>
                I'll help you make social media content to grow your app on
                social media. I'll be your social media marketing assistant.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container max-w-3xl mx-auto py-20 px-4 my-8">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Should you purchase this service?
        </h2>
        <div className="flex flex-col gap-4 text-md font-mono">
          <p>
            I publish everything I know on my Youtube/Instagram/Tiktok accounts.
          </p>
          <p>
            Everything you need to know to build an app + market an app already
            exists out there on the internet.
          </p>
          <p>
            So, you should only purchase this service if you're 100% sure you
            want my help and want my 1:1 support.
          </p>
          <p>
            I'll provide you any technical advice + marketing advice that I
            possibly can, but I will not build your app or make marketing
            content for your app.
          </p>
          <p>
            Once again, I am not a millionaire nor an expert. I'm just a guy
            that has built a lot of apps and figured out how to market them on
            social media to get users + revenue. What works for me isn't
            guaranteed to work for you.
          </p>
          <p>
            If you do decide to work with me and you are not satisfied with my
            service, I have a 100% refund guaranteed policy. No questions asked.
          </p>
        </div>
      </section>

      <Separator className="max-w-3xl mx-auto" />

      {/* Pricing Section */}
      <section
        id="pricing"
        className="container max-w-3xl mx-auto py-20 px-4 bg-muted/30 rounded-lg my-8"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-2 border-primary">
            <CardHeader>
              <CardTitle className="text-2xl">One-off Call</CardTitle>
              <CardDescription className="text-xl font-bold">
                $299.00
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 font-mono">
              <div className="flex items-start gap-2">
                <div className="mt-1">✓</div>
                <p>
                  1-hour call to discuss anything related to building or
                  marketing your app
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1">✓</div>
                <p>Get personalized advice for your specific situation</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1">✓</div>
                <p>
                  Perfect if you're stuck on a specific problem or need
                  direction
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1">✓</div>
                <p>No commitment required</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1">✓</div>
                <p>
                  100% refund guaranteed if you're not satisfied with the
                  service
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full font-mono" size="lg">
                <a
                  href="https://cal.com/youraveragetechbro/60min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Call
                </a>
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-2 border-primary">
            <CardHeader>
              <CardTitle className="text-2xl">Monthly Coaching</CardTitle>
              <CardDescription className="text-xl font-bold">
                $999.00 / month
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 font-mono">
              <div className="flex items-start gap-2">
                <div className="mt-1">✓</div>
                <p>
                  Work 1:1 with me to get advice on how to build + market your
                  app
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1">✓</div>
                <p>
                  Get 4 calls a month to ask me anything you want about building
                  an app
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1">✓</div>
                <p>
                  Message me as much as you want 24/7 to get my help on
                  building/marketing
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1">✓</div>
                <p>
                  100% refund guaranteed if you're not satisfied with the
                  service
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <CheckoutButton />
            </CardFooter>
          </Card>
        </div>
      </section>

      <Separator className="max-w-3xl mx-auto" />

      {/* Manage Subscription Section */}
      <section className="container max-w-3xl mx-auto py-16 px-4 my-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Already a subscriber?</h2>
        <p className="text-lg mb-8 font-mono">
          Manage your subscription, update payment methods, or view billing
          history.
        </p>
        <Button variant="outline" size="lg" className="font-mono">
          <a
            href="https://billing.stripe.com/p/login/fZedRag2Qd16fPG8ww"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            Manage Subscription
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-external-link"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </Button>
      </section>

      <Separator className="max-w-3xl mx-auto" />

      {/* FAQ Section */}
      <section id="faq" className="container max-w-3xl mx-auto py-20 px-4 my-8">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Frequently asked questions
        </h2>
        <div className="mx-auto">
          <Accordion
            type="multiple"
            defaultValue={["item-1", "item-2", "item-3", "item-4", "item-5"]}
            className="w-full"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>What is the refund policy?</AccordionTrigger>
              <AccordionContent className="font-mono">
                I offer a 100% refund guarantee if you're not satisfied with the
                service. Your satisfaction is my priority.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Should you purchase this service?
              </AccordionTrigger>
              <AccordionContent className="font-mono">
                Only if you're 100% sure you want 1:1 help. There are many free
                resources available online, including my YouTube channel. This
                service is for those who want personalized guidance.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What apps can you help with?</AccordionTrigger>
              <AccordionContent className="font-mono">
                I can help with a wide range of applications, from simple web
                apps to more complex SaaS products. Whether you're starting from
                scratch or improving an existing app, I can provide guidance.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                What marketing can you help with?
              </AccordionTrigger>
              <AccordionContent className="font-mono">
                I can help you create social media content, develop marketing
                strategies, and find ways to grow your user base. I'll be your
                social media marketing assistant.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Do you build apps/make marketing content for me?
              </AccordionTrigger>
              <AccordionContent className="font-mono">
                No, I don't build the apps or create the marketing content for
                you. Instead, I provide guidance, feedback, and coaching to help
                you build and market your own app. The goal is to empower you
                with the skills and knowledge to do it yourself.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 mt-auto">
        <div className="container max-w-3xl mx-auto text-center px-4">
          <p className="mb-4 font-mono">
            © 2024 Your Average Tech Bro. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 font-mono">
            <a
              href="https://twitter.com/youraveragetechbro"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://youtube.com/@youraveragetechbro"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              YouTube
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
