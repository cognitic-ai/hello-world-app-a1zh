"use dom";

import "@/components/ui/shadcn.css";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Globe, ArrowDownToLine, Sparkles } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast Refresh",
    description: "See changes instantly as you code",
    badge: "Dev",
  },
  {
    icon: Globe,
    title: "Cross Platform",
    description: "iOS, Android, and Web from one codebase",
    badge: "Universal",
  },
  {
    icon: ArrowDownToLine,
    title: "OTA Updates",
    description: "Push updates without app store review",
    badge: "Deploy",
  },
  {
    icon: Sparkles,
    title: "Native APIs",
    description: "Full access to device capabilities",
    badge: "Native",
  },
];

export default function ShadcnDemo({
  dom,
}: {
  dom: import("expo/dom").DOMProps;
}) {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col gap-6 p-5 bg-background min-h-full">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Hello, World!
        </h1>
        <p className="text-muted-foreground">
          Welcome to Expo with shadcn/ui
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Counter</CardTitle>
          <CardDescription>
            A simple counter to demonstrate interactivity
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold text-center tabular-nums text-foreground">
            {count}
          </p>
        </CardContent>
        <CardFooter className="gap-2 justify-center">
          <Button variant="outline" onClick={() => setCount(0)}>
            Reset
          </Button>
          <Button onClick={() => setCount((c) => c + 1)}>Increment</Button>
        </CardFooter>
      </Card>

      <div className="grid grid-cols-1 gap-3">
        {features.map((feature) => (
          <Card key={feature.title} className="flex flex-row items-center p-4 gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary">
              <feature.icon className="w-5 h-5 text-foreground" />
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex items-center gap-2">
                <p className="font-medium text-sm text-foreground">
                  {feature.title}
                </p>
                <Badge variant="secondary">{feature.badge}</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                {feature.description}
              </p>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex gap-2 justify-center flex-wrap">
        <Button variant="default">Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
      </div>

      <p className="text-xs text-center text-muted-foreground pb-4">
        Powered by shadcn/ui + Tailwind CSS in an Expo DOM component
      </p>
    </div>
  );
}
