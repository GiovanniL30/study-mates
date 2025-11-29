export default function merge(...classes: (string | undefined | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}
