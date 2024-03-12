interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  return (
    <button className="bg-yellow-300 px-4 py-1.5 rounded-sm hover:bg-yellow-200">
      {text}
    </button>
  );
}