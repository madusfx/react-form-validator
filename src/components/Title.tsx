interface TitleProps {
  text?: string;
}

export function Title({ text }: TitleProps) {
  return <p className="text-teal-100 text-lg mt-2">{text}</p>;
}
