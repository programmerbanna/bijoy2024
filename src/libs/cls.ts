export default function cls(...args: ClsArgumentArray): string {
  const classes: string[] = [];

  args.forEach((arg) => {
    if (
      typeof arg === "string" ||
      typeof arg === "number" ||
      typeof arg === "boolean"
    ) {
      classes.push(String(arg));
    } else if (arg === undefined || arg === null) {
    } else if (Array.isArray(arg)) {
      classes.push(cls(...arg));
    } else if (typeof arg === "object") {
      Object.keys(arg).forEach((key) => {
        if (arg[key]) {
          classes.push(key);
        }
      });
    }
  });

  return classes.join(" ");
}
