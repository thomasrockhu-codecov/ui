import { useEffect } from 'react';
import { usePrevious } from '../../../../common/Hooks';

type Props = {
  ref: React.RefObject<HTMLElement>;
  onBlur: () => void;
};

export const useOnBlur = ({ ref, onBlur }: Props) => {
  const isFocused = ref?.current?.contains(document.activeElement);
  const wasFocused = usePrevious(isFocused);

  useEffect(() => {
    if (wasFocused && !isFocused) {
      onBlur();
    }
  }, [isFocused, onBlur, wasFocused]);
};
