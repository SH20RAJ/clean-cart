export const metadata = {
  title: "CleanCart - Smart Laundry Service Platform",
  description:
    "Experience premium laundry services with CleanCart. Smart scheduling, real-time tracking, and eco-friendly cleaning solutions.",
};

export default function LandingLayout({ children }) {
  return (
    <main className="flex min-h-screen justify-center items-center">
      {children}
    </main>
  );
}
