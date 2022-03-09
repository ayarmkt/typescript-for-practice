import React, { useState, useRef } from 'react';

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  ok?: boolean;
  i?: number;
  fn?: () => string; //if nothing write void
  obj?: {
    f1: string;
  };
  person: Person;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode {
  text: string;
}

export const TextField: React.FC<Props> = ({ handleChange }) => {
  //const [count, setCount] = useState<number | null>(5);
  //const [count, setCount] = useState<{ text: string }>({ text: 'hello' });
  //   const [count, setCount] = useState<TextNode>({ text: 'hello' });
  //   setCount({ text: 'bye' });

  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={divRef}>
      <input ref={inputRef} onChange={handleChange} />
    </div>
  );
};
