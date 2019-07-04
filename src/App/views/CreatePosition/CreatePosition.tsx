import * as React from 'react';

import CreatePositionForm from 'Portfolio/components/OpenPositionForm';

export interface Props {
  handleHomeClick: () => void;
  handleOnCreate: () => void;
}

const CreatePosition: React.FunctionComponent<Props> = ({ handleHomeClick, handleOnCreate }: Props) => (
  <React.Fragment>

    <div>
      <button onClick={handleHomeClick} type="button">Home</button>
    </div>

    <h1>Create position</h1>

    <CreatePositionForm onCreate={handleOnCreate} />

  </React.Fragment>
);

export default CreatePosition;
