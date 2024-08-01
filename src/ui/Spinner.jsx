export default function Spinner() {
  return (
    <div className="mask-[radial-gradient(farthest-side,transparent_calc(100%-10px),#000_0)] m-12 h-16 w-16 animate-spin rounded-full bg-[radial-gradient(farthest-side,var(--color-brand-600)_94%,transparent)_top/10px_10px_no-repeat,conic-gradient(transparent_30%,var(--color-brand-600))]"></div>
  );
}
