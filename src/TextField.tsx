import React from 'react';
import { useState } from 'react';

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
}

interface TextNode {
  text: string;
}

export const TextField: React.FC<Props> = () => {
  //const [count, setCount] = useState<number | null>(5);
  //const [count, setCount] = useState<{ text: string }>({ text: 'hello' });
  const [count, setCount] = useState<TextNode>({ text: 'hello' });

  setCount({ text: 'bye' });

  return (
    <div>
      <input />
    </div>
  );
};
