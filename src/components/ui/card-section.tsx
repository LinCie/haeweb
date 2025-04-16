import { cn } from "@/lib/utils";
import React from "react";
import { Card } from "./card";

function CardSection({
  className,
  ...props
}: React.ComponentPropsWithRef<"section">) {
  return (
    <section className={cn("w-full px-4 py-6 md:py-8", className)} {...props} />
  );
}

function CardSectionContainer({
  className,
  ...props
}: React.ComponentPropsWithRef<"div">) {
  return (
    <Card
      className={cn(
        "mx-auto max-w-(--breakpoint-xl) px-6 backdrop-blur-sm md:px-8 lg:px-12",
        className,
      )}
      {...props}
    />
  );
}

function CardSectionHeader({
  className,
  ...props
}: React.ComponentPropsWithRef<"header">) {
  return (
    <header
      className={cn("flex flex-col space-y-1.5 px-3 pt-12", className)}
      {...props}
    />
  );
}

function CardSectionTitle({
  className,
  ...props
}: React.ComponentPropsWithRef<"h2">) {
  return (
    <h2
      className={cn(
        "max-w-xl text-2xl font-bold leading-tight text-primary lg:text-3xl",
        className,
      )}
      {...props}
    />
  );
}

function CardSectionSubtitle({
  className,
  ...props
}: React.ComponentPropsWithRef<"p">) {
  return (
    <p
      className={cn(
        "max-w-2xl pb-6 text-base text-muted-foreground md:text-lg",
        className,
      )}
      {...props}
    />
  );
}

function CardSectionContent({
  className,
  ...props
}: React.ComponentPropsWithRef<"div">) {
  return <div className={cn("px-3 pb-12 md:px-6", className)} {...props} />;
}

export {
  CardSection,
  CardSectionContainer,
  CardSectionHeader,
  CardSectionTitle,
  CardSectionSubtitle,
  CardSectionContent,
};
