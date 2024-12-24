export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-primary text-primary-foreground">
      <div className="p-2 text-center">
        Copyright © {year} PT HaeBot Teknologi Indonesia. All rights reserved.
      </div>
    </footer>
  );
}
