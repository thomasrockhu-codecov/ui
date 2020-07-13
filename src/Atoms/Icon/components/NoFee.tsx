import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const NoFee = (props: BaseProps) => {
  return (
    <IconBase {...props} viewBox="0 0 16 16">
      <path d="M8 0c4.418278 0 8 3.581722 8 8s-3.581722 8-8 8-8-3.581722-8-8 3.581722-8 8-8zm0 1.33333333c-1.60080509 0-3.06983091.56421413-4.21906468 1.50462961l1.82854039 1.82870373-.94280904.94280904-1.82870373-1.82854039C1.89754746 4.93016909 1.33333333 6.39919491 1.33333333 8c0 3.6818983 2.98476834 6.6666667 6.66666667 6.6666667 1.60080509 0 3.0698309-.5642142 4.2190647-1.5046296l-1.8285404-1.8287038.942809-.942809 1.8287038 1.8285404C14.1024525 11.0698309 14.6666667 9.60080509 14.6666667 8c0-3.68189833-2.9847684-6.66666667-6.6666667-6.66666667zm.496 2.01333334v.928c1.10933333.18133333 2.0053333.88533333 2.1333333 2.048H9.40266667c-.128-.45866667-.46933334-.768-.90666667-.90666667v1.99466667C10.064 7.83733333 10.8 8.38133333 10.8 9.576c0 1.2586667-.87466667 2.1226667-2.304 2.24v.9173333h-.91733333v-.928c-1.42933334-.16-2.35733334-.9706666-2.44266667-2.25066663h1.248c.11733333.65066663.608 1.00266663 1.19466667 1.13066663V8.41333333c-1.632-.448-2.208-1.03466666-2.208-2.06933333 0-1.13066667.84266666-1.984 2.208-2.10133333v-.896H8.496zm0 5.32266666V10.728c.62933333-.096 1.06666667-.4586667 1.06666667-1.04533333C9.56266667 9.128 9.168 8.872 8.496 8.66933333zm-.91733333-3.328c-.61866667.08533334-.97066667.448-.97066667.928 0 .45866667.30933333.68266667.97066667.896z" />
    </IconBase>
  );
};

NoFee.displayName = 'Icon.NoFee';
