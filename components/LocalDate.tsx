import { useEffect, useLayoutEffect, useRef } from "react";

type LocalDateProps = {
  date: Date;
  localeOptions?: Intl.DateTimeFormatOptions;
};
export const LocalDate = ({ date, localeOptions }: LocalDateProps) => {
  const locale = Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    ...localeOptions,
  });

  // handle locale changes once we get to the client
  let localDateString = useRef(locale.format(date));
  useEffect(() => {
    localDateString.current = locale.format(date);
  }, [locale, date]);

  return (
    <time title={date.toISOString()} dateTime={date.toISOString()}>
      {localDateString.current}
    </time>
  );
};
