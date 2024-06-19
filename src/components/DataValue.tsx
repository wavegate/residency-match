export default function DataValue({ label, value }) {
  return (
    <div className={`flex flex-col gap-[4px]`}>
      <div className={`font-semibold`}>{label}</div>
      <div>{value}</div>
    </div>
  );
}
