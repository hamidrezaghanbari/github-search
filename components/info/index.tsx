type Props = {
  keyProp: string;
  value?: string | number;
};

export const Info = ({ keyProp, value = '' }: Props) => {
  return (
    <li className="inline-flex gap-2 text-white truncate">
      <small>{keyProp}: </small>
      <b>{value}</b>
    </li>
  );
};
