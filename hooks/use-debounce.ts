import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

type Props = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  timeout?: number;
};

export const useDebounce = ({ value, setValue, timeout = 400 }: Props) => {
  const [debouncedInputValue, setDebouncedInputValue] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event?.target?.value);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedInputValue(value);
    }, timeout);

    return () => clearTimeout(timeoutId);
  }, [value, timeout]);

  return { value: debouncedInputValue, handleInputChange };
};
