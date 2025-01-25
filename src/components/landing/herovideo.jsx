import HeroVideoDialog from "@/components/ui/hero-video-dialog";

export function HeroVideoDialogTopInBottomOut() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="top-in-bottom-out"
        videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://i.imgur.com/yhYbDIS.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="top-in-bottom-out"
        videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://i.imgur.com/yhYbDIS.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
