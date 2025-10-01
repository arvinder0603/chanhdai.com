import { USER } from "@/features/profile/data/user";
import { cn } from "@/lib/utils";

export default function Page() {
  return (
    <>
      <div className="mx-auto flex h-screen flex-col justify-center md:max-w-3xl">
        <div className="screen-line-after grow border-x border-edge after:-bottom-px">
          <div className="flex h-4" />
        </div>

        <StaticProfileHeader />
        <Separator />

        <StaticOverview />

        <div className="grow border-x border-edge" />
      </div>
    </>
  );
}

function StaticProfileHeader() {
  return (
    <div className="screen-line-after flex border-x border-edge">
      {/* Avatar */}
      <div className="shrink-0 border-r border-edge">
        <div className="mx-[2px] my-[3px]">
          <img
            className="size-32 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40"
            alt={`${USER.displayName}'s avatar`}
            src={USER.avatar}
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col">
        {/* Background Pattern */}
        <div
          className={cn(
            "flex grow items-end pb-1 pl-4",
            "bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56"
          )}
        >
          <div className="line-clamp-1 font-mono text-xs text-zinc-300 select-none max-sm:hidden dark:text-zinc-800">
            {"text-3xl "}
            <span className="inline dark:hidden">text-zinc-950</span>
            <span className="hidden dark:inline">text-zinc-50</span>
            {" font-medium"}
          </div>
        </div>

        {/* Header */}
        <div className="border-t border-edge">
          <h1 className="flex items-center pl-4 text-3xl font-semibold relative group">
            <span className="transition-colors duration-500 ease-in-out">
              {USER.displayName}
            </span>
            &nbsp;
            <div className="size-[0.6em] translate-y-px text-info select-none">
              ✓
            </div>
          </h1>

          {/* Static sentences */}
          <div className="h-12 border-t border-edge py-1 pl-4 sm:h-auto">
            <div className="text-lg text-muted-foreground">
              {USER.flipSentences[0]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StaticOverview() {
  return (
    <div className="relative overflow-hidden">
      <h2 className="sr-only">Overview</h2>

      <div className="space-y-2 relative z-10 p-4">
        {USER.jobs.map((job, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            <span className="font-medium">{job.title}</span>
            <span className="text-muted-foreground">at</span>
            <span className="text-blue-600">{job.company}</span>
          </div>
        ))}

        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full" />
          <span className="text-muted-foreground">{USER.address}</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-purple-500 rounded-full" />
          <span className="text-muted-foreground">{USER.phoneNumber}</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-orange-500 rounded-full" />
          <span className="text-muted-foreground">{USER.email}</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-cyan-500 rounded-full" />
          <span className="text-muted-foreground">{USER.website}</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-pink-500 rounded-full" />
          <span className="text-muted-foreground">{USER.pronouns}</span>
        </div>
      </div>
    </div>
  );
}

function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-8 w-full border-x border-edge",
        "before:absolute before:-left-[100vw] before:-z-1 before:h-8 before:w-[200vw]",
        "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56",
        className
      )}
    />
  );
}
