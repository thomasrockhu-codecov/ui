export type Props = {
  numberOfSteps: number;
  currentStep: number;
  /** Label that will be rendered together with each corresponding step bubble
   * The array must be same length as numberOfSteps
   * Labels will be hidden on smaller screen widths */
  stepLabels?: string[];
};
