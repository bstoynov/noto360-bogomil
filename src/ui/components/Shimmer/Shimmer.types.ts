type WithHeight = { height: number; className?: never };
type WithClassName = { className: string; height?: never };

export type ShimmerProps = { width?: number } & (WithClassName | WithHeight);
