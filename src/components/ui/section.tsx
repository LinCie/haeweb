import { cn } from "@/lib/utils";
import { Card } from "./card";

function Section({
  className,
  ...props
}: React.ComponentPropsWithRef<"section">) {
  return (
    <section className={cn("w-full px-4 py-6 md:py-8", className)} {...props} />
  );
}

function SectionContainer({
  className,
  ...props
}: React.ComponentPropsWithRef<"div">) {
  return (
    <div
      className={cn("mx-auto max-w-(--breakpoint-xl) backdrop-blur-sm", className)}
      {...props}
    />
  );
}

function SectionHeader({
  className,
  ...props
}: React.ComponentPropsWithRef<"header">) {
  return <header className={cn("flex flex-col px-3", className)} {...props} />;
}

function SectionTitle({
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

function SectionSubtitle({
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

function SectionCardContent({
  className,
  ...props
}: React.ComponentPropsWithRef<"div">) {
  return <Card className={cn("px-6 md:px-8 lg:px-12", className)} {...props} />;
}

function SectionContent({
  className,
  ...props
}: React.ComponentPropsWithRef<"div">) {
  return <div className={cn("px-6 md:px-8 lg:px-12", className)} {...props} />;
}

export {
  Section,
  SectionContainer,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  SectionCardContent,
  SectionContent,
};
