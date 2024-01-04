export default function Warning({ warningText }: Readonly<{ warningText: string }>) {
  return <p className="warning">{warningText}</p>;
}
