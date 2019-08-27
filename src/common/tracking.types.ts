type TrackFunction = (componentName: string, e: React.SyntheticEvent, props: any) => void;

export type TrackingContextData = {
  track: TrackFunction;
};
