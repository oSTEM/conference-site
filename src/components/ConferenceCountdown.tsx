import { intervalToDuration, isPast } from "date-fns";
import React from "react";

// Thursday, October 28, 2021 at 9:00AM PST
const CONFERENCE_DATE = new Date("2021-10-28T16:00:00.000Z");

export const ConferenceCountdown = () => {
  const now = useCurrentTime();

  if (isPast(CONFERENCE_DATE)) {
    return (
      <div className="text-2xl font-display text-white">
        <p>The conference has started!</p>
      </div>
    );
  }

  // Use date-fns to calculate the distance between the current time and the
  // conference.
  // Note: the `Duration` object says it can have a `weeks` property, but in
  // practice, this seems to only return months and days (`weeks` is always
  // `undefined`).
  const diff = intervalToDuration({
    start: now,
    end: CONFERENCE_DATE,
  });

  return (
    <div className="flex flex-wrap justify-center items-center text-white">
      <Unit n={diff.months || 0} unit="months" />
      <Unit n={diff.days || 0} unit="days" />
      <Unit n={diff.hours || 0} unit="hours" />
      <Unit n={diff.minutes || 0} unit="minutes" />
      <Unit n={diff.seconds || 0} unit="seconds" />
    </div>
  );
};

const Unit = ({ n, unit }: { n: number; unit: string }) => {
  return (
    <div className="flex flex-col items-center p-4">
      <span
        // Use tabular-nums here to force the numbers to display in a monospace
        // font; this is useful especially for seconds, since otherwise the "5"
        // in "52" might shift rightward when decrementing to "51" (since 1
        // usually takes less space). We **don't** use font-display here since
        // many display fonts don't have support for tabular-nums.
        className="block text-3xl tabular-nums"
      >
        {n}
      </span>
      <span className="block mt-2 font-display text-white">{unit}</span>
    </div>
  );
};

/**
 * Return the current time.
 *
 * This hook is updated every second.
 */
function useCurrentTime(): Date {
  const [time, setTime] = React.useState(() => new Date());
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(() => new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return time;
}
